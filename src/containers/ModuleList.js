import React from 'react'
import ModuleListItem from '../component/ModuleListItem';
import ModuleService from '../services/ModuleService';

export default class ModuleList
    extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            module: {title:"", id:""},
            courseId: '',
            modules: [
                {title: 'Module 1 - jQuery', id: 123}
            ]
        };
        this.setCourseId = this.setCourseId.bind(this);
        this.titleChanged = this.titleChanged.bind(this);
        this.createModule = this.createModule.bind(this);
        this.deleteModule = this.deleteModule.bind(this);
        this.moduleService = ModuleService.instance;
    }
    deleteModule(moduleId){
        this.moduleService.deleteModule(moduleId);
    }

    setModules(modules) {
        this.setState({modules: modules})
    }
    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    componentDidMount() {
        this.setCourseId(this.props.courseId);
    }
    findAllModulesForCourse(courseId) {
        this.moduleService
            .findAllModulesForCourse(courseId)
            .then((modules) => {this.setModules(modules)});
    }

    componentWillReceiveProps(newProps){
        this.setCourseId(newProps.courseId);
        this.findAllModulesForCourse(newProps.courseId)

    }

    renderListOfModules(){
        if(this.state.modules!=undefined){
            var modules = this.state.modules.map((module) => {
                return <ModuleListItem key = {module.id} title = {module.title}
                                       module = {module}
                                       delete={this.deleteModule}
                                       courseId = {this.state.courseId}/>
            });
            return modules;
        }
        return null;
    }
    titleChanged(event) {
        this.setState({module: {title: event.target.value}});
    }

    createModule(event){
        this.moduleService.createModule(this.props.courseId, this.state.module);
    }
    render(){
        return(
            <div>
                <nav className="navbar navbar-light navbar-expand">
                    <div className="container">
                        <input className="form-control" id="titleFld"
                               onChange={this.titleChanged}
                               placeholder="New Course Title: "/>
                        <button className="fa fa-plus plusButton"
                                onClick={this.createModule}>
                        </button>
                    </div>
                </nav>
                <div className="card">
                    <ul className="list-group list-group-flush">
                        {this.renderListOfModules()}
                    </ul>
                </div>
            </div>
        )
    }
}
