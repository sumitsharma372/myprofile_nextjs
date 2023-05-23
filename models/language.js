import { Schema,models, model } from "mongoose";

const LanguageSchema = new Schema({
    name: {
        type: String,
        required
    },
    logo: {
        type: String,
        required
    }
})

const Language = models.Language || model('Language', LanguageSchema)

export default Language