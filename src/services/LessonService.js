let _singleton = Symbol();
const LESSON_SMALL_API_URL = 'http://localhost:8080/api/lesson';
const LESSON_API_URL = 'http://localhost:8080/api/course/{cid}/module/{mid}/lesson';
class LessonService {

    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new LessonService(_singleton);
        return this[_singleton]
    }

    createLesson(lesson){

    }
    deleteLesson(lessonId){

    }
    findAllLessons(){

    }
    findLessonById(lessonId){

    }
    findAllLessonssForModule(moduleId){

    }
    updateLesson(lessonId){

    }
}