// Connect through mongoose
const mongoose = reqire('mongoose');
const.Schema = mongoose.Schema;

//Declare a new mongoose instance
//creating upvote Schema and Model
const upvoteSchema = new mongoose.Schema({ 
       vote: Number,
       date: {type: Date, default: Date.now},
       Answer: objectId,
});
 const votes = mongoose.model('vote', upvoteSchema);
 model.exports = upvote

//Creating downvote Schema and Model
const downvoteSchema = new mongoose.Schema({
       vote: Number,
       date: {type: Date, default: Date.now},
       Answer: objectId,
}); 
const votes = mongoose.model('vote', downvoteSchema);
 model.exports = downvote