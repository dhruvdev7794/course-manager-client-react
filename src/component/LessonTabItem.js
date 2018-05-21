import React from 'react'


export default class LessonTabItem extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                <li className="nav-item"><a className="nav-link active"
                                        href="#">{this.props.title}</a></li>
            </div>
        );
    }

}