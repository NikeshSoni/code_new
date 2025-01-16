import mongoose from "mongoose";

const TaskScheema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Please Provide Title"],
            unique: true
        },
        description: {
            type: String,
            default: "No description",
        },
        dueDate: {
            type: date,
            default: Date.now(),
        },
        status: {
            type: String,
            enum: ["Active", "inActive"],
            default: "active",
        },
        status: {
            type: Boolean,
            default: false,
        },
        priority: {
            type: String,
            enum: ["Low", "Medium", "High"],
            default: "Low",
        },
        user: {
            type: mongoose.Schema.ObjectId,
            ref: "User",
            required: true
        },
    },
    { timestamps: true }
);

const TaskModel = mongoose.model("Task", TaskScheema);

export default TaskModel