import React from 'react';
import { Link } from 'react-router-dom'

class CourseRow extends React.Component {
    constructor(props){
        super(props);
        // this.deleteCourse = this.deleteCourse.bind(this);
    }

    // deleteCourse() { console.log('delete'); }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <Link to={`/course/${this.props.course.id}/edit`}>
                        <div className="row">
                            <div className="col">{this.props.course.title}</div>
                            <div className="col">{this.props.course.modified}</div>
                        </div>
                    </Link>
                    <div className="fa fa-close cross-float"
                         onClick={() => {this.props.delete(this.props.course.id)}}>
                    </div>

                </div>
            </div>
        )
    }
}
export default CourseRow;
