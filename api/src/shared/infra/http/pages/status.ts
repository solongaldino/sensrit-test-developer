import { Router } from 'express';

const router = Router();

router.get('/status', (req, res) => {
  return res
    .status(200)
    .header('Content-Type', 'text/html')
    .send('<h1 style="color:green;font-family:sans-serif">OK</h1>');
});

export default router;
