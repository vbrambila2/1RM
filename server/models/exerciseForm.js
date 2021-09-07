import mongoose from 'mongoose';

const movementSchema = mongoose.Schema({
    movementName: String,
    movementWeight: String,
});

export const ExerciseForm = mongoose.model('ExerciseForm', movementSchema);
