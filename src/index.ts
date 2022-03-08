import dotenv from 'dotenv-safe';
import app from './app';

async function main() {
  dotenv.config({ allowEmptyValues: true });

  const port = process.env.PORT;
  const env = process.env.NODE_ENV;

  app.listen(port, () => console.info(`server started on port ${port} (${env})`));
}

main()
  .then()
  .catch((error: any) => {
    console.error('Error starting app:', error);

    process.exit(-1);
  });
