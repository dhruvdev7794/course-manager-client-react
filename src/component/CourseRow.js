import React from 'react';
import { Link } from 'react-router-dom'

class CourseRow extends React.Component {
    constructor(props){
        super(props);
        // console.log(this.props);
        // this.deleteCourse = this.deleteCourse.bind(this);
    }

    render() {
        var modifiedDate;
        if(this.props.course.modified!=null){
            var date = new Date(this.props.course.modified);
            modifiedDate = date.toDateString();
        }
        else{
            modifiedDate = "";
        }
        return (
            <div className="card bg-light mb-3">
                <div className="card-body">
                    <Link to={`/course/${this.props.course.id}/edit`}>
                        <div className="row">
                            <div className="col">{this.props.course.title}</div>
                            <div className="col">{modifiedDate}</div>
                        </div>
                    </Link>
                    <div className="fa fa-trash cross-float"
                         onClick={() => {this.props.delete(this.props.course.id)}}>
                    </div>
                    <div className="fa fa-pencil cross-float"
                         onClick={() => {this.props.edit(this.props.course.id)}}>
                    </div>

                </div>
            </div>
        )
    }
}
export default CourseRow;
