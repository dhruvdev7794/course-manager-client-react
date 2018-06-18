import React from 'react';
import {connect} from 'react-redux';
import * as actions from "../actions";

const Link = ({widget, preview, hrefChanged, headingTextChanged}) => {
    let hrefElement;
    let linkTextElement;
    return(
        <div>
            <h2>Link Widget</h2>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="">URL:</span>
                </div>
                <input className="form-control"
                       value={widget.href}
                       onChange={() => hrefChanged(widget.id, hrefElement.value)}
                       ref={node => hrefElement = node}
                />

            </div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="">Link Text:</span>
                </div>
                <input className="form-control"
                       value={widget.text}
                       onChange={() => headingTextChanged(widget.id, linkTextElement.value)}
                       ref={node => linkTextElement = node}
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
            {widget.href != undefined && <a href={widget.href} alt="Some image">{widget.text}</a> }
            {/*<img src="https://picsum.photos/200/300" alt="Some image"/>*/}
        </div>
    );

};
const dispatchToPropsMapper = dispatch => ({
    hrefChanged: (widgetId, urlText) => actions.hrefChanged(dispatch, widgetId, urlText),
    headingTextChanged: (widgetId, linkText) => actions.headingTextChanged(dispatch, widgetId, linkText)
});

const stateToPropsMapper = state => ({
    preview: state.preview
});

export const LinkContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Link);