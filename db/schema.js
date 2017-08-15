var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Use native promises
mongoose.Promise = global.Promise;

//Declare new Schema
//give some keys
//keys:types

// User Schema
var UserSchema = new Schema({
    first_name: String,
    last_name: String,
    user_id: String,
    user_pass: String,
    created_at: Date,
    updated_at: Date,
    images: String,
});

UserSchema.pre('save', function(next) {
    if (!this.images) {
        this.images = "/http://i.imgur.com/evkHuCr.jpg"
    }

    now = new Date();
    this.updated_at = now;
    if (!this.created_at) {
        this.created_at = now;
    }
    next();
});

// Recipe schema
var RecipeSchema = new Schema({
    categoryName: String,
   // subCategories: {type: String, lowercase: true},
    title: String,
    description: String,
    images: String,
    reviews: [String],
    created_at: Date,
    updated_at: Date,
});

RecipeSchema.pre('save', function(next) {
    now = new Date();
    this.updated_at = now;
    if (!this.created_at) {
        this.created_at = now;
    }
    if (!this.images) {
        this.images = "http://i.imgur.com/9rguqEo.jpg"
    }
    next();
});

//Review Schema
var ReviewSchema = new Schema({
    rating: Boolean,
    user: String,
    created_at: Date,
    updated_at: Date,
    tip: String,
});


ReviewSchema.pre('save', function(next) {
    now = new Date();
    this.updated_at = now;
    if (!this.created_at) {
        this.created_at = now;
    }
    next();
});

var UserModel = mongoose.model("User", UserSchema);
var RecipeModel = mongoose.model("Recipe", RecipeSchema);
var ReviewModel = mongoose.model("Review", ReviewSchema);

module.exports = {
    User: UserModel,
    Recipe: RecipeModel,
    Review: ReviewModel,
};
