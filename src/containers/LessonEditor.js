import React, {Component} from 'react'
import {Provider, connect} from 'react-redux';
import {createStore} from 'redux';
import {widgetReducer} from "../reducers/widgetReducer"
import {App} from "./WidgetList";

let store = createStore(widgetReducer);

export class LessonEditor extends Component{
    constructor(props){
        super(props);
    }

    componentWillReceiveProps(newProps){
        this.selectLessonId(newProps.match.params.lessonId);
    }

    componentDidMount(){
        this.selectLessonId(this.props.match.params.lessonId);
    }

    selectLessonId(lessonId){
        this.setState({lessonId: lessonId});
    }

    render(){
            return(
                <Provider store={store}>
                    <App lessonId={this.props.match.params.lessonId}/>
                </Provider>
            )
    }
}