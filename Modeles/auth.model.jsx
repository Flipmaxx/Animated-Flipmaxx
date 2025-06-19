import mongoose from 'mongoose'

const authSchema=new mongoose.Schema({
    EmployeeName:{type:String},
    EmployeeID:{type:String},
    email:{type:String},
    password:{type:String},
      
})
export default mongoose.models.auth || mongoose.model("auth", authSchema);