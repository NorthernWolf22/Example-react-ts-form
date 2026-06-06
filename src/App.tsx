import { useState } from "react";
// Using the type keyword indicates that this custom type is imported specifically for type checking purposes
import { type Student } from "./types/student-types.ts";

//components
import AddStudentForm from "./components/AddStudentForm.tsx";

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

  return (
    <div>
      <h1>Example react & typescript form</h1>
      {/* Pass addStudent function as prop */}
      <AddStudentForm addStudent={addStudent} />
    </div>
  )
}

export default App;