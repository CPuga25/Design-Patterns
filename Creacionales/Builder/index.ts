
import { Course } from './Course';
import { CourseBuilder } from './CourseBuilder';


const basicCourse = new CourseBuilder().setName('Introducción a TS').setInstructor({name:'Alice', email:'de@gmail.com',experience: 5})
.setCustomMethod((message:string)=>{console.log('Se agregó funcionalidad extra ' + message)})
.buildCourse();

 console.log('Curso 1:');
 basicCourse.displayCourseInfo();
 console.log('*****************************************');
 basicCourse.addExtraBehaviour('Este curso es sabatino');
 
const advancedCourse = new CourseBuilder()
.setName("TS avanzado")
.setDescription('xx')
.setMaterials(['dd','dd','dd'])
.setInstructor({name: '',email: 'de',experience: 10})
.setStudents([
    { name: 'Kevin', email: 'Kevin@example.com' },       
     { name: 'Victor', email: 'Victor@example.com' },
    { name: 'Camila', email: 'Camila@example.com' },
    { name: 'Jose', email: 'Jose@example.com' },
    { name: 'Amairani', email: 'Amairani@example.com' },
])
.buildCourse();

console.log('Curso 2:');
advancedCourse.displayCourseInfo();
console.log('*****************************************');

const advancedcourse2 = new CourseBuilder()
.setName("TS avanzado")
.setDescription('xx')
.setMaterials(['dd','dd','dd'])
.setInstructor({name: '',email: 'de',experience: 10})
.setStudents([
    { name: 'Kevin', email: 'Kevin@example.com' },       
     { name: 'Victor', email: 'Victor@example.com' },
    { name: 'Camila', email: 'Camila@example.com' },
    { name: 'Jose', email: 'Jose@example.com' },
    { name: 'Amairani', email: 'Amairani@example.com' },
])
.addStudent({ name: 'Ricardo', email: 'Ricardo@example.com' })
.buildCourse();

console.log('Curso 3:');
advancedcourse2.displayCourseInfo();
console.log('*****************************************');