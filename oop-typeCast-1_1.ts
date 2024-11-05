import IStudent from "./interfaces/IStudent";

const processStudent = (student: IStudent) => {
    console.log(`Processing ${student.name} ...`);
}

const student_1 = {
    name: 'Glecio',
    age: 31,
} as IStudent;

processStudent(student_1);

const student_2 = {
    age: 44
} as IStudent

processStudent(student_2)

//? Im zweiten Fall wurde 'Processing undefined ...' angezeigt.