import { type Student } from "../types/student-types";

//this defines the type alias of any props passed in to the student list component. The students prop is an array which can only contain Student type 
type StudentListProps = {
    students: Student[];
    deleteStudent: (student: Student) => void;
}

//this defines the students prop and declares it as type 'StudentListProps'
const StudentList = ({students, deleteStudent} : StudentListProps) => {
    return ( 
        <div>
            {
                students &&
                students.map((student) => (
                    <div key={student.id}>
                        {`${student.firstName} ${student.lastName}, ${student.email}`}
                        <button type="button" onClick={(e) => deleteStudent(student)}>Delete</button>
                    </div>
                ))
            }
        </div>
    );
}
 
export default StudentList;