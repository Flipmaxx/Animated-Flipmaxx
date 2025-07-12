import mongoose from "mongoose";

const careerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  place: { type: String, required: true },
position: { type: String, required: true },
  phone: { type: String, required: true },
  currentCTC: { type: String, required: true },
  expectedCTC: { type: String, required: true },
  resume: { type: String, required: true }, 
  talk: { type: String, required: true },
  submittedAt: { type: Date, default: Date.now },
});

export default mongoose.models.careers || mongoose.model("careers", careerSchema);
