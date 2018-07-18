import passport from "passport";
import passportLocal from "passport-local";
import bcrypt from "bcrypt";

import * as UserRepository from "../repositories/user";

const LocalStrategy = passportLocal.Strategy;

const fields = {
  usernameField: "email",
  passwordField: "password"
};

const strategy = async (email, password, done) => {
  try {
    const user = await UserRepository.bringOneByEmail(email);
    const isMatch = await bcrypt.compare(password, user.password);

    if (user.email !== email) {
      return done(null, false);
    }

    if (!isMatch) {
      return done(null, false);
    }

    return done(null, user);
  } catch (error) {
    done(error);
  }
};

passport.use(new LocalStrategy(fields, strategy));
