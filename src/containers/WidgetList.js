import React from 'react';

export default class WidgetList extends React.Component{
    constructor(props){
        super(props);
    }

    selectLesson(lessonId){
        this.setState({lessonId: lessonId});
    }

    componentWillReceiveProps(newProps){
        this.selectLesson(newProps.match.params.lessonId);
    }
    componentDidMount(){
        this.selectLesson(this.props.match.params.lessonId);
    }

    render(){
        console.log(this.state);
        return(
            <div className="container">
                <h2>Widgets</h2>

            </div>
        )
    }
}