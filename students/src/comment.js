const mongoose = require("mongoose");
const Schema = mongoose.Schema;




const CommentSchema = new Schema({

    content: String,
    students: { type: Schema.Types.ObjectId, ref: 'student' }







})


// the name of the comment model used -- comment-- is used as the referenct by the articleBlog model
// also the name of the model student is refereced by the CommentSchema 
const Comment = mongoose.model("comment", CommentSchema);


module.exports = Comment;