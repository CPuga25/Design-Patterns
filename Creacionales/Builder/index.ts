
import { Course } from './Course';
import { CourseBuilder } from './CourseBuilder';


const basicCourse = new CourseBuilder().setName('Introducción a TS').setInstructor({name:'Alice', email:'de@gmail.com',experience: 5})
.buildCourse();

// console.log('Curso 1:');
// basicCourse.displayCourseInfo();
// console.log('*****************************************');

// // Creación de un curso completo con todos los detalles
// const advancedCourse = new Course(
//     'TypeScript Avanzado',
//     'Un curso avanzado sobre TypeScript',
//     ['Libro', 'Videos', 'Proyectos'],
//     { name: 'Bob', email: 'bob@example.com', experience: 10 },
//     { days: ['Lunes', 'Miércoles'], time: '10:00 - 12:00' },
//     [
//         { name: 'Kevin', email: 'Kevin@example.com' },
//         { name: 'Victor', email: 'Victor@example.com' },
//         { name: 'Camila', email: 'Camila@example.com' },
//         { name: 'Jose', email: 'Jose@example.com' },
//         { name: 'Amairani', email: 'Amairani@example.com' },
//     ],
//     new Date(2024, 8, 1),
//     new Date(2024, 11, 30)
// );

const advancedCourse = new CourseBuilder()
.setName("TS avanzado")
.setDescription('xx')
.setMaterials(['dd','dd','dd'])
.setInstructor({name: '',email: 'de',experience: 10})
.setStudents([
    { name: 'Kevin', email: 'Kevin@example.com' },        { name: 'Victor', email: 'Victor@example.com' },
    { name: 'Camila', email: 'Camila@example.com' },
    { name: 'Jose', email: 'Jose@example.com' },
    { name: 'Amairani', email: 'Amairani@example.com' },
])
.buildCourse();

console.log('Curso 2:');
advancedCourse.displayCourseInfo();
console.log('*****************************************');