require("dotenv").config();
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

var User = require('../models/user');
var Recipe = require('../models/recipe');
var Review = require('../models/review');

// USE NATIVE PROMISES
mongoose.Promise = global.Promise;

// DELETE ALL DATA FROM DATABASE
User.remove({}, (err) => console.log(err));
Recipe.remove({}, (err) => console.log(err));
Review.remove({}, (err) => console.log(err));


// NEW USERS
var jason = new User({
    first_name: 'Jason',
    last_name: 'Bourne',
    //rejects: [],
    created_at: "04-17-2017",
    updated_at: "06-10-2017"
});

var mary = new User({
    first_name: 'mary',
    last_name: 'oconnor',
    //rejects: [],
    created_at: "05-10-2016",
    updated_at: "06-30-2016"
});



// SAVE USERS
jason.save(function(err) {
    if (err) console.log(err);

    console.log('User Jason has been created!');
});

mary.save(function(err) {
    if (err) console.log(err);

    console.log('User Mary has been created!');
});

////////////////////////////////////////////


// NEW RECIPES
var generalTsoChicken = new Recipe({
    categoryName: 'chinese',
    title: 'General Tso chicken',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam provident qui veniam, tempora a quas hic cumque eveniet, odit vel ipsa. Iusto qui aperiam repellat in, hic nobis consequuntur obcaecati! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam provident qui veniam, tempora a quas hic cumque eveniet, odit vel ipsa. Iusto qui aperiam repellat in, hic nobis consequuntur obcaecati!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam provident qui veniam, tempora a quas hic cumque eveniet, odit vel ipsa. Iusto qui aperiam repellat in, hic nobis consequuntur obcaecati! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam provident qui veniam, tempora a quas hic cumque eveniet, odit vel ipsa. Iusto qui aperiam repellat in, hic nobis consequuntur obcaecati! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam provident qui veniam, tempora a quas hic cumque eveniet, odit vel ipsa. Iusto qui aperiam repellat in, hic nobis consequuntur obcaecati! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam provident qui veniam, tempora a quas hic cumque eveniet, odit vel ipsa. Iusto qui aperiam repellat in, hic nobis consequuntur obcaecati!",
    images: 'https://2wzlm92dvpgd3a560m9ue6tx-wpengine.netdna-ssl.com/images/cloudland-canyon-sittons-gulch-trail/1-cloudland-canyon-sittons-gulch-trail.jpg',
    reviews: ' ',
    created_at: '03-22-2017',
    updated_at: '04-25-2017'
})

var fettuccineAlfredo = new Recipe({
    categoryName: 'italian',
    title: 'Fettuccine Alfredo',
    description: "Toss hot fettuccine with hot sauce. Garnish, if desired, with fresh ground black pepper and chopped parsley",
    images: ' ',
    reviews: ' ',
    created_at: '06-25-2017',
    updated_at: '06-28-2017'
})

var pastaPrimavera = new Recipe({
    categoryName: 'italian',
    title: 'Pasta Primavera',
    description: "Toss the pasta al-dente with hot sauce. Garnish, if desired, with fresh basil, diced tomatoes, and green peas",
    images: ' ',
    reviews: ' ',
    created_at: '06-25-2017',
    updated_at: '06-28-2017'
})

var strawberrySalad = new Recipe({
    categoryName: 'salads',
    title: 'Strawberry Salad',
    description: 'In a large bowl toss the spinach with the strawberries and toasted almonds',
    images: ' ',
    reviews: ' ',
    created_at: '03-06-2015',
    updated_at: '04-15-2015'
})

// SAVE RECIPES
generalTsoChicken.save((err) => {
    if (err) console.log(err);
    console.log("general Tso Chicken recipe has been Saved");
})

fettuccineAlfredo.save((err) => {
    if (err) console.log(err);
    console.log("Fettuccine Alfredo recipe has been Saved");
})

pastaPrimavera.save((err) => {
    if (err) console.log(err);
    console.log("Pasta Primavera recipe has been Saved");
})

strawberrySalad.save((err) => {
    if (err) console.log(err);
    console.log("Strawberry Salad recipe has been Saved");
})

////////////////////////////////////

// NEW REVIEW
var reviewNum1 = new Review({
    rating: true,
    user: jason,
    created_at: 02 - 02 - 2017,
    updated_at: 02 - 03 - 2017,
    tip: 'great atmosphere but prices are extremely high'
})

// SAVE REVIEWS

//reviewNum1.save((err) => {
//    if (err) console.log(err);
//    console.log("reviewNum1 has been Saved");
//})

//

mongoose.connection.close();