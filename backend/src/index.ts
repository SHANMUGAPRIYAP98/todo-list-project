import express from 'express';
import cors from "cors";
import bodyParser from 'body-parser';
import registerController from './controller/registerController';
import loginController from './controller/loginController';
import dbConnection from './helpers/dbConnection';
import todoRouter from './router/todoRoutes';
import logoutController from './controller/logoutController';
import { sessionController } from './controller/sessionController';

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