import { Router } from "express";
import passport from "passport";
import expressJoiValidator from "express-joi-validator";

import * as AuthController from "../controllers/auth";
import { signinSchema } from "../config/validation-schema";

import '../config/local-strategy';

const router = new Router();

const middlewareLocal = passport.authenticate("local", { session: false });
const middlewareValidator = expressJoiValidator(signinSchema);
const actionSignin = (req, res) => AuthController.signin(req, res);

const routes = [
  {
    method: 'post',
    path: '/signin',
    action: actionSignin,
    middleware: [middlewareLocal, middlewareValidator]
  }
];

const createRoute = (route) => { 
  (route.middleware)
    ? router[route.method](route.path, ...route.middleware, route.action)
    : router[route.method](route.path, route.action);
};

const createRoutes = (routes) => routes.map(createRoute);

createRoutes(routes);

export default router;
