import mongoose, { model, Schema, models } from "mongoose";

const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User', // Ensure this matches the user model collection name
    required: true, // Make creator required if it's mandatory
  },
  prompt: {
    type: String,
    required: [true, 'Prompt is required'],
  },
  tag: {
    type: String,
    required: [true, 'Tag is required'],
  },
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});

// Export the Prompt model, ensuring no duplication
const Prompt = models.Prompt || model('Prompt', PromptSchema);

export default Prompt;
