import express from 'express'
import asyncExitHook from 'async-exit-hook'
import { CLOSE_DB, CONNECT_DB } from '~/config/mongodb'
import 'dotenv/config'
import { env } from '~/config/environment'

const START_SERVER = () => {
  const app = express();
  const hostname = env.APP_HOST || "localhost";
  const port = env.APP_PORT || 8000;

  app.get('/', async (req, res) => {
    res.end('<h1>Hello World!</h1><hr>');
  })
  app.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/`);
  })

  // Clean up services before shutting down server
  asyncExitHook(() => {
    CLOSE_DB();
    console.log('Server shuts down!');
  })
}
// IIFE (Immediately Invoked Function Expression)
(async () => {
  try {
    await CONNECT_DB();
    console.log('Connected to Mongodb Atlas!');
    START_SERVER();
  } catch (error) {
    console.error(error);
    process.exit(0);
  }
})();