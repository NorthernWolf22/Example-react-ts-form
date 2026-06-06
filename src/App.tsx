import { useState } from "react";
// Using the type keyword indicates that this custom type is imported specifically for type checking purposes
import { type Student } from "./types/student-types.ts";

//components
import AddStudentForm from "./components/AddStudentForm.tsx";
import StudentList from "./components/StudentList.tsx";

function App() {
  //<Student[]> is a generic type, it indicates the type of state stored, in this case an array containing student objects
  const [students, setStudents] = useState<Student[]>([]);

  //student is the name of the functions parameter it states that it must be type Student
  //return type is :void meaning the function returns nothing
  const addStudent = ((student: Student): void => {
    setStudents((prevStudents) => {
      return [
        ...prevStudents,
        student
      ]
    });
  });


  const deleteStudent = ((student: Student): void => {
    setStudents((prevStudents) => {
      return prevStudents.filter(prevStudent => prevStudent.id !== student.id)  //check each item in the students array, if the items id does not match the parameters id then it is retained, the one that matches is discarded
    });
  });

  return (
    <div>
      <h1>Example react & typescript form</h1>
      {/* Pass addStudent function as prop */}
      <AddStudentForm addStudent={addStudent} />
      {/* Pass the students array as prop */}
      <StudentList students={students} deleteStudent={deleteStudent} />
    </div>
  )
}

export default App;