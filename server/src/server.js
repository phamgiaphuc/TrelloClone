import express from 'express'
import asyncExitHook from 'async-exit-hook'
import { CLOSE_DB, CONNECT_DB } from '~/config/mongodb'
import 'dotenv/config'
import { env } from '~/config/environment'
import { APIs_V1 } from '~/routes/v1'
import { errorHandlingMiddleware } from '~/middlewares/errorHandlingMiddleware'

const START_SERVER = () => {
  const app = express();
  const hostname = env.APP_HOST || "localhost";
  const port = env.APP_PORT || 8000;

  app.use(express.json())
  app.use('/v1', APIs_V1)
  app.use(errorHandlingMiddleware)
  app.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/`);
  })

  // Clean up services before shutting down server
  asyncExitHook(() => {
    CLOSE_DB();
    console.log('Server shuts down!');
  })
}
(async () => {
  try {
    await CONNECT_DB();
    console.log('Successfully connected to Mongodb Atlas!');
    START_SERVER();
  } catch (error) {
    console.log(error);
    process.exit(0);
  }
})();