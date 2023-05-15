import axios from 'axios';
interface ISendMailDTO {
  to: { name: string; email: string };
  params: Record<string, unknown>;
  templateId: number;
}

class Sendinblue {
  private apiKey: string;

  constructor() {
    const envVariable = process.env.SEND_IN_BLUE_API_KEY;
    if (!envVariable) throw new Error('Env variable SEND_IN_BLUE_API_KEY not found.');
    this.apiKey = envVariable;
  }

  async sendMail({ to, params, templateId }: ISendMailDTO) {
    return await axios({
      method: 'post',
      url: 'https://api.sendinblue.com/v3/smtp/email',
      data: {
        to: [
          {
            email: to.email,
            name: to.name,
          },
        ],
        templateId: templateId,
        params: params,
        headers: {
          charset: 'iso-8859-1',
        },
      },
      headers: {
        accept: 'application/json',
        'api-key': this.apiKey,
        'content-type': 'application/json',
      },
    });
  }
}

export default new Sendinblue();
