const Courses = require("./models/Courses");
const asyncHandler = require(`express-async-handler`)

const postACourse = asyncHandler( async (req, res) => {
    try {
        const newCourse = await Courses({...req.Courses})
        await newCourse.save();
        res.status(200).send({message: "Course is added succesfully", Courses:newCourse})
    } catch (error) {
        console.error("Error creating course",error);
        res.status(500).send({message:"Failed to create course"})
    }
});

const getAllCourses = async (req,res) => {
    try{
        const courses = await Courses.find().sort({ createdAt: -1});
        res.status(200).send(courses)
    }catch(error){
        console.error(`Error fetching course`, error);
        res.status(500).send({message: `Failed to fetch courses`})
    }
}

const getCourse = async (req, res) => {
    try{
        const {id} = req.params;
        const course = await Courses.findById(id);
        if(!course){
            res.status(404).send({message:`Course did not exist`})
        }
        res.status(200).send(course)
    }catch(error){
        console.error(`Error fetching for course`, error);
        res.status(500).send({message:"Failed to fetch course"})
    }
}

const updateCourse = async (req, res) => {
    try {
        const {id} = req.params;
        const updatedCourse = await Courses.findByIdAndUpdate(id, req.body, {new:true});
        if (!updatedCourse) {
            res.status(404).send({message:"Course did not exist"})
        }
        res.status(200).send({
            message:"Course is updated succesfully",
            course: updatedCourse
        })
    }catch (error){
        console.error(`Error updating the course`);
        res.status(500),send({message:`Error updating the course`})
    }
}

const deleteCourse = async (req,res) => {
    try{ 
        const {id} = req.params;
        const deleteCourse = await Courses.findByIdAndDelete(id);
        if(!deleteCourse){
            req.status(404).send({message:"Course did not exists"})
        }
        req.status(200).send({
            message:"Course deleted succesfully",
            course: deleteCourse
        })
    } catch (error){
        console.error("Error deleting course",error)
        res.status(500).send({message:"Error deleting course"})
    }
}

module.exports = {
    postACourse,
    getAllCourses,
    getCourse,
    updateCourse,
    deleteCourse,
}