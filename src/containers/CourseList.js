import React from 'react';
import CourseRow from "../component/CourseRow";
import CourseService from '../services/CourseService'
class CourseList extends React.Component {
   constructor() {

       super();
       this.courseService = CourseService.instance;
       this.state = {courses: []};
       this.deleteCourse = this.deleteCourse.bind(this);
       this.titleChanged = this.titleChanged.bind(this);
       this.createCourse = this.createCourse.bind(this);
       this.editCourse = this.editCourse.bind(this);
   }

    deleteCourse(courseId) {
       this.courseService
           .deleteCourse(courseId)
           .then(this.findAllCourses());
   }

   editCourse(courseId){
       this.state.isEdit = true;
       // console.log(this.state.course);
       // this.state.course.id = courseId;
       // this.courseService
       //     .editCourse(courseId)
       //     .then(this.findAllCourses());
       // console.log(this.state);
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
            return <CourseRow course={course} key={course.id}
                              delete={this.deleteCourse}
                              edit={this.editCourse}
                              isEdit={this.state.isEdit}/>
        });
        return rows;
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
               <nav className="navbar navbar-light fixed-top navbar-expand-lg">
                   <div className="container">
                       <a className="navbar-brand color-white" href="#">Course Manager</a>
                       <input className="form-control" id="titleFld"
                              onChange={this.titleChanged}
                              placeholder="New Course Title: "/>
                       <button className="fa fa-plus fa-2x plusButton"
                               onClick={this.createCourse}>
                       </button>
                       {/*<h2>Course Manager</h2>*/}

                   </div>
               </nav>
            <div className="container top-pad">
             {/*<table className="table list-of-items">*/}
               {/*<thead>*/}
               {/*<tr>*/}
                   {/*<th>Title</th>*/}
               {/*</tr>*/}
               {/*<tr>*/}
                   {/*<th><input className="form-control" id="titleFld"*/}
                              {/*onChange={this.titleChanged}*/}
                              {/*placeholder="cs101"/></th>*/}
                   {/*<th>*/}
                       {/*<button className="btn btn-primary"*/}
                                {/*onClick={this.createCourse}>*/}
                       {/*Add*/}
                       {/*</button>*/}
                   {/*</th>*/}
               {/*</tr>*/}
               {/*</thead>*/}
               {/*<tbody>*/}
               {this.courseRow()}
               {/*</tbody>*/}
             {/*</table>*/}




             {/*<div className="card">*/}
                 {/*<div className="card-body">*/}
                     {/*{this.courseRow()}*/}
                 {/*</div>*/}
             {/*</div>*/}


            </div>
           </div>
       )
   }
}
export default CourseList;
