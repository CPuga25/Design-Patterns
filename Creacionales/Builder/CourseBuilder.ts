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
        return course;
    }

    
}