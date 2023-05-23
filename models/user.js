import { Schema, model, models } from 'mongoose'

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exists!'],
        required: [true, 'Email is required']
    },
    name: {
        type: String,
        required
    },
    image: {
        type: String
    }
})

const User = models.User || model('User', UserSchema)

export default User;