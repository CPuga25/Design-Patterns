import { InstructorDetails } from "./InstructorDetails";
import { Schedule } from "./Schedule";
import { Student } from "./Student";


export class Course {
    private name: string;
    private description: string;
    private materials: string[];
    private instructorDetails: InstructorDetails;
    private schedule: Schedule | null;
    private students: Student[] | null;
    private startDate: Date | null;
    private endDate: Date | null;

    constructor(
        name: string,
        description: string,
        materials: string[],
        instructorDetails: InstructorDetails,
        schedule: Schedule | null,
        students: Student[] | null,
        startDate: Date | null,
        endDate: Date | null
    ) {
        this.name = name;
        this.description = description || 'No description available';
        this.materials = materials || []; // Valor por defecto
        this.instructorDetails = instructorDetails;
        this.schedule = schedule || { days: [], time: '' }; // Valor por defecto
        this.students = students || []; // Lista vacía por defecto
        this.startDate = startDate || new Date(); // Valor por defecto
        this.endDate = endDate || new Date(); // Valor por defecto
    }

    public addExtraBehaviour(cadena:string):void{
        //funcionalidad implementada desde el exterior
    }

    public displayCourseInfo(): void {
        console.log(`Curso: ${this.name}`);
        console.log(`Descripción: ${this.description}`);
        console.log(`Instructor: ${this.instructorDetails.name}, Email: ${this.instructorDetails.email}, Experiencia: ${this.instructorDetails.experience} años`);
        console.log(`Horario: ${this.schedule?.days.join(', ')} a las ${this.schedule?.time}`);
        console.log(`Fecha de inicio: ${this.startDate?.toDateString()}`);
        console.log(`Fecha de fin: ${this.endDate?.toDateString()}`);
        console.log(`Materiales: ${this.materials.join(', ')}`);
        console.log(`Estudiantes inscritos: ${this.students?.map(s => s.name).join(', ')}`);
    }
}
