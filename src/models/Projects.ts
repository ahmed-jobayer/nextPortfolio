import  { model, models, Schema } from "mongoose";


export interface IProject {
    _id?: string;
    banner: string;
    title: string;
    description: string;
    link: string;
    createdAt?: Date;
    updatedAt?: Date;
}

const projectSchema = new Schema<IProject>(
    {
        banner: {type: String, required:true, unique: true},
        title: {type: String, required:true,},
        description: {type: String, required:true},
        link: {type: String, required:true, unique: true}
    },
    {timestamps: true}
)

const Project = models.Project || model("Project", projectSchema)
export default Project;