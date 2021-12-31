const assert = require('assert');
// require student model
const Student = require('../src/student');

 

describe("Read the data",(done)=>{
    // declare jason as global variable
    let jason;
    let jason2;
    
    //to insert records into the student collection named jasons 
    // after successful insertion call done callback
    beforeEach((done)=>{

        jason = new Student({name: 'Jason'});
        jason2 = new Student({name:"Jason"});
        jason.save()
        jason2.save()
        .then(()=> done())


        console.log(jason);
        console.log(jason2);
    })


    // // inorder it describe it as asyn function
    // it("Find all Jasons",async ()=>{

    //     const students = await Student.find({name:'Jason'})
    //     console.log(students);
    //     // to ensure that the students being inserted is the same student we are looking for we use the id
    //     assert(students[0]._id.toString()=== jason._id.toString())
    //     // console.log(students[0]._id)
    //     // console.log(jason._id)

    // })

    it("find one of the Jasons", async ()=>{


        const students = await Student.findOne({_id:jason._id});
        console.log(students)

        assert(students.name==='Jason')

    })



})