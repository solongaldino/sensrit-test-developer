import { env } from 'process';

class EnvVariables {
  allEnvVariablesExist() {
    this.get_SERVER_PORT();
    this.get_BASE_URL_FRONT_END();
  }

  get_SERVER_PORT() {
    const envVariable = env.SERVER_PORT;
    if (!envVariable) throw new Error('Env variable SERVER_PORT not found.');
    return envVariable;
  }

  get_BASE_URL_FRONT_END() {
    const envVariable = env.BASE_URL_FRONT_END;
    if (!envVariable) throw new Error('Env variable BASE_URL_FRONT_END not found.');
    return envVariable;
  }
}

export default new EnvVariables();
