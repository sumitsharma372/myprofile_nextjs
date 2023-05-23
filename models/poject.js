import { Schema, models, model } from 'mongoose'

const ProjectSchema = new Schema({
    title: {
        type: String,
        required
    },
    image: {
        type: String,
    },
    languages: {
        type: [Schema.Types.ObjectId],
        ref: 'Language'
    }
})

const Project = models.Project || model('Project', ProjectSchema);

export default Project;