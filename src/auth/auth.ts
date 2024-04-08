import passport from "passport";
import { Strategy as GoogleStrategy, Profile } from "passport-google-oauth20";
import env from "../environment/env";

passport.use(
  new GoogleStrategy(
    {
      clientID: env.clientId,
      clientSecret: env.clientSecret,
      callbackURL: env.callbackURL,
    },
    async (
      accessToken: string,
      refreshToken: string,
      profile: Profile,
      done
    ) => {
      console.log(profile);
      return done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  //@ts-ignore
  done(null, user);
});
