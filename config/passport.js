const UserModel = require('./../database/models/user_model');
const passport  = require("passport");
const { Strategy: JWTStrategy, ExtractJwt } = require("passport-jwt");

passport.use(UserModel.createStrategy());

passport.serializeUser(UserModel.serializeUser());
passport.deserializeUser(UserModel.deserializeUser());

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
}, async (jwtPayload, done) => {
    try {
        const user = await UserModel.findById(jwtPayload.sub);

        if (!user) {
            return done("User not found");
        }

        return done(null, user);
    } catch (err) {
        done(err);
    }
}));

module.exports = passport;