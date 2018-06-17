import React, {Component} from 'react'
import {Provider, connect} from 'react-redux';
import {createStore} from 'redux';
import {widgetReducer} from "../reducers/widgetReducer"
import {WidgetContainer} from "../component/widget";
import {findAllWidgets, addWidget, save} from "../actions";
import {App} from "./WidgetList";

// Step 3: The store will take the reducer and
//         this store is being fed (at HTML render)
let store = createStore(widgetReducer);

export class WidgetDisplay extends Component{
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
        if(this.state!=null){
            return(
                <Provider store = {store}>
                    <App lessonId={this.state.lessonId}/>
                </Provider>
            )
        }
        else{
            return (<p></p>)
        }
    }
}