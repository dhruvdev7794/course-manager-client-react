import React from 'react';
import CourseRow from "../component/CourseRow";
import CourseService from '../services/CourseService'
class CourseList extends React.Component {
   constructor() {

       super();
       this.courseService = CourseService.instance;
       this.state = {courses: []};
       this.titleChanged = this.titleChanged.bind(this);
       this.createCourse = this.createCourse.bind(this);
   }

    componentDidMount() {
        this.findAllCourses();
    }

    findAllCourses(){
        this.courseService.findAllCourses()
            .then((courses) => {
                this.setState({courses: courses});
            });
    }

    courseRow(){
       let courses = this.state.courses.map(function (course) {
           return <CourseRow key={course.id} course = {course}/>;
       });
        return (
            courses
        )
    }
    titleChanged(event){
        this.setState({
            course: { title: event.target.value }
        });
    }

    createCourse(event){
        this.courseService
            .createCourse(this.state.course)
            .then(this.findAllCourses())
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
                   <th><input className="form-control" id="titleFld"
                              onChange={this.titleChanged}
                              placeholder="cs101"/></th>
                   <th>
                       <button className="btn btn-primary"
                                onClick={this.createCourse}>
                       Add
                       </button>
                   </th>
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
