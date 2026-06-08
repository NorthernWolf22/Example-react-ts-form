//types
import { type Student } from "../types/student-types";
import ButtonComp from "./ButtonComp";

type StudentListItemCompProps = {
    student: Student;
    deleteStudent: (student: Student) => void;
}

const StudentListItemComp = ({student, deleteStudent}: StudentListItemCompProps) => {
    return (
        <div className="studentListItemComp">
            <div className="body">{`${student.firstName} ${student.lastName}, ${student.email}`}</div>
            <ButtonComp type="button" variant="secondary" title="Delete" onClick={() => deleteStudent(student)} />
        </div>
    );
}

export default StudentListItemComp;