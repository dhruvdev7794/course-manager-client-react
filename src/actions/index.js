import {
    ADD_WIDGET,
    FIND_ALL_WIDGETS,
    HEADING_SIZE_CHANGED,
    SAVE,
    HEADING_TEXT_CHANGED,
    PREVIEW,
    CHANGE_URL_TEXT
} from "../constants";

export const findAllWidgets = (dispatch, lessonId)=>{
    fetch("http://localhost:8080/api/lesson/"+lessonId+"/widget")
        .then(response => (response.json()))
        .then(widgets => dispatch({
            type: FIND_ALL_WIDGETS,
            widgets: widgets
        }))
};

export const addWidget = dispatch =>(
    dispatch({
        type: ADD_WIDGET
    })
);

export const save = (dispatch, lessonId)=> (
    dispatch({
        type: SAVE,
        lessonId: lessonId
    })
);

export const headingSizeChanged = (dispatch, widgetId, newSize) => {
        dispatch({type: HEADING_SIZE_CHANGED,
            widgetId: widgetId,
            size: newSize});
};

export const headingTextChanged = (dispatch, widgetId, newText) => {
    dispatch({type: HEADING_TEXT_CHANGED,
        id: widgetId,
        text : newText})
};

export const preview = (dispatch) => {
    dispatch({type: PREVIEW})
};

export const urlChanged = (dispatch, widgetId, urlText) => {
    dispatch({
        type: CHANGE_URL_TEXT,
        id: widgetId,
        urlText: urlText
    })
}