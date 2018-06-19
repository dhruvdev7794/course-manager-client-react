import React from 'react';
import {connect} from 'react-redux';
import * as actions from "../actions";

const Image = ({widget, preview, urlChanged, nameChanged}) => {
    let inputElement;
    let nameElement;
    return(
        <div>
            <div hidden={preview}>
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
                        onChange={() => nameChanged(widget.id, nameElement.value)}
                        value={widget.name}
                        ref={node => nameElement = node}
                    />
                </div>
                <h2> Preview </h2>
            </div>
            {widget.src != undefined && <img src={widget.src} alt="Some image"/>}
            {/*<img src="https://picsum.photos/200/300" alt="Some image"/>*/}
        </div>
    );

};

const dispatchToPropsMapper = dispatch => ({
    urlChanged: (widgetId, urlText) => actions.urlChanged(dispatch, widgetId, urlText),
    nameChanged: (widgetId, urlText) => actions.nameChanged(dispatch, widgetId, urlText)
});

const stateToPropsMapper = state => ({
    preview: state.preview
});

export const ImageContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Image);