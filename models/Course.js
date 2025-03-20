const mongoose=require('mongoose')


const CourseSchema = new mongoose.Schema({ 
    courseName: String, 
    courseCode: String 
});
const Course = mongoose.model('Course', CourseSchema);
module.exports=Course