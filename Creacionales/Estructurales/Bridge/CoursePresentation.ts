import { Course } from "./Course"

export abstract class CoursePresentation{
    protected curso: Course

    constructor(curso:Course){
        this.curso = curso
    }

    public abstract presentarCurso():void;
}