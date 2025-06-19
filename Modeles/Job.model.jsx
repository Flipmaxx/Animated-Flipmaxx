import mongoose from 'mongoose'

const jobSchema=new mongoose.Schema({
    position:{type:String},
    description:{type:String},
    experience:{type:String},
      location:{type:String},
      
})
export default mongoose.models.jobs || mongoose.model("jobs", jobSchema);