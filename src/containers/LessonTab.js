import React from 'react'
import LessonTabItem from '../component/LessonTabItem';

export default class LessonTab
    extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            lessons : [
                {title : "Lesson1", id: 1},
                {title : "Lesson2", id: 2}
            ]
        }

    }

    renderTabsOfLesson(){
        if(this.state.lessons!=undefined){
            var lessons = this.state.lessons.map((lesson) =>{
                return <LessonTabItem title={lesson.title} key={lesson.id}/>
            })
            return lessons;
        }

    }

    render() { return(
        <div>
            <ul className="nav nav-tabs">
            {this.renderTabsOfLesson()}
            </ul>
            <div className="navbar navbar-expand-lg">
                <input id="inputIconEx2" className="form-control cross-float" placeholder="Enter the Lesson:"/>
                <button className="fa fa-plus cross-float plusButton"></button>
            </div>
        </div>
        );
    }
}
