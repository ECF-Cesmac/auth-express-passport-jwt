import { Router } from "express";
import passport from "passport";
import expressJoiValidator from "express-joi-validator";

import * as UserController from "../controllers/user";
import { userSchema } from "../config/validation-schema";

import '../config/jwt-strategy';

const router = Router();

const middlewareJwt = passport.authenticate("jwt", { session: false });

const middlewareValidator = expressJoiValidator(userSchema);

const validatorEmail = () => { 
  (req, res, next) => {
    if (/^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/
        .test(req.params.args)
    ) {
      return UserController.fetchOneByEmail(req, res);
    }
    next();
  }
}

router.get(
  "/",
  middlewareJwt,
  (req, res) =>
  UserController.fetchAll(req, res)
);

router.get(
  "/:args",
  middlewareJwt,
  validatorEmail,
  (req, res, next) =>
  UserController.fetchOneById(req, res)
);

router.post(
  "/",
  middlewareValidator,
  (req, res) =>
  UserController.saveOne(req, res)
);

router.put(
  "/:id",
  middlewareJwt,
  (req, res) =>
  UserController.modifyOne(req, res)
);

router.delete(
  "/:id",
  middlewareJwt,
  (req, res) =>
  UserController.removeOne(req, res)
);

export default router;
