import StudentListItemComp from "../components/StudentListItemComp";
import { type Student } from "../types/student-types";

//this defines the type alias of any props passed in to the student list component. The students prop is an array which can only contain Student type 
type StudentListProps = {
    students: Student[];
    deleteStudent: (student: Student) => void;
}

//this defines the students prop and declares it as type 'StudentListProps'
const StudentList = ({students, deleteStudent} : StudentListProps) => {
    return ( 
        <section className="studentListModule">
            <div className="container">
                <div className="grid">
                    <div className="col-4 sm-col-12 lg-start-4 lg-col-6">
                        {
                            students &&
                            students.map((student) => (
                                <StudentListItemComp key={student.id} student={student} deleteStudent={deleteStudent} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default StudentList;