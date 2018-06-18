import React from 'react';
import {DELETE_WIDGET, SELECT_WIDGET_TYPE, MOVE_WIDGET_UP, MOVE_WIDGET_DOWN} from "../constants";
import {connect} from 'react-redux';
import * as actions from '../actions/index';

import {HeadingContainer} from './Heading';
import {ParagraphContainer} from "./Paragraph";

// ------------------------- List ---------------------- //

const List = () => (
    <h1>List</h1>
);

const Image = ({widget, preview, urlChanged}) => {
    let inputElement
    return(
        <div>
            <div className="input-group-prepend">
                <span className="input-group-text" id="">URL:</span>


                <input className="form-control"
                    value={widget.url}
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
            {widget.url != undefined && <img src={widget.url} alt="Some image"/>}
            {/*<img src="https://picsum.photos/200/300" alt="Some image"/>*/}
        </div>
    );

};

const Link = () => (
    <h1>Link</h1>
);

// ----------------- Widget content --------------------//
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
                <h2> {widget.name} </h2>
            </div>
            {widget.widgetType === "Heading" && <HeadingContainer widget={widget}/>}
            {widget.widgetType === "Paragraph" && <ParagraphContainer widget={widget}/>}
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
