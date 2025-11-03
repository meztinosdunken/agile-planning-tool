const mongoose = require('mongoose');

const SprintSchema = new mongoose.Schema({
    name: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    userStories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'UserStory' }],
});

module.exports = mongoose.model('Sprint', SprintSchema);