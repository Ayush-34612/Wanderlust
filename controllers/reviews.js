const Listing = require('../models/listing');
const Review = require('../models/review');

module.exports.postReview = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    let review = new Review(req.body.review);
    console.log(review);
    review.author = req.user._id;
    listing.reviews.push(review);
    await review.save();
    await listing.save();
    req.flash("success", "Review Created!");
    res.redirect(`/listings/${id}`);
};

module.exports.deleteReview = async (req, res) => {
    let { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Review Deleted!");
    res.redirect(`/listings/${id}`);
};

