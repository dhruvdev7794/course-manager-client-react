import React from 'react'
import LessonTabItem from '../component/LessonTabItem';
import LessonService from '../services/LessonService';

export default class LessonTab
    extends React.Component {

    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            moduleId: '',
            lessons : [
            ]
        };
        this.setCourseId = this.setCourseId.bind(this);
        this.titleChanged = this.titleChanged.bind(this);
        this.createLesson = this.createLesson.bind(this);
        this.setModuleId = this.setModuleId.bind(this);
        this.lessonService = LessonService.instance;
    }
    setLessons(lessons){
        this.setState({lessons:lessons});
    }


    findAllLessonsForModule(courseId, moduleId){
        if(courseId!=undefined && moduleId!=undefined)
        this.lessonService.findAllLessonsForModule(courseId, moduleId)
            .then((lessons) => {this.setLessons(lessons)})
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
        this.findAllLessonsForModule(newProps.courseId, newProps.moduleId);
    }
    createLesson(){
        // console.log(this.props.moduleId);
        // console.log(this.state.lesson);
        this.lessonService.createLesson(this.props.courseId, this.props.moduleId, this.state.lesson);
    }
    titleChanged(event) {
        this.setState({lesson: {title: event.target.value}});
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
                <input id="inputIconEx2" className="form-control cross-float"
                       onChange={this.titleChanged}
                       placeholder="Enter the Lesson:"/>
                <button className="fa fa-plus cross-float plusButton"
                        onClick={this.createLesson}></button>
            </div>
            <ul className="nav nav-tabs">
            {this.renderTabsOfLesson()}
            </ul>

        </div>
        );
    }
}
