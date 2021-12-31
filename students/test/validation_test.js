const assert = require("assert")
const Student = require("../src/student")


// first we want student to have name, and should have length more than 2 characters


//should specify the validation options first in the students.js model file
// for eg, instead of simply passing string to the name, we should pass an entire object having the validation rules



describe('validation', ()=>{

    it('name is required', ()=>{

        const student = new Student({name: undefined})
        // validateSync is syncronous in it validation process
        const result = student.validateSync()

        console.log(result)

        // to get simple message

        const { message } = result.errors.name

        assert(message === 'Name is required');
       

    })


    it('name must be longer than 2 characters',()=>{
        const newStudent = new Student({name:'Em'})
        const newResult = newStudent.validateSync();

        const { message } = newResult.errors.name;
        console.log(message);

        assert(message === 'Name is too short');


    })
    // handling errors, preventing invalid records to be saved in the database

    it('prevent invalid records', done=>{


        const student = new Student({name:'Em'})
        student.save()
        .catch(validationResult => {

            const { message } = validationResult.errors.name;
            assert(message==='Name is too short');
            done();

        })
    })












})