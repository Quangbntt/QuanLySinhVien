import React from 'react';

class TaskForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            gender: true,
            major:'',         
            address :''
        }
    }


    onChange = (event) => { /** ham onChange luon tra ve 1 target  */

        var name = event.target.name;
        var value = event.target.value;

        if (name === "gender") { /* Nếu name của input là "true hoặc false" kiểu chuỗi thì gán lại lại bằng kiểu boolen*/
            value = event.target.value === "true" ? true : false;
        }
        this.setState({
            [name]: value
        })

    }
    onSubmit = (event) => {
        event.preventDefault();

        var input = document.getElementById('ten');
        if (input.value == '') {
            input.style.border = 'solid 3px red';

        }
        else {
            this.props.onSubmit(this.state);
        }

    }
    onCancel = () => {
        document.getElementById('ten').value = "";

        this.setState({
            name: '',
            status: false
        })
    }
    render() {
        return (
            <div className="card">
                <div className="card-header">Thêm Sinh Viên <span onClick={this.props.onhideDisplay}><i class="fas fa-times"></i></span></div>
                <form onSubmit={this.onSubmit} >
                    <div className="card-body">
                        <div className="form-group">
                            <label htmlFor>Họ Tên</label>
                            <input type="text" id="ten" className="form-control" name="name" onChange={this.onChange} />
                            <label htmlFor>Giới Tính</label>
                            <select className="form-control" name="gender" value={this.state.gender} onChange={this.onChange} >
                                <option value={true}>Nam</option>
                                <option value={false}>Nữ</option>
                            </select>
                           
                            <label htmlFor>Ngành Học</label>
                            <input type="text" id="ten" className="form-control" name="major" onChange={this.onChange} />
                            <label htmlFor>Địa Chỉ</label>
                            <input type="text" id="ten" className="form-control" name="address" onChange={this.onChange} />
                        </div>

                    </div>
                    <div className="card-footer">
                        <div className="form-group">
                            
                        </div>
                        <p><input type="submit" className="btn btn-primary" value="Thêm" />
                            <button className="btn btn-danger" onClick={this.props.onhideDisplay}>Hủy Bỏ</button>
                        </p>
                    </div>
                </form>
            </div>

        )
    }
}

export default TaskForm;