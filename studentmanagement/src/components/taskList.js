import React from 'react';
import TaskItem from './taskItem'

class TaskList extends React.Component {
    render() {
        var students = this.props.students;
        var elmStudents = students.map((student, index) => {
            /*lap qua moi phan tu cua task*/
            return <TaskItem
                key={student.id}
                index={index}
                students={student}
                onDelete={this.props.onDelete}
            >
            </TaskItem> /*truyn cho tk con taskitem 1 prop task , 1 prop index  */
        })
        return (
            <div className="col-lg-12">


                <table class="table">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Họ Tên</th>
                            <th>Giới Tính</th>
                            <th>Ngành Học</th>
                            <th>Địa Chỉ</th>
                        </tr>
                    </thead>
                    <tbody>
                       {elmStudents}
                        
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TaskList;