import { Course } from "./Chain/Course";
import { CoursePresentation } from "./CoursePresentation";

export class PresentacionOnline extends CoursePresentation{
    private plattform:string;

    constructor(platform:string, curso:Course){
        super(curso)
        this.plattform = platform
    }

    public presentarCurso(): void {
        console.log('Este curso se dará en '+ this.plattform);
        this.curso.displayCourseInfo()
    }

    public showOnlineResults():void {
        console.log('materiales: ')
        this.curso.getMaterials.forEach(material => {console.log(material)})
    }

    public sendRemainder(cadena:string):void {
        console.log('recordatorio '+ cadena)
    }
}