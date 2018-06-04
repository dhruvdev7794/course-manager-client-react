import React from 'react'
import LessonTabItem from '../component/LessonTabItem';
import LessonService from '../services/LessonService';

export default class LessonTab
    extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            courseId: '',
            moduleId: '',
            lessons : [
            ]
        };
        this.setCourseId = this.setCourseId.bind(this);
        this.titleChanged = this.titleChanged.bind(this);
        this.createLesson = this.createLesson.bind(this);
        this.setModuleId = this.setModuleId.bind(this);
        this.deleteLesson = this.deleteLesson.bind(this);
        this.setModuleId = this.setModuleId.bind(this);
        this.setCourseId = this.setCourseId.bind(this);
        this.setLessons = this.setLessons.bind(this);
        this.lessonService = LessonService.instance;
    }
    deleteLesson(lessonId){
        this.lessonService.deleteLesson(lessonId)
            .then(() => {
                this.findAllLessonsForModule(this.state.courseId, this.state.moduleId);
            });
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
        if(this.state.lesson === "" || this.state.lesson === undefined || this.state.lesson === null){
            this.state.lesson = {title:"New Lesson"};
        }
        this.lessonService.createLesson(this.props.courseId, this.props.moduleId, this.state.lesson)
            .then(() => {
                this.findAllLessonsForModule(this.props.courseId, this.props.moduleId);
            });
    }
    titleChanged(event) {
        this.setState({lesson: {title: event.target.value}});
    }
    renderTabsOfLesson(){
        if(this.state.lessons!=undefined){
            var lessons = this.state.lessons.map((lesson) =>{
                return <LessonTabItem title={lesson.title} key={lesson.id}
                                      lesson = {lesson} courseId={this.props.courseId}
                                      moduleId={this.props.moduleId} delete={this.deleteLesson}/>
            });
            return lessons;
        }

    }

    render() {
        return(
        <div>
            <div className="navbar navbar-expand-lg">
                <input id="inputIconEx2" className="form-control cross-float"
                       onChange={this.titleChanged}
                       placeholder="Enter the Lesson:"/>
                <button className="fa fa-plus cross-float headerButton"
                        onClick={this.createLesson}></button>
            </div>
            <ul className="nav nav-tabs">
            {this.renderTabsOfLesson()}
            </ul>

        </div>
        );
    }
}
