import React, {Component} from "react";
import {connect} from 'react-redux';
import {WidgetContainer} from "../component/widget";
import {addWidget,save, findAllWidgets} from "../actions";

class widgetList extends Component{
    constructor(props){
        super(props);
        this.props.findAllWidgets(this.props.lessonId);
    }

    render(){
        return(
            <div>
                <h1>
                    Widget List {this.props.widgets.length}
                </h1>
                <button onClick={() => {this.props.save(this.props.lessonId)}}>
                    Save
                </button>
                <h3>{this.props.lessonId}</h3>
                <ul className="wbdv-no-list-marker">
                    {
                        this.props.widgets.map(widget => (
                            <WidgetContainer widget={widget} key={widget.id}/>
                        ))
                    }
                </ul>
                <button onClick={this.props.addWidget}> Add Widget
                </button>
            </div>
        )
    }

}

const stateToPropertiesMapper = (state) => (
    {
        widgets : state.widgets
    }
);

const dispatchToPropertiesMapper =  dispatch => ({
    findAllWidgets: (lessonId) => findAllWidgets(dispatch, lessonId),
    addWidget: () => addWidget(dispatch),
    save: (lessonId) => save(dispatch, lessonId)
});

export const App = connect(
    stateToPropertiesMapper,
    dispatchToPropertiesMapper) (widgetList);