import passport from "passport";
import passportJwt from "passport-jwt";

import * as UserRepository from "../repositories/user";

const JwtStrategy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;

const opts = {
  secretOrKey: "mySecretKey",
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
};

const strategy = async (jwt_payload, done) => {
  try {
    const user = await UserRepository.bringOneById(jwt_payload.sub);
    if (!user) {
      return done(null, false);
    }
    return done(null, user);
  } catch (error) {
    done(error.message);
  }
};

passport.use(new JwtStrategy(opts, strategy));
