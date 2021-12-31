const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const ArticleSchema  = require('./article_schema');

// let us wire Article Schema with Student Model 

//create schema 
// inside schema give properties and its type

const StudentSchema = new Schema({
    name: {
        type: String,
        required:[true,'Name is required'],
        // this key decides how a particular property should be validated after the validate function runs
        // checks if the name entered is greater than 2 character
        validate: {
            validator: (name)=> name.length>2,
            message: 'Name is too short'

        }

    },
    studentNumber: Number,
    grade: Number,
    articles: [ArticleSchema],
    articleBlogs: [{
        type: Schema.Types.ObjectId,
        ref: 'articleBlog'
    
    }]

});


// making a link to a vitrual type

StudentSchema.virtual('articleCount').get(function(){

    // console.log('run the getter function');

    // refers to instance of model that we are working on

    return this.articles.length


})



// when mongoose sees this document, it will notice that it is an array and it will infer that there should be a nested document (sub-document) 


// creating student model
// student will the name of our collection
// but since mongoose assumes that we will have multiple instances of this model, it will plularizes it.

const Student = mongoose.model("student",StudentSchema);

// to make sure every file inside the application get 
// access to  student model if it requires it 
module.exports = Student;