import React from 'react'
import ModuleList from './ModuleList'
import LessonTab from './LessonTab'
import CourseService from '../services/CourseService';

export default class CourseEditor extends React.Component{

    constructor(props){
        super(props);
        this.state = {courseId: '', courseTitle:'', moduleId:''};
        this.selectCourse = this.selectCourse.bind(this);
        this.selectModule = this.selectModule.bind(this);
        /*this.selectCourseTitle = this.selectCourseTitle.bind(this);*/
        this.courseService = CourseService.instance;

    }

    componentDidMount() {
       this.selectCourse(this.props.match.params.courseId);
       this.selectModule(this.props.match.params.moduleId);
    }

    selectModule(moduleId){
        this.setState({moduleId: moduleId});
    }
    /*selectCourseTitle(title){
        this.setState({courseTitle: title});
    }
    */
    selectCourse(courseId) {
       this.setState({courseId: courseId});
       /*
       this.courseService.findCourseById(courseId)
       .then(function(response){
            this.selectCourseTitle(response.title);
       });
       */
    }
    render(){
        return(
            <div>
                <h3>Course {this.state.courseId}</h3>
                <div className="row">
                    <div className="col-4">
                        <ModuleList
                            courseId = {this.state.courseId}
                            />
                    </div>
                    <div className="col-8">
                        <LessonTab
                            courseId = {this.state.courseId}
                            moduleId = {this.state.moduleId}/>
                    </div>
                </div>
            </div>
        );
    }
}