import React from 'react'
import {Link, NavLink} from 'react-router-dom'

export default class LessonTabItem extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                <li className="nav-item">
                    <NavLink activeStyle={{color:"#FFFFFF", backgroundColor:"#007bff"}} onClick={window.location.reload} activeClassName={"active"}
                        to={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lesson.id}/widget`}>
                            {this.props.title}
                    </NavLink>
                    <i className="fa fa-trash cross-float"
                       onClick={()=>{if(window.confirm("Are you sure you want to delete it?")) this.props.delete(this.props.lesson.id)}}></i>
                </li>
            </div>
        );
    }

}