// in this part of the project question,the users can upvote or downvote an answer. 
//This means that the user has to click (require) the upvote or downvote 
// icon on the UI and wait for a response from the Server.

             const express = require('express');
             answers = (./model/answer);
             const router = express.router();
             const voteRoutes = require('./v')

// Creating the require route for upvote to a particular answer Id 
              router.post('./answers/upvote ', (req)=>{
               const votes =vote+1({upvoteSchema, _id:mongoose.schema.Type.objectId})        
              }
            
 // Creating the require route for downvote to a particular answer Id
              router.post('./answers/downvote ', (req)=>{
                const votes =vote-1({downvoteSchema, _id:mongoose.schema.Type.objectId})
              } 
//Creating the response route for upvote to an answer with aparticular Id
          ~if(req.url==='./answers/upvote/_id:mongoose.schema.Type.objectId')
              res.end(upvote)~
//Creating the response route for downvote to an answer with a particular Id
              ~if(req.url==='./answers/downvote/_id:mongoose.schema.Type.objectId')
                  res.end(downvote)~

                  
