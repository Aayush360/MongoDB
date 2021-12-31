
const mongoose = require('mongoose');
const assert = require('assert')
const Student= require('../src/student');
const Comment = require('../src/comment');
const ArticleBlog = require('../src/articleBlog');
const ArticleSchema = require('../src/article_schema');





describe('association test ', ()=>{

    let jason,articleBlog, comment;


    beforeEach(done => {

        jason = new Student({name:'Jason'});
        articleBlog = new ArticleBlog({title: 'MongoDB', content: 'Mongoose and Mocha'});
        comment = new Comment({content: 'Well Done'});


        jason.articleBlogs.push(articleBlog);
        articleBlog.comments.push(comment);
        comment.students = jason;

        // saving to database

        // jason.save();
        // articleBlog.save();
        // comment.save();

        // done();

        // since, we have 3 save which one to chain on a dot then?

        // put together all the promises into one single promise ,,  then call then once when all three are successfully saved


        // Promise.all() wil be used very often when we make association between several different records and save all of them

        Promise.all([jason.save(), articleBlog.save(), comment.save()])
        .then(()=> done())

    })



    // in case when we have lots of test, we can use .only() so will be able to run  only one test
    // no other test will be saved and run,, helps when we are dealing with lots of task in out test suites

    it('Associate Student with ArticleBlog', done=>{

        Student.findOne({name:'Jason'})
        .populate('articleBlogs')
        .then(student=>{

            // console.log(student.articleBlogs[0]);
            // done();

            assert(student.articleBlogs[0].title==='MongoDB')


        } )

        done();


    })



    // first, we get the student then we take all the articleBlogs associated with it
    // then take all the comments associated with each articleBlogs
    it.only('Nested populate', done=>{


        Student.findOne({name:'Jason'})
        .populate({
            path: 'articleBlogs',
            populate: {
                path: 'comments',
                model: 'comment',
                populate: {
                    path: 'students',
                    model: 'student'
                }
            }
        })
        .then(student => {


            // console.log(student);

            // console.log(student.articleBlogs[0].comments[0]);
            assert(student.name==='Jason');
            assert(student.articleBlogs[0].title === 'MongoDB');
            assert(student.articleBlogs[0].comments[0].content === 'Well Done');
            assert(student.articleBlogs[0].comments[0].students.name === 'Jason');
            done();
        })





    })









})