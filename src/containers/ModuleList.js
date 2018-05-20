import React from 'react'
import ModuleListItem from '../component/ModuleListItem';
import ModuleService from '../services/ModuleService';

export default class ModuleList
    extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            module: {title:""},
            courseId: ''
            // modules: [
            //     {title: 'Module 1 - jQuery', id: 123},
            //     {title: 'Module 2 - React', id: 234},
            //     {title: 'Module 3 - Redux', id: 345},
            //     {title: 'Module 4 - Angular', id: 456},
            //     {title: 'Module 5 - Node.js', id: 567},
            //     {title: 'Module 6 - MongoDB', id: 678}
            // ]
        };
        this.setCourseId = this.setCourseId.bind(this);
        this.titleChanged = this.titleChanged.bind(this);
        this.createModule = this.createModule.bind(this);
        this.moduleService = ModuleService.instance;
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
                return <ModuleListItem key = {module.id} title = {module.title}  courseId = {this.state.courseId}/>
            });
            return modules;
        }
        return null;
    }
    titleChanged(event) {
        console.log(event.target.value);
        this.setState({module: {title: event.target.value}});
    }

    createModule(event){
        console.log(this.state.module);
        this.moduleService.createModule(this.props.courseId, this.state.module);
    }
    render(){
        return(
            <div>
                <h4>Module of course ID:
                    {this.state.courseId}</h4>
                <input className="form-control"
                       onChange={this.titleChanged}
                       placeholder="title"/>
                <button
                    onClick={this.createModule}
                    className="btn btn-primary btn-block">
                    <i className="fa fa-plus"></i>
                </button>

                <ul className="list-group">
                    {this.renderListOfModules()}
                </ul>
            </div>
        )
    }
}
