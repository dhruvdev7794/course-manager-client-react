import React from 'react';
import {connect} from 'react-redux';
import * as actions from "../actions";

const List = ({widget,preview, headingTextChanged, listTypeChanged}) => {
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
                        onChange={() => listTypeChanged(widget.id, listSelectElement.value)}
                        value={widget.listType}
                        ref={node=> listSelectElement = node}>
                        <option value="unordered">Unordered List</option>
                        <option value="ordered">Ordered List</option>
                    </select>
                </div>
                <h2> Preview </h2>
            </div>
            {covertToListAndDisplay(widget.text, widget.listType)}
        </div>
    )

};

const covertToListAndDisplay = (listText, listType) => {
    let  i = 0;
    var listArr = listText.split("\n");



    if(listType === 'ordered'){
            return(

                    <ol>
                        {/*<li key={obj.id}>{obj.val}</li>*/}
                        {listArr.map(val => (
                            <li key={i++}>{val}</li>
                        ))}
                    </ol>
            )
    }
    else{

            return(
                    <ul>
                        {listArr.map(val => (
                            <li key={i++}>{val}</li>
                        ))}
                    </ul>
            )

    }


    // return list
};

const dispatchToPropsMapper = dispatch => ({
    listTypeChanged: (widgetId, type) => actions.listTypeChanged(dispatch, widgetId, type),
    headingTextChanged: (widgetId, newText) => actions.headingTextChanged(dispatch, widgetId, newText)
});

const stateToPropsMapper = state => ({
    preview: state.preview
});
export const ListContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(List);