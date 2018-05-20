import React from 'react'
import ModuleList from './ModuleList'
import LessonTab from './LessonTab'

export default class CourseEditor extends React.Component{

    constructor(props){
        super(props);
        this.state = {courseId: ''};
        this.selectCourse = this.selectCourse.bind(this);

    }

    componentDidMount() {
       this.selectCourse(this.props.match.params.courseId);
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
                        <ModuleList/>
                    </div>
                    <div className="col-8">
                        <LessonTab/>
                    </div>
                </div>
            </div>
        );
    }
}