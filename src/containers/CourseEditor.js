import React from 'react'
import ModuleList from './ModuleList'
import LessonTab from './LessonTab'
import CourseService from '../services/CourseService';
import ModuleEditor from "./ModuleEditor";
let self;

export default class CourseEditor extends React.Component{

    constructor(props){
        super(props);
        self = this;
        this.state = {courseId: '', courseTitle:'', moduleId:''};
        this.selectCourse = this.selectCourse.bind(this);
        this.selectModule = this.selectModule.bind(this);
        this.selectCourseTitle = this.selectCourseTitle.bind(this);
        this.courseService = CourseService.instance;

    }

    componentDidMount() {
       this.selectCourse(this.props.match.params.courseId);
       this.selectModule(this.props.match.params.moduleId);
    }

    selectModule(moduleId){
        this.setState({moduleId: moduleId});
    }
    selectCourseTitle(title){
        this.setState({courseTitle: title});
    }

    selectCourse(courseId) {
       this.setState({courseId: courseId});
       this.courseService.findCourseById(courseId)
       .then(function(response){
            self.selectCourseTitle(response.title);
       });

    }
    render(){
        if(this.state.moduleId !== undefined && this.state.moduleId !== ""){
            return(
                <div>
                    <nav className="navbar navbar-light fixed-top navbar-expand-lg">
                        <div className="container">
                            <h3>Course : {this.state.courseTitle}</h3>

                        </div>
                    </nav>
                    {/*<h3 className="heading-3-style">Course : {this.state.courseTitle}</h3>*/}
                    <div className="row top-pad">
                        <div className="col-4">
                            <ModuleList
                                courseId = {this.state.courseId}/>
                        </div>
                        <div className="col-8">
                            <ModuleEditor
                                courseId = {this.state.courseId}
                                moduleId = {this.state.moduleId}/>
                        </div>
                    </div>
                </div>
            );
        }
        else{
            return(
                <div>
                    <nav className="navbar navbar-light fixed-top navbar-expand-lg">
                        <div className="container">
                            <h3>Course : {this.state.courseTitle}</h3>
                        </div>
                    </nav>
                    <div className="row top-pad">
                        <div className="col-4">
                            <ModuleList
                                courseId = {this.state.courseId}/>
                        </div>
                        <div className="col-8">
                        </div>
                     </div>
                </div>
            );
        }

    }
}