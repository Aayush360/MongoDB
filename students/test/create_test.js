
const assert = require("assert");
const { Mongoose } = require("mongoose");

const Student = require("../src/student")

describe("create the first data",()=>{

    it("Save the student",(done)=>{

        const jason = new Student({name: "Jason"});
        // to persist to database
        // save call will return a promise, then after resolving the promise 
        // then json will be inside the database
        jason.save()
            .then(()=>{
                // if not new, it is saved in database
                assert(!jason.isNew);
                done();
            })

       

    })
})


