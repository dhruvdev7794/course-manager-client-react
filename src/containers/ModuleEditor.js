import React from 'react';
import LessonTab from "./LessonTab";
import {LessonEditor} from './LessonEditor';
import {Route} from 'react-router-dom'

export default class ModuleEditor extends React.Component{
    constructor(props){
        super(props);
        this.state = {courseId: '', moduleId:''};
        this.selectCourse = this.selectCourse.bind(this);
        this.selectModule = this.selectModule.bind(this);
    }

    selectModule(moduleId){
        this.setState({moduleId: moduleId});
    }

    selectCourse(courseId) {
        this.setState({courseId: courseId});
    }

    componentWillReceiveProps(newProps){
        this.selectCourse(newProps.match.params.courseId);
        this.selectModule(newProps.match.params.moduleId);
    }

    componentDidMount() {
        this.selectCourse(this.props.match.params.courseId);
        this.selectModule(this.props.match.params.moduleId);
    }

    render(){
        return(
            <div>
                <LessonTab
                    courseId={this.state.courseId}
                    moduleId={this.state.moduleId}/>
                <div>
                <Route path="/course/:courseId/module/:moduleId/lesson/:lessonId/widget"
                        component={LessonEditor}>
                </Route>
                </div>
            </div>

        )
    }
}