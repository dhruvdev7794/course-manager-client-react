import React from 'react'
import ModuleList from './ModuleList'
import LessonTab from './LessonTab'

export default class CourseEditor extends React.Component{

    constructor(props){
        super(props);
        // console.log(props.match.params.courseId);
        // console.log(props.match.params.moduleId);
        this.state = {courseId: ''};
        this.selectCourse = this.selectCourse.bind(this);
        this.selectModule = this.selectModule.bind(this);

    }

    componentDidMount() {
       this.selectCourse(this.props.match.params.courseId);
       this.selectModule(this.props.match.params.moduleId);
    }

    selectModule(moduleId){
        this.setState({moduleId: moduleId});
    }
    selectCourse(courseId) {
       this.setState({courseId: courseId});
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