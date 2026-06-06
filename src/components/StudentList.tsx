import { type Student } from "../types/student-types";

//this defines the type alias of any props passed in to the student list component. The students prop is an array which can only contain Student type 
type StudentListProps = {
    students: Student[];
}

//this defines the students prop and declares it as type 'StudentListProps'
const StudentList = ({students} : StudentListProps) => {
    return ( 
        <ul>
            {
                students &&
                students.map((student) => (
                    <li key={student.id}>{`${student.firstName} ${student.lastName}, ${student.email}`}</li>
                ))
            }
        </ul>
    );
}
 
export default StudentList;