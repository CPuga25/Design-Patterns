import { Course } from "./Course";
import { CoursePresentation } from "./CoursePresentation";

export class presentacionOnSite extends CoursePresentation{
private location:string;

constructor(location:string, curso:Course){
    super(curso)
    this.location = location;
}

public presentarCurso(): void {
    console.log('Este curso se dará en '+ this.location);
    this.curso.displayCourseInfo()
}

public showPreRequisits():void {
    console.log('Presentarse puntualmente, avisar en recepción su llegada')
    //this.curso.getMaterials.forEach(material => {console.log(material)})
}

public confirmAsistence(aConfirmado:boolean):void {
    if(aConfirmado){
        console.log('Se confirmo la asistencia');
    }
}
}