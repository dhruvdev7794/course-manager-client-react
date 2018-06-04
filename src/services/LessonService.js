const LESSON_SMALL_API_URL = 'http://localhost:8080/api/lesson';
const LESSON_API_URL = 'http://localhost:8080/api/course/cid/module/mid/lesson';
let _singleton = Symbol();
export default class LessonService {

    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new LessonService(_singleton);
        return this[_singleton]
    }

    createLesson(courseId, moduleId, lesson){
        return fetch(LESSON_API_URL.replace('cid', courseId).replace('mid', moduleId),{
                body: JSON.stringify(lesson),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            })
            .then(function (response) {
                return response.json();
            })
    }
    deleteLesson(lessonId){
        return fetch(LESSON_SMALL_API_URL+"/"+lessonId,{
            method:'DELETE'
        })
    }
    findAllLessons(){

    }
    findLessonById(lessonId){

    }
    findAllLessonsForModule(courseId, moduleId){
        return fetch(LESSON_API_URL.replace('cid', courseId).replace('mid', moduleId))
            .then(function (response) {
                console.log(response.status)
                if(response.status > 400){
                    window.location.href="/course/"+courseId+"/edit"
                    return null;
                }
                return response.json();
            })
    }
    updateLesson(lessonId){

    }
}