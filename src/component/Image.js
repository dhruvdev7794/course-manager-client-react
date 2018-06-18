import React from 'react';
import {connect} from 'react-redux';
import * as actions from "../actions";

const Image = ({widget, preview, urlChanged}) => {
    let inputElement;
    return(
        <div>
            <h2>Image Widget</h2>
            <div className="input-group-prepend">
                <span className="input-group-text" id="">URL:</span>


                <input className="form-control"
                       value={widget.src}
                       onChange={() => urlChanged(widget.id, inputElement.value)}
                       ref={node => inputElement = node}
                />
            </div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="">Widget Name</span>
                </div>

                <input className="form-control"
                    // onChange={() => headingTextChanged(widget.id, inputElement.value)}
                       placeholder="Widget Name"
                    // ref={node => inputElement = node}
                />
            </div>
            <h2> Preview </h2>
            {widget.src != undefined && <img src={widget.src} alt="Some image"/>}
            {/*<img src="https://picsum.photos/200/300" alt="Some image"/>*/}
        </div>
    );

};

const dispatchToPropsMapper = dispatch => ({
    urlChanged: (widgetId, urlText) => actions.urlChanged(dispatch, widgetId, urlText)
});

const stateToPropsMapper = state => ({
    preview: state.preview
});

export const ImageContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Image);