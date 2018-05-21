import React from 'react'
import LessonTabItem from '../component/LessonTabItem';
import LessonService from "../services/LessonService";

export default class LessonTab
    extends React.Component {

    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            moduleId: '',
            lessons : [
                {title : "Lesson1", id: 1},
                {title : "Lesson2", id: 2}
            ]
        };
        this.setCourseId = this.setCourseId.bind(this);
        this.setModuleId = this.setModuleId.bind(this);
        this.LessonService = LessonService.instance;

    }

    setLessons(lessons){
        this.setState({lessons:lessons});
    }


    findAllLessonsForModule(moduleId){
        console.log(moduleId);
        this.LessonService
            .findAllLessonssForModule(moduleId)
            .then((lessons) => {this.setLessons(lessons)});
    }
    setModuleId(moduleId) {
        this.setState({moduleId: moduleId});
    }
    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }


    componentDidMount(){
        this.setModuleId(this.props.moduleId);
    }
    componentWillReceiveProps(newProps){
        this.setModuleId(newProps.moduleId);
        this.setCourseId(newProps.courseId);
        this.findAllLessonsForModule(newProps.moduleId);
    }

    renderTabsOfLesson(){
        if(this.state.lessons!=undefined){
            var lessons = this.state.lessons.map((lesson) =>{
                return <LessonTabItem title={lesson.title} key={lesson.id}/>
            })
            return lessons;
        }

    }

    render() { return(
        <div>
            <div className="navbar navbar-expand-lg">
                <input id="inputIconEx2" className="form-control cross-float" placeholder="Enter the Lesson:"/>
                <button className="fa fa-plus cross-float plusButton"></button>
            </div>
            <ul className="nav nav-tabs">
            {this.renderTabsOfLesson()}
            </ul>

        </div>
        );
    }
}
