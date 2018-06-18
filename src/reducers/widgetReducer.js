import {
    ADD_WIDGET,
    DELETE_WIDGET,
    FIND_ALL_WIDGETS,
    HEADING_SIZE_CHANGED,
    SAVE,
    SELECT_WIDGET_TYPE,
    HEADING_TEXT_CHANGED, PREVIEW, CHANGE_URL_TEXT, CHANGE_HREF_TEXT
} from "../constants";

let autoIncroment = 3;
export const widgetReducer = (state = {widgets: [], preview: false}, action) => {
    let newState;
    switch (action.type){
        case CHANGE_HREF_TEXT:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id){
                        widget.href = action.href;
                    }
                    return Object.assign({}, widget)
                })
            };

        case CHANGE_URL_TEXT:
            // console.log(action);
            // console.log(state);
            // return state;
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id){
                        widget.src = action.urlText;
                    }
                    return Object.assign({}, widget)
                })
            };
        case PREVIEW:
            return {
                widgets: state.widgets,
                preview: !state.preview

            };
        case HEADING_TEXT_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id){
                        widget.text = action.text;
                    }
                    return Object.assign({}, widget)
                })
            };

        case HEADING_SIZE_CHANGED:

            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.widgetId){
                        widget.size = action.size;
                    }
                    return Object.assign({}, widget)
                })
            };
        case SELECT_WIDGET_TYPE:
            console.log(action);
            let newState = {
                widgets: state.widgets.filter((widget)=>{
                    if(widget.id === action.id){
                        widget.widgetType = action.widgetType;
                    }
                    return true;
                })
            };
            return JSON.parse(JSON.stringify(newState));
        case SAVE:
            fetch("http://localhost:8080/api/lesson/"+action.lessonId+"/widget/save",{
                method: 'post',
                body: JSON.stringify(state.widgets),
                headers:{
                    'content-type': 'application/json'
                }
            });
            return state;
        case FIND_ALL_WIDGETS:
            newState = Object.assign({}, state);
            newState.widgets = action.widgets;
            return newState;
            // return{
            //     widgets: action.widgets,
            // };
        case DELETE_WIDGET:
            return {
                widgets : state.widgets.filter(widget => (
                    widget.id !== action.id
                ))};
        case ADD_WIDGET:
            return {
                widgets:[
                    ...state.widgets,
                    {
                        id: autoIncroment++,
                        text: '',
                        widgetType: 'Heading',
                        size: 1,
                        name: '',
                        src:'',
                        href:''

                    }
                ]
            };
        default:
            return state;
    }
};
