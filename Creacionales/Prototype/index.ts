
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
.setDescription('Template para cursos avanzados')
.setMaterials(['dd','dd','dd','dd'])
.setSchedule({days:['Lunes'], time: 'de 8 am a 5 pm'})
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


const cursoAvanzadoBD = new CourseBuilder()
.fromPrototype(advancedCourse.clone())
.setName('Curso especializado de Base de datos')
.setInstructor({name: 'fernando',email: 'de',experience: 10})
.setSchedule({days:['Martes'], time:'De 9 am a 11 am'})
.buildCourse()

const cursoAvanzadoApis = new CourseBuilder()
.fromPrototype(advancedCourse.clone())
.setName('Curso especializado de Apis')
.setInstructor({name: 'cualquiera',email: 'de',experience: 10})
.setSchedule({days:['Martes'], time:'De 11 am a 01 pm'})
.buildCourse()
console.log('imprimiendo clon para BD');
cursoAvanzadoBD.displayCourseInfo();
console.log('*****************************************');
console.log('imprimiendo clon para Apis');
cursoAvanzadoApis.displayCourseInfo();