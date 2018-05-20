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
                <div className="row">
                    <div className="col-4 top-pad">
                        <ModuleList
                            courseId = {this.state.courseId}/>
                    </div>
                    <div className="col-8 top-pad">
                        <LessonTab/>
                    </div>
                </div>
            </div>
        );
    }
}