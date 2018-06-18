import React from 'react';
import {DELETE_WIDGET, SELECT_WIDGET_TYPE} from "../constants";
import {connect} from 'react-redux';

const Heading = () => (
    <div>
        <h1>Heading</h1>
        <select>
            <option>Heading 1</option>
            <option>Heading 2</option>
            <option>Heading 3</option>
        </select>
    </div>
);

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


const Widget = ({widget, dispatch}) => {
    let selectElement;

    return(
        <li key={widget.id}>
            {widget.text}
            {widget.widgetType}


            <div>
                {widget.widgetType === "Heading" && <Heading/>}
                {widget.widgetType === "Paragraph" && <Paragraph/>}
                {widget.widgetType === "Image" && <Image/>}
                {widget.widgetType === "List" && <List/>}
                {widget.widgetType === "Link" && <Link/>}
            </div>


            <select onChange={event => dispatch({
                type: SELECT_WIDGET_TYPE,
                id:widget.id,
                widgetType: selectElement.value
            })} ref={node => selectElement = node} className="float-right">
                <option>Heading</option>
                <option>Paragraph</option>
                <option>List</option>
                <option>Image</option>
                <option>Link</option>
            </select>


            <button onClick={e => (
                dispatch({type:DELETE_WIDGET, id: widget.id})
            )}> Delete </button>
        </li>
    )
};

export const WidgetContainer = connect(state => ({
    lessonId: state.lessonId
}))(Widget);
