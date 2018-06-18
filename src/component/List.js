import React from 'react';
import {connect} from 'react-redux';
import * as actions from "../actions";

const List = ({widget,preview, headingTextChanged}) => {
    let listInputElement;
    let listSelectElement;

    return(
        <div>
            <div hidden={preview}>
                <h2>List Widget</h2>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Enter Elements</span>
                    </div>
                    <textarea className="form-control"
                              value={widget.text}
                              onChange={() => headingTextChanged(widget.id, listInputElement.value)}
                              ref={node => listInputElement = node}
                              aria-label="With textarea"/>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Select Order Type</span>
                    </div>
                    <select
                        ref={node=> listSelectElement = node}>
                        <option>Ordered List</option>
                        <option>Unordered List</option>
                    </select>
                </div>
                <h2> Preview </h2>
            </div>
            {covertToList(widget.text)}
        </div>
    )

};

const covertToList = listText => {
    var listArr = listText.split("\n");
    var list = listArr.map(val => {
        return(
            <div>
                <ul>
                    <li>{val}</li>
                </ul>
            </div>
        )
    });

    return list
};

const dispatchToPropsMapper = dispatch => ({
    // headingSizeChanged: (widgetId, newSize) => actions.headingSizeChanged(dispatch, widgetId, newSize),
    headingTextChanged: (widgetId, newText) => actions.headingTextChanged(dispatch, widgetId, newText)
});

const stateToPropsMapper = state => ({
    preview: state.preview
});
export const ListContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(List);