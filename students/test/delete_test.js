const assert = require('assert');
const Student = require('../src/student');


// beforeEach() -- to save the data before every it block runs

// create and save a new record to the db
// use findoneanddelete() to remove remove the record
//try to findone in te db(the one we just removed)
// assert the the result is null
describe("Delete the records ", ()=>{

    let jason;
    let rosa;

    beforeEach((done)=>{
        jason = new Student({name: 'Jason'})
        rosa = new Student({name:'Rosa'})
        jason.save()
        rosa.save()
        .then(()=>done())
    });

    // it('delelte by id', done =>{
    //     Student.findByIdAndDelete(jason._id)
    //     .then(()=> Student.findOne({name:'Jason'}))
    //     .then((student)=>{
    //         assert(student ===null)
    //         done()
    //     })



    // })


    it('delelte by name', done =>{
        Student.findOneAndDelete({name:'Jason'})
        .then(()=> Student.findOne({_id:jason._id}))
        .then((student)=>{
            assert(student ===null)
            done()
        });
    });


//     it('delete jason',done=>{

//         Student.deleteOne({_id:jason._id})
//         .then(()=> Student.findOne({_id:jason._id}))
//         .then((student)=>{
//             assert(student ===null)
//             done()



//     })
// })








});