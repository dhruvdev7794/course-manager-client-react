import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default class ModuleListItem extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <li className="list-group-item">
                <NavLink activeStyle={{color:"#FFFFFF", backgroundColor:"#007bff"}} activeClassName={"active"} to = {`/course/${this.props.courseId}/module/${this.props.module.id}/lesson`}>
                    {this.props.title}
                </NavLink>
                <span className="float-right">
                    <i className="fa fa-trash"
                    onClick={()=>{if(window.confirm("Are you sure you want to delete it?"))this.props.delete(this.props.module.id)}}></i>
                    <i className="fa fa-pencil"></i>
                </span>
            </li>
        );
    }
}