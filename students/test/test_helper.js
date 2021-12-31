// require the package - mongoose
const mongoose = require('mongoose');
//connect to mongodb
// tell mongoose to connect to mongo
// no need to create database earlier inorder to access it
// students_test is the database and has any any collection of data inside it

// students_test db will be created for us if not created
mongoose.connect('mongodb://localhost/students_test',{useNewUrlParser: true});


// once and on are event handlers 
// watch for mongoose to init an event call open one time, if it does run the funciton console.log to print to display success message

// watch mongoose to init an event called on and if it does run funcitont to show error message

// open and error are very particular event that we are passing to mongoose
mongoose.connection
    .once('open',()=>console.log('We are connected'))
    .on('error', (error)=> {
        console.warn('An error occured',error)

    })




// clean up all the records before running of each test
// done callback
// after long running process is done we will call this done callback
// which is provided by mocha automatically

// if i am calling the function beforeEach it means i am complete and it is okay to run the next one


// we have cleaned the records before each test
beforeEach((done)=>{
        // mongoose.connection.collections.students.drop();
        // // wait for dropping for collecition of students
        // done();
    
        const {students, comments, articleblogs}= mongoose.connection.collections;

        // dropping collection of students

        students.drop(()=>{
            comments.drop(()=>{

                articleblogs.drop(()=>{
                    done();



                })


            })

        } )
    })
    