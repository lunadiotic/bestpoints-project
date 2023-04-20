const Place = require("../models/place");
const Review = require("../models/review");

module.exports.isAuthorPlace = async (req, res, next) => {
    const { id } = req.params;
    let place = await Place.findById(id);

    if (!place.author.equals(req.user._id)) {
        req.flash('error_msg', 'Not authorized');
        return res.redirect('/places');
    }

    next();
}

module.exports.isAuthorReview = async (req, res, next) => {
    const { place_id, review_id } = req.params;
    let review = await Review.findById(review_id);

    if (!review.author.equals(req.user._id)) {
        req.flash('error_msg', 'Not authorized');
        return res.redirect(`/places/${place_id}`);
    }

    next();
}