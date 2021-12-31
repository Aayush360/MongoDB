const assert = require('assert');
const Student = require('../src/student');



describe('Updating records', ()=>{
    // first we will create a student and save it so that before starting any funciton we can work with a new student
    let jason;
    let jason2;


    // using the multiplier operator to update
    // we want to update the grade according to the article count i.e acc to articles each student writes
    beforeEach((done) =>{

        jason = new Student({name:'Jason',studentNumber:10, articleCount:5, grade: 10});
        // jason2 = new Student({name:'Jason',studentNumber:20, grade: 10})
        jason.save()
        // jason2.save()
        .then(()=> done());
        console.log(jason);
        // console.log(jason2);
    })
//     // before each it block runs the beforeEach block runs
//     it('set and save',done =>{

//         console.log(jason)
//         //changing the name of jason to Alice 
//         // but the changes dont get reflected in database
//         // chnages are only in the memmory until we use save() method
//         jason.set('name','Alice')
//         jason.save()
//         .then(()=> Student.find({}))
//         .then(students => {
//             assert(students[0].name==='Alice');
//             done();
//         })
//         console.log(jason);
//         // done();
//     })
// // in big projects, we will use save methods after all the changes are done 
// // this prevents touching our database every time we make an update

// uncomment -it :)
// it('Update one of the Jason',async()=>{

//     const student = await Student.updateOne({name:'Jason'},{studentNumber:3000})
//     //to find all the records
//     const res = await Student.find({})
//     // only the first student having the name Jason gets updated to StudentNUmber 3000 using updateOne method
//     assert(res[0].studentNumber===3000)
//     console.log(res);
// })

// to update all of the students having the name Jason

// it('Update all of the Jason',async()=>{

//     const student = await Student.updateMany({name:'Jason'},{studentNumber:3000})
//     //to find all the records
//     const res = await Student.find({})
//     assert(res[0].studentNumber===3000 & res[1].studentNumber===3000)
//     console.log(res);
// })

xit ('Update grades', async ()=>{




    const artCount = await Student.findOne({name:'Jason'})
    // updating using the multiplier operator $mul
    const student = await Student.updateOne({name:'Jason'},{$mul:{grade: artCount.articleCount}})
    const res = await Student.find({name:'Jason'});
    // since we have made it equal to articlecount*grade (10*5)
    assert(res[0].grade === 50)
    console.log(res)
})




});