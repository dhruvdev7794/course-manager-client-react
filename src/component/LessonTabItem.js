import React from 'react'


export default class LessonTabItem extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                <li className="nav-item"><a className="nav-link active"
                                        href="#">{this.props.title}</a>
                    <i className="fa fa-trash cross-float"
                       onClick={()=>{this.props.delete(this.props.lesson.id)}}></i>
                </li>
            </div>
        );
    }

}