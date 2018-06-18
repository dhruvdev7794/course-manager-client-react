import {ADD_WIDGET, FIND_ALL_WIDGETS, SAVE} from "../constants";

export const findAllWidgets = (dispatch, lessonId)=>{
    console.log(lessonId);
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

export const save = dispatch => (
    dispatch({
        type: SAVE
    })
);