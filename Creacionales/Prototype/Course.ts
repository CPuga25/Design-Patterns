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
    public get getName():string{
        return this.name
    }

    public get getDescription():string{
        return this.description
    }

    public get getMaterials():string[]{
        return this.materials
    }

    public get getInstructorDetails():InstructorDetails{
        return this.instructorDetails
    }

    public get getSchedule():Schedule | null{
        return this.schedule
    }

    public get getStudents():Student[]|null{
        return this.students
    }

    public get getStartDate():Date|null{
        return this.startDate
    }

    public get getEndDate():Date|null{
        return this.endDate
    }

    public addExtraBehaviour(cadena:string):void{
        //funcionalidad implementada desde el exterior
    }

    public clone():Course{
        return new Course(
            this.name,
            this.description,
            [...this.materials],
            { ...this.instructorDetails },
            this.schedule ? { ...this.schedule } : null,
            this.students ? this.students.map(student => ({ ...student })) : null,
            this.startDate,
            this.endDate
        );
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
