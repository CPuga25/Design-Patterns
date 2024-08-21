import { Course } from "./Course";
import { InstructorDetails } from "./InstructorDetails";
import { Student } from "./Student";
import { Schedule } from "./Schedule";

export class CourseBuilder {
    private name: string = '';
    private description: string = '';
    private materials: string[] = [];
    private instructorDetails: InstructorDetails = { name: '', email: '', experience: 0 };
    private schedule: Schedule | null = null;
    private students: Student[] | null = null;
    private startDate: Date | null = null;
    private endDate: Date | null = null;
    private customMethod:(cadena:string)=>void = (cadena:string) =>{}

    public setName(name:string):CourseBuilder{
        this.name = name;
        return this;
        
    }

    public setDescription(description: string): CourseBuilder {
        this.description = description;
        return this;
    }
 
    public setMaterials(materials: string[]): CourseBuilder {
        this.materials = materials;
        return this;
    }

    public setInstructor(instructor: InstructorDetails): CourseBuilder {
        this.instructorDetails = instructor;
        return this;
    }

    public setSchedule(schedule:Schedule){
        this.schedule = schedule;
        return this;
    }

    public setStudents(students:Student[]){
        this.students = students;
        return this;
    }

    public setStartDate(startDate:Date){
        this.startDate = startDate;
        return this;

    }
    public setEndDate(endDate:Date){
        this.endDate = endDate;
        return this;

    }

    public setCustomMethod(method:(cadena:string)=>void):CourseBuilder{
        this.customMethod = method;
        return this;
    }

    public fromPrototype(curso:Course):CourseBuilder{
        this.name = curso.getName;
        this.description = curso.getDescription;
        this.materials = [...curso.getMaterials];
        this.instructorDetails = {...curso.getInstructorDetails};
        this.schedule = curso.getSchedule? {...curso.getSchedule}:null;
        this.students = curso.getStudents? curso.getStudents.map(student => ({ ...student })):null;
        this.startDate = curso.getStartDate? new Date(curso.getStartDate.getTime()):null;
        this.endDate = curso.getEndDate? new Date(curso.getEndDate.getTime()):null;
        this.customMethod = curso.addExtraBehaviour;
        return this;

    }

    public buildCourse(): Course{
        const course = new Course(
            this.name,
            this.description,
            this.materials,
            this.instructorDetails,
            this.schedule,
            this.students,
            this.startDate,
            this.endDate
        );
        course.addExtraBehaviour= this.customMethod;
        return course;
    }

    public addStudent (student:Student):CourseBuilder{
      if(this.students){
        this.students.push(student);
      }
      return this;
    }
}