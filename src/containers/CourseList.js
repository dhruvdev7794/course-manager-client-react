import React from 'react';
import CourseRow from "../component/CourseRow";
import CourseService from '../services/CourseService'
let self;
class CourseList extends React.Component {
   constructor() {

       super();
       this.courseService = CourseService.instance;
       this.state = {
           grid: false,
           courses: []};
       this.deleteCourse = this.deleteCourse.bind(this);
       this.titleChanged = this.titleChanged.bind(this);
       this.grid = false;
       this.createCourse = this.createCourse.bind(this);
       self= this;
   }

    deleteCourse(courseId) {
       this.courseService
           .deleteCourse(courseId)
           .then(() => {
               this.findAllCourses()
           });
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
        var rows = this.state.courses.map((course) => {
            return <CourseRow grid = {self.state.grid}
                              course={course} key={course.id}
                              delete={this.deleteCourse}/>
        });
        return rows;
    }
    titleChanged(event){
        this.setState({
            course: { title: event.target.value }
        });
    }
    changeGrid(){

       self.setState({
           grid: !self.state.grid
       });
       // console.log(self.state.grid);
       self.courseRow();
    }

    createCourse(){
       if(this.state.course === undefined){
           this.state.course = {
               title: "New Course"
           };
       }
       this.courseService
            .createCourse(this.state.course)
            .then(() => {
                this.findAllCourses();
            });
    }



    render() {
       if(self.state.grid){
           return (
               <div>
                   <nav className="navbar navbar-light fixed-top navbar-expand-lg">
                       <div className="container">
                           <a className="navbar-brand color-white" href="#">Course Manager</a>
                           <input className="form-control" id="titleFld"
                                  onChange={this.titleChanged}
                                  placeholder="New Course Title: "/>
                           <button className="fa fa-plus fa-2x headerButton"
                                   onClick={this.createCourse}>
                           </button>
                           <button className="fa fa-list fa-2x headerButton"
                                   onClick={this.changeGrid}></button>
                           {/*<h2>Course Manager</h2>*/}

                       </div>
                   </nav>
                   <div className="container top-pad">
                       <div className="card-deck">
                           {this.courseRow()}
                       </div>
                   </div>
               </div>
           )
       }
       else{
           return (
               <div>
                   <nav className="navbar navbar-light fixed-top navbar-expand-lg">
                       <div className="container">
                           <a className="navbar-brand color-white" href="#">Course Manager</a>
                           <input className="form-control" id="titleFld"
                                  onChange={this.titleChanged}
                                  placeholder="New Course Title: "/>
                           <button className="fa fa-plus fa-2x headerButton"
                                   onClick={this.createCourse}>
                           </button>
                           <button className="fa fa-th fa-2x headerButton"
                                   onClick={this.changeGrid}></button>
                           {/*<h2>Course Manager</h2>*/}

                       </div>
                   </nav>
                   <div className="container top-pad">
                           {this.courseRow()}
                   </div>
               </div>
           )
       }

   }
}
export default CourseList;
