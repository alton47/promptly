import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already taken!'],
        required: [true, 'Email is required!'],
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
        match: [/^(?=.{8,20}$)(?!.*[_.]{2})[a-zA-Z0-9._ ]+$/, "Username invalid, it should contain 8-20 characters including letters, numbers, dots, underscores, or spaces!"],
    },
    image: {
        type: String,
    }
});

// Optional: Sanitize username by replacing spaces with underscores
userSchema.pre('save', function (next) {
    this.username = this.username.replace(/\s/g, '_'); // Replace spaces with underscores
    next();
});

// Check if the User model exists; if not, create it
const User = models.User || model('User', userSchema);

export default User;
