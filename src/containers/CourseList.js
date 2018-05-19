import React from 'react';
import CourseRow from "../component/CourseRow";
import CourseService from '../services/CourseService'
class CourseList extends React.Component {
   constructor() {

       super();
       this.courseService = CourseService.instance;
       this.state = {courses: []};
   }

    componentDidMount() {
        this.courseService.findAllCourses()
            .then((courses) => {
                console.log(courses)
                this.setState({courses: courses});
            });
    }

    courseRow(){
       let courses = this.state.courses.map(function (course) {
           return <CourseRow key={course.id} course = {course}/>;
       })
        return (
            courses
        )
    }
    render() {
       return (
           <div>
             <h2>Course List</h2>
             <table>
               <thead>
               <tr>
                   <th>Title</th>
               </tr>
               <tr>
                   <th><input id="titleFld"
                              placeholder="cs101"/></th>
                   <th><button>Add</button></th>
               </tr>
               </thead>
               <tbody>
               {this.courseRow()}
               </tbody>
             </table>
           </div>
       )
   }
}
export default CourseList;
