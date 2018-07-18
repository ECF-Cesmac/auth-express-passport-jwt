import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import passport from "passport";

import routes from "./routes";
import connection from "./config/database";

const Application = async () => {
  try {
    const app = express();
    const conn = await connection(); 

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(morgan("combined"));
    app.use(passport.initialize());
    app.use("/", routes);

    if (conn === undefined) {
      throw new Error('the connection failed');
    }

    return app;
  } catch (error) {
    console.log("application:", error.message);
    process.exit(1);
  }
};

export default Application;
