const Listing = require('./models/listing.js');
const Review = require('./models/review.js');
const { listingSchema, reviewSchema } = require('./schema');
const ExpressError = require('./utils/ExpressError');

module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.redirectTo = req.originalUrl;
        req.flash("error", "You must be logged in to do that!");
        return res.redirect("/users/login");
    }
    next();
};

module.exports.saveRedirectTo = (req, res, next) => {
    if (req.session.redirectTo) {
        res.locals.redirectTo = req.session.redirectTo;
    }
    next();
};
module.exports.isOwner = async (req, res, next) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    if (!listing.owner.equals(res.locals.currentUser._id)) {
        req.flash("error", "You don't have permission to do that!");
        return res.redirect(`/listings/${id}`);
    }
    next();
};

module.exports.validateListing = (req, res, next) => {
    let result = listingSchema.validate(req.body);
    console.log(result);
    if (result.error) {
        let msg = result.error.details.map(el => el.message).join(",");
        throw new ExpressError(400, msg);
    }
    else {
        next();
    }
};

module.exports.validateReview = (req, res, next) => {
    let result = reviewSchema.validate(req.body);
    console.log(result);
    if (result.error) {
        let msg = result.error.details.map(el => el.message).join(",");
        throw new ExpressError(400, msg);
    }
    else {
        next();
    }
};

module.exports.isReviewAuthor = async (req, res, next) => {
    let { id, reviewId } = req.params;
    let review = await Review.findById(reviewId);
    if (!review.author.equals(res.locals.currentUser._id)) {
        req.flash("error", "You don't have permission to do that!");
        return res.redirect(`/listings/${id}`);
    }
    next();
};