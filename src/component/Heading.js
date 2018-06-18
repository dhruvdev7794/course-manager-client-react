import React from 'react';
import {connect} from 'react-redux';
import * as actions from "../actions";

const Heading = ({widget, preview, headingTextChanged, headingSizeChanged}) => {
    let selectElem;
    let inputElement;
    return(

        <div>
            <h2>Heading Widget</h2>
            <div hidden={preview}>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="">Heading Text</span>
                    </div>
                    <input className="form-control"
                           onChange={() => headingTextChanged(widget.id, inputElement.value)}
                           value={widget.text}
                           ref={node => inputElement = node}/>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Heading Size</label>
                    </div>

                    {/*<h1>Heading {widget.size}</h1>*/}
                    <select onChange={() => headingSizeChanged(widget.id, selectElem.value)}
                            value={widget.size}
                            ref={node=> selectElem = node}>
                        <option value="1">Heading 1</option>
                        <option value="2">Heading 2</option>
                        <option value="3">Heading 3</option>
                    </select>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="">Widget Name</span>
                    </div>

                    <input className="form-control"
                        // value={widget.name}
                        // onChange={() => headingTextChanged(widget.id, inputElement.value)}
                        // ref={node => inputElement = node}
                    />
                </div>
                <h2> Preview </h2>
            </div>
            {widget.size ==1 && <h1> {widget.text} </h1>}
            {widget.size ==2 && <h2> {widget.text} </h2>}
            {widget.size ==3 && <h3> {widget.text} </h3>}
        </div>
    )
};

const dispatchToPropsMapper = dispatch => ({
    headingSizeChanged: (widgetId, newSize) => actions.headingSizeChanged(dispatch, widgetId, newSize),
    headingTextChanged: (widgetId, newText) => actions.headingTextChanged(dispatch, widgetId, newText)
});

const stateToPropsMapper = state => ({
    preview: state.preview
});
export const HeadingContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Heading);