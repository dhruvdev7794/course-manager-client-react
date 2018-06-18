import React from 'react';
import {DELETE_WIDGET, SELECT_WIDGET_TYPE, MOVE_WIDGET_UP, MOVE_WIDGET_DOWN} from "../constants";
import {connect} from 'react-redux';
import * as actions from '../actions/index';

const Heading = ({widget, preview, headingTextChanged, headingSizeChanged}) => {
    let selectElem;
    let inputElement;
    return(

        <div>
            <div hidden={preview}>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="">Heading Text</span>
                    </div>
                    <input className="form-control"
                       onChange={() => headingTextChanged(widget.id, inputElement.value)}
                       placeholder="Heading Text"
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
                        // onChange={() => headingTextChanged(widget.id, inputElement.value)}
                           placeholder="Widget Name"
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
})
const HeadingContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Heading);

const Paragraph = () => (
    <div>
        <h1>Paragraph</h1>
        <textarea></textarea>
    </div>
);

const List = () => (
    <h1>List</h1>
);

const Image = () => (
    <h1>Image</h1>
);

const Link = () => (
    <h1>Link</h1>
);


const Widget = ({widget, preview, dispatch}) => {
    let selectElement;

    return(
        <li key={widget.id}>
            <div hidden={preview}>

                <button className="float-right fa fa-close btn btn-danger"
                        onClick={e => (
                            dispatch({type:DELETE_WIDGET, id: widget.id})
                        )}>

                </button>

                <button className="float-right fa fa-arrow-up btn btn-warning"
                        onClick={event => (
                            dispatch({type: MOVE_WIDGET_UP, widget: widget})
                        )}>
                </button>
                <button className="float-right fa fa-arrow-down btn btn-warning"
                        onClick={event => (
                            dispatch({type: MOVE_WIDGET_DOWN, widget: widget})
                        )}>
                </button>


                <select onChange={event => dispatch({
                    type: SELECT_WIDGET_TYPE,
                    id:widget.id,
                    widgetType: selectElement.value
                })} ref={node => selectElement = node} className="float-right"
                value={widget.widgetType}>
                    <option value="Heading">Heading</option>
                    <option value="Paragraph">Paragraph</option>
                    <option value="List">List</option>
                    <option value="Image">Image</option>
                    <option value="Link">Link</option>
                </select>
                <h2> Heading Widget </h2>
            </div>
            {widget.widgetType === "Heading" && <HeadingContainer widget={widget}/>}
            {widget.widgetType === "Paragraph" && <Paragraph/>}
            {widget.widgetType === "Image" && <Image/>}
            {widget.widgetType === "List" && <List/>}
            {widget.widgetType === "Link" && <Link/>}

        </li>
    )
};

export const WidgetContainer = connect(state => ({
    lessonId: state.lessonId,
    preview: state.preview
}))(Widget);
