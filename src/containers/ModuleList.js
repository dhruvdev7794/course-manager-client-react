import React from 'react'
import ModuleListItem from '../component/ModuleListItem';

export default class ModuleList
    extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            module: {title:""},
            courseId: '',
            modules: [
                {title: 'Module 1 - jQuery', id: 123},
                {title: 'Module 2 - React', id: 234},
                {title: 'Module 3 - Redux', id: 345},
                {title: 'Module 4 - Angular', id: 456},
                {title: 'Module 5 - Node.js', id: 567},
                {title: 'Module 6 - MongoDB', id: 678}
            ]
        };
        this.setCourseId = this.setCourseId.bind(this);
        this.titleChanged = this.titleChanged.bind(this);
        this.createModule = this.createModule.bind(this);
    }
    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }
    componentDidMount() {
        this.setCourseId(this.props.courseId);
    }
    componentWillReceiveProps(newProps){
        this.setCourseId(newProps.courseId);
    }

    renderListOfModules(){
        var modules = this.state.modules.map((module) => {
            return <ModuleListItem key = {module.id} title = {module.title}  courseId = {this.state.courseId}/>
        });
        return modules;
    }
    titleChanged(event) {
        console.log(event.target.value);
        this.setState({module: {title: event.target.value}});
    }

    createModule(event){
        console.log(this.state.module)
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
