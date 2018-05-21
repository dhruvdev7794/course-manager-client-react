import React, {Component} from 'react';
import CourseList from './CourseList';
import CourseEditor from './CourseEditor';
import {BrowserRouter as Router, Route} from 'react-router-dom'


class CourseManager extends Component {
    render(){
        return(
            <Router>
                <div className = "container-fluid">
                    <Route path = "/courses"
                            component={CourseList}>
                    </Route>
                    <Route path = "/course/:courseId/edit"
                            component = {CourseEditor}>
                    </Route>
                    <Route path = "/course/:courseId/module/:moduleId/lesson"
                           component = {CourseEditor}>
                    </Route>

                </div>
            </Router>
        )
    }
}
export default CourseManager;