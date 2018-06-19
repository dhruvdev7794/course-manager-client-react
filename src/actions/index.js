import {
    ADD_WIDGET,
    FIND_ALL_WIDGETS,
    HEADING_SIZE_CHANGED,
    SAVE,
    HEADING_TEXT_CHANGED,
    PREVIEW,
    CHANGE_URL_TEXT, CHANGE_HREF_TEXT, LIST_TYPE_CHANGED
} from "../constants";

export const findAllWidgets = (dispatch, lessonId)=>{
    fetch("http://localhost:8080/api/lesson/"+lessonId+"/widget")
        .then(response => (response.json()))
        .then(widgets => {
            widgets.sort(function (a, b) {
                return a.widgetOrder - b.widgetOrder;
            });
            return dispatch({
                type: FIND_ALL_WIDGETS,
                widgets: widgets
            })
        })
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
};

export const hrefChanged = (dispatch, widgetId, href) => {
    dispatch({
        type: CHANGE_HREF_TEXT,
        id: widgetId,
        href: href
    })
};

export const listTypeChanged = (dispatch, widgetId, listType) => {
    dispatch({
        type:LIST_TYPE_CHANGED,
        id: widgetId,
        listType: listType
    })
};