import React from 'react'
import {Link} from 'react-router-dom'


export default class LessonTabItem extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                <li className="nav-item">
                    <Link to={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lesson.id}/lesson`}>
                            {this.props.title}
                    </Link>
                    <i className="fa fa-trash cross-float"
                       onClick={()=>{if(window.confirm("Are you sure you want to delete it?")) this.props.delete(this.props.lesson.id)}}></i>
                </li>
            </div>
        );
    }

}