const express = require('express');
const router = express.Router({ mergeParams: true });
const wrapAsync = require('../utils/wrapAsync');
const Review = require('../models/review');
const Listing = require('../models/listing');
const { validateReview, isLoggedIn, isReviewAuthor } = require('../middleware.js');
const ExpressError = require('../utils/ExpressError');
const reviewController = require('../controllers/reviews');

//Post Review
router.post("/", isLoggedIn, validateReview, wrapAsync(reviewController.postReview));

//delete review route
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(reviewController.deleteReview));

module.exports = router;