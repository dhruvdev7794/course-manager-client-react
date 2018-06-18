import React from 'react';
import {DELETE_WIDGET, SELECT_WIDGET_TYPE, MOVE_WIDGET_UP, MOVE_WIDGET_DOWN} from "../constants";
import {connect} from 'react-redux';
import * as actions from '../actions/index';

import {HeadingContainer} from './Heading';
import {ParagraphContainer} from "./Paragraph";
import {ImageContainer} from "./Image";
import {LinkContainer} from "./Link";
import {ListContainer} from "./List";

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
            </div>
            {widget.widgetType === "Heading" && <HeadingContainer widget={widget}/>}
            {widget.widgetType === "Paragraph" && <ParagraphContainer widget={widget}/>}
            {widget.widgetType === "Image" && <ImageContainer widget={widget}/>}
            {widget.widgetType === "List" && <ListContainer widget={widget}/>}
            {widget.widgetType === "Link" && <LinkContainer widget={widget}/>}

        </li>
    )
};

export const WidgetContainer = connect(state => ({
    lessonId: state.lessonId,
    preview: state.preview
}))(Widget);
