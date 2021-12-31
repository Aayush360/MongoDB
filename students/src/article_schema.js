// create a student schema and export it to student,js file

const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const ArticleSchema = new Schema ({

    title: String,

})


module.exports = ArticleSchema