import React from 'react';
class TaskItem extends React.Component {

   
    onDelete = () => {
        this.props.onDelete(this.props.student.id)

    }
    render() {
        var students = this.props.students;
        var index = this.props.index;
        return (
            <tr>
                <td scope="row">{index + 1}</td>
                <td>{students.name}</td>
                <td>
                    <span className={students.gender ? 'badge badge-success' : 'badge badge-danger'} >
                        {students.gender ? 'Nam' : 'Nữ'}
                    </span>

                </td>
                <td>{students.major}</td>
                <td>{students.address}</td>
                <td>
                    <button type="button" class="btn btn-warning"><i class="fas fa-pencil-alt"></i> Sửa</button>
                    <button type="button" class="btn btn-warning ml-5" onClick={this.onDelete}><i class="fas fa-trash-alt"></i> Xóa</button>
                </td>
            </tr>

        )
    }
}

export default TaskItem;