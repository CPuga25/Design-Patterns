import { Course } from "./Chain/Course"

export abstract class CoursePresentation{
    protected curso: Course

    constructor(curso:Course){
        this.curso = curso
    }

    public abstract presentarCurso():void;
}