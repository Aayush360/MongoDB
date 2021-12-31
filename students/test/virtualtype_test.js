const assert = require('assert');

const Student = require('../src/student');


describe('Virtual Test ', ()=>{

    it('article count ', done=>{

        const jason = new Student({name:'Jason', articles: [{title:'new title'}]})
        jason.save()
        .then(()=> Student.findOne({name:'Jason'}))
        .then(student => {

            assert(student.articleCount ===1 )
            done()



        })









    })







})