import { Schema, model } from "mongoose";

const teacherSchema = new Schema({
    clerkId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    qualifications: { type: String },
    experience: { type: Number },
    gradesTaught: { type: [String] },
    availability: { type: Boolean, default: true },
    availabilityTimeSlots: { type: [String] },
    contactInfo: { type: String },
});

export default model("Teacher", teacherSchema);
