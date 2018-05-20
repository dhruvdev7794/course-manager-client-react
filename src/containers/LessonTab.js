import React from 'react'

export default class LessonTab
    extends React.Component {
    render() { return(
        <div>
            <ul className="nav nav-tabs">
                <li className="nav-item"><a className="nav-link active"
                                        href="#">Active Tab</a></li>
                <li className="nav-item"><a className="nav-link"
                                        href="#">Another Tab</a></li>
            </ul>
            <div className="navbar navbar-expand-lg">
                <input id="inputIconEx2" className="form-control cross-float" placeholder="Enter the Lesson:"/>
                <button className="fa fa-plus cross-float plusButton"></button>
            </div>
        </div>
        );
    }
}
