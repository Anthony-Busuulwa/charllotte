// requiring Express
const Express = require('express');
const answers = ('../model/answer');
const Router = Express.router();

Router.get('/answers',(req,res)=>{
    res.json(answers.answerId[] )
})
model.exports = router;