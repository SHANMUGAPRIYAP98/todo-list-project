import express from 'express';
import cors from "cors";
import bodyParser from 'body-parser';
import registerController from './src/controller/registerController';
import loginController from './src/controller/loginController';
import dbConnection from './src/helpers/dbConnection';
import todoRouter from './src/router/todoRoutes';
import logoutController from './src/controller/logoutController';
import { sessionController } from './src/controller/sessionController';

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/health", (req, res) => {
  res.send({ statusCode: 200, message: "health api", path: "/health" });
});

app.post('/register', registerController);
app.post('/login', loginController);
app.post('/logout', logoutController);

dbConnection();

app.use('/todos', todoRouter);

app.get("/session/:user_id", sessionController);

app.listen(9000, () => {
    console.log("Listening to 9000 port");
  });
  
export default app;