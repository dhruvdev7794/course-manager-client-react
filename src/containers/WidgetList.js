import React, {Component} from "react";
import {connect} from 'react-redux';
import {WidgetContainer} from "../component/widget";
import {addWidget,save, findAllWidgets, preview} from "../actions";

class widgetList extends Component{
    constructor(props){
        super(props);
        this.props.findAllWidgets(this.props.lessonId);
    }

    render(){
        return(
            <div>
                <h1 className="container-fluid">
                    Widget List {this.props.widgets.length}
                </h1>
                <button hidden={this.props.previewMode} onClick={() => {this.props.save(this.props.lessonId)}}>
                    Save
                </button>
                <button onClick={this.props.preview}>
                    Preview
                </button>
                {/*<h3>{this.props.lessonId}</h3>*/}
                <div className="wbdv-no-list-marker">
                    {
                        this.props.widgets.map(widget => (
                            <WidgetContainer widget={widget} key={widget.id}
                            preview={this.props.previewMode}/>
                        ))
                    }
                </div>
                <button onClick={this.props.addWidget}> Add Widget
                </button>
            </div>
        )
    }

}

const stateToPropertiesMapper = (state) => (
    {
        widgets : state.widgets,
        previewMode: state.preview
    }
);

const dispatchToPropertiesMapper =  dispatch => ({
    findAllWidgets: (lessonId) => findAllWidgets(dispatch, lessonId),
    addWidget: () => addWidget(dispatch),
    save: (lessonId) => save(dispatch, lessonId),
    preview: () => preview(dispatch)
});

export const App = connect(
    stateToPropertiesMapper,
    dispatchToPropertiesMapper) (widgetList);