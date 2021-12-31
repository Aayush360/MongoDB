const assert = require("assert");

const Student = require("../src/student");



describe('Subdocument',()=>{

    // it('Creating a subdocument ',done=>{

    //     const jason = new Student({
    //         name: 'Jason',
    //         articles: [{title: 'JavaScript'}]
        
    //     })

    //     jason.save()
    //     .then(()=>{

    //         Student.findOne({name:'Jason'})
    //         .then(student => {
    //             assert(student.articles[0].title === 'JavaScript')
    //             console.log('printing .. ',student.articles[0].title);
    //             done()

    //         })


    //     })


    // })



    // it('adding new record', done=>{

    //     // creating a student

    //     const jason = new Student({name: 'Jason', articles: []})

    //     // save it and then fetch it

    //     jason.save()
    //     .then(()=> Student.findOne({name:'Jason'}))
    //     .then(student => {
    //         // addind the article 
    //         student.articles.push({title:'Mongodb'})
    //         return student.save()
    //         .then(()=>Student.findOne({name:'Jason'}) )
    //         .then(student => {

    //             assert(student.articles[0].title === 'Mongodb')
    //             done()


    //         })




    //     })






        
    // })


        
    it('Removing a record', (done)=>{


        const jason = new Student({name:'Jason', articles:[{title:'ReactNative'}]})
        jason.save()
        .then(()=>Student.findOne({name:'Jason'})).
        then(student=>{

            student.articles[0].remove();
            return student.save()

        })
        .then(()=>Student.findOne({name:'Jason'}))
        .then(student=> {


            assert(student.articles.length===0);
            done();



        })







        
    })






})