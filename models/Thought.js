const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
    thoughtText: {
        type: String,
        required: true,
        maxlength: 280,
        minlength: 1,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        // use a getter method to format the timestamp on query
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [

    ],
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;

// create a virtual called reactionCount, that gets length of reactions