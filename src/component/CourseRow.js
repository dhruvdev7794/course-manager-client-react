import React from 'react';
import { Link } from 'react-router-dom'

class CourseRow extends React.Component {
    constructor(props){
        super(props);
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
        console.log(this.props.grid);
        if(this.props.grid){
            return (
                <div className="card bg-light">
                    <div className="card-body">
                        <Link to={`/course/${this.props.course.id}/edit`}>
                            {/*<div className="row">*/}
                                <div>{this.props.course.title}</div>
                                <div>{modifiedDate}</div>
                            {/*</div>*/}
                        </Link>
                        <div className="fa fa-trash"
                             onClick={() => {if(window.confirm("Are you sure you want to delete it?"))this.props.delete(this.props.course.id)}}>
                        </div>
                    </div>
                </div>
            )
        }
        else{
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
                             onClick={() => {if(window.confirm("Are you sure you want to delete it?"))this.props.delete(this.props.course.id)}}>
                        </div>
                    </div>
                </div>
            )
        }

    }
}
export default CourseRow;
