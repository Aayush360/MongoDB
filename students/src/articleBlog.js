const mongoose = require('mongoose');
const Schema = mongoose.Schema;




// need to connect ArticleBlog to our schema model


const ArticleBlogSchema =  new Schema({

    title: String,
    content: String,
    comments: [{

        type: Schema.Types.ObjectId,
        ref: 'comment'


    }] 




})

const ArticleBlog = mongoose.model("articleBlog",ArticleBlogSchema);


module.exports = ArticleBlog;