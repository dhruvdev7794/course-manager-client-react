import {
    ADD_WIDGET,
    DELETE_WIDGET,
    FIND_ALL_WIDGETS,
    HEADING_SIZE_CHANGED,
    SAVE,
    SELECT_WIDGET_TYPE,
    HEADING_TEXT_CHANGED,
    PREVIEW,
    CHANGE_URL_TEXT,
    CHANGE_HREF_TEXT,
    LIST_TYPE_CHANGED,
    MOVE_WIDGET_UP,
    MOVE_WIDGET_DOWN, NAME_CHANGED
} from "../constants";

let autoIncroment = 3;
export const widgetReducer = (state = {widgets: [], preview: false}, action) => {
    let newState;
    switch (action.type){
        case NAME_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id){
                        widget.name = action.name;
                    }
                    return Object.assign({}, widget)
                })
            };
            return state;
        case MOVE_WIDGET_UP:
            var i = 0;
            var allWidgets = state.widgets;
            var newWidgets=[];
            while(i<allWidgets.length){
                if(allWidgets[i].id === action.widget.id && i!==0) {

                    allWidgets[i].widgetOrder--;
                    allWidgets[i - 1].widgetOrder++;

                    var temp = allWidgets[i];
                    newWidgets[i] = newWidgets[i-1];
                    newWidgets[i-1] = temp;
                }
                else{
                    newWidgets.push(allWidgets[i])
                }
                i++;
            }
            state.widgets = newWidgets;
            return Object.assign({},state);
        case MOVE_WIDGET_DOWN:
            console.log(state);
            var i = 0;
            var allWidgets = state.widgets;
            var newWidgets=[];
            var len = allWidgets.length

            while(i<allWidgets.length){
                if(allWidgets[i].id === action.widget.id && i!=len-1){
                    allWidgets[i].widgetOrder++;
                    allWidgets[i+1].widgetOrder--;

                    var temp = allWidgets[i];
                    newWidgets[i] = allWidgets[i+1];
                    newWidgets.push(temp);

                    i++;
                }
                else{
                    newWidgets.push(allWidgets[i]);
                }
                i++;
            }
            state.widgets = newWidgets
            return Object.assign({},state);
        case LIST_TYPE_CHANGED:

            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id){
                        widget.listType = action.listType;
                    }
                    return Object.assign({}, widget)
                })
            };
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
            console.log(state.widgets);
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
            return newState
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
                        href:'',
                        listType:'unordered',
                        widgetOrder: state.widgets.length+1
                    }
                ]
            };
        default:
            return state;
    }
};
