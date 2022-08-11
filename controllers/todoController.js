const mongoose = require('mongoose');
const asyncHandler = require('express-async-handler');

const Todo = require('../models/todoModel');

// Creating tasks
// Route is /api/task
// Access is Public
exports.createTask = asyncHandler(async (req, res) => {
    const {task, complete, description, timeCreated, timeUpdated} = req.body
    const todo = await Todo.create({task, complete, description, timeCreated});
    res.status(201).json({
        success: true,
        data: todo,
        message: 'Task created successfully.'
    })
})

// Updating tasks
// Route is /api/task/:id
// Access is Public
exports.updateTask = asyncHandler(async (req, res) => {
    const {task, complete, description, timeUpdated} = req.body
    const existTask = await Todo.findOne({ _id: req.params.id });
    if(existTask) {
        existTask.task = task;
        existTask.complete = complete;
        existTask.description = description;
        existTask.timeUpdated = timeUpdated;
        const updatedTask = await existTask.save();
        res.status(201).json({
            success: true,
            data: updatedTask,
            message: 'Task updated successfully.'
        })
    } else {
        res.status(401).json({
            success: false,
            data: null,
            message: 'Task not found.'
        })
    }
    
})

// Deleting tasks
// Route is /api/task/:id
// Access is Public
exports.deleteTask = asyncHandler(async (req, res) => {
    const {task, complete, description, timeCreated, timeUpdated} = req.body
    const existTask = await Todo.findOne({ _id: req.params.id });
    if(existTask) {
        await existTask.remove();
        res.status(200).json({
            success: true,
            message: 'Task deleted successfully.'
        })
    } else {
        res.status(401).json({
            success: false,
            data: null,
            message: 'Task not found.'
        })
    }
    
})

// Get individual tasks
// Route is /api/task/:id
// Access is Public
exports.getSingleTask = asyncHandler(async (req, res) => {
    const {task, complete, timeCreated} = req.body
    const existTask = await Todo.findOne({ _id: req.params.id });
    if(existTask) {
        res.status(200).json({
            success: true,
            data: existTask,
            message: 'Task found successfully.'
        })
    } else {
        res.status(401).json({
            success: false,
            data: null,
            message: 'Task not found.'
        })
    }   
})

// Get all tasks
// Route is /api/task
// Access is Public
exports.getAllTasks = asyncHandler(async (req, res) => {
    const {task, complete, timeCreated} = req.body
    const allTasks = await Todo.find({});
    if(allTasks) {
        res.status(200).json({
            success: true,
            data: allTasks,
            message: 'All tasks found successfully.'
        })
    } else {
        res.status(401).json({
            success: false,
            data: null,
            message: 'Tasks not found.'
        })
    }   
})