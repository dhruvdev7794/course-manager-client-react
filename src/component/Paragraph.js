import React from 'react';
import {connect} from 'react-redux';
import * as actions from "../actions";

const Paragraph = ({widget, preview, paragraphTextChanged}) => {
    let inputElement;
    return(
        <div>
            <div hidden={preview}>
                <h2>Paragraph Widget</h2>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Text</span>
                    </div>
                    <textarea className="form-control"
                              value={widget.text}
                              onChange={() => paragraphTextChanged(widget.id, inputElement.value)}
                              ref={node => inputElement = node}
                              aria-label="With textarea"/>
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
            </div>
            {widget.text && <p> {widget.text} </p>}
        </div>
    )
};
const dispatchToPropsMapperPara = dispatch => ({
    paragraphTextChanged: (widgetId, newText) => actions.headingTextChanged(dispatch, widgetId, newText)
});

const stateToPropsMapperPara = state => ({
    preview: state.preview
});

export const ParagraphContainer = connect(stateToPropsMapperPara, dispatchToPropsMapperPara)(Paragraph);