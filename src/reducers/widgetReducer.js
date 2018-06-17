import {ADD_WIDGET, DELETE_WIDGET, FIND_ALL_WIDGETS, SAVE} from "../constants";

let autoIncroment = 3;
export const widgetReducer = (state = {widgets: []}, action) => {
    switch (action.type){
        case SAVE:
            fetch("http://localhost:8080/api/widget/save",{
                method: 'post',
                body: JSON.stringify(state.widgets),
                headers:{
                    'content-type': 'application/json'
                }
            });
            return state;
        case FIND_ALL_WIDGETS:
            return{
                widgets: action.widgets
            };
        case DELETE_WIDGET:
            return {
                widgets : state.widgets.filter(widget => (
                    widget.id !== action.id
                ))};
        case ADD_WIDGET:
            return {
                widgets:[
                    ...state.widgets,
                    { id: autoIncroment++, text: 'New widget' }
                ]
            };
        default:
            return state;
    }
};
