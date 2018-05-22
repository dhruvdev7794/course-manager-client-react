import React from 'react';
import LessonTab from "./LessonTab";

export default class ModuleEditor extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <LessonTab
                courseId={this.props.courseId}
                moduleId={this.props.moduleId}/>
        )
    }
}