const mongoose = require('mongoose');

const UserStorySchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    priority: { type: Number },
    status: { type: String, enum: ['To Do', 'In Progress', 'Done'], default: 'To Do' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('UserStory', UserStorySchema);