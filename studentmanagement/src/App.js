
import './App.css';
import { Component } from 'react';
import FormControl from './components/management'
import TaskList from './components/taskList'
import TaskForm from './components/taskForm'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [

      ],
      isdisplayForm: false

    }
  }

  onGenerateData=() =>{
    var students = [
      {
        id  : this.generateID,
        name :'Tô Anh Quân' ,
        gender : true , 
        major :'Information Technology',
        address :'Ha noi'
      } ,
      {
        id  : this.generateID,
        name : 'Đoàn Tuấn Anh' ,
        gender : true , 
        major :'Information Technology',
        address :'Thai Binh'
      } 
   
    ] 
    /*Tạo 1 Mảng gồm các sinh vien khác nhau */
    /*setSate cho cái state khởi tạo bên trên */
    var a = localStorage.getItem('students');
    var b = JSON.parse(a) ;
  
    if (b) { /*kiem tra b co khac null hay ko ? neu khac null */
      this.setState({
        students: b /*this.state.students = b , b la 1 mang gom 5 object(trong local)  */
      })
    }
    else {
      this.setState({
        students: students /*this.state.students = var students */
      })
      localStorage.setItem('students', JSON.stringify(students)); /* setItem (key ,value)*/
    }
    console.log(this.state.students)
  }

  componentDidMount() {
    if (localStorage && localStorage.getItem("students")) {
      var students = JSON.parse(localStorage.getItem("students"))
      this.setState({
        students: students
      })
    }

  }
  generateID(){
    return Math.random(100);
  }
  onshowDisplay=()=>{
    this.setState({
      isdisplayForm:true
    })
  }
  onhideDisplay=()=>{
    this.setState({
      isdisplayForm:false
    })
  }

  onSubmit =(data) =>{
    var students = this.state.students;
    students.push(data);
    this.setState({
      students : students
    })
    localStorage.setItem('students',JSON.stringify(students))
    this.onhideDisplay();
  }
  findIndex=(id)=>{
    var students = this.state.students;
    var result = -1;
    students.forEach((student, index) => {
      if (student.id === id) {
        result = index;
      }
    })
    return result
  }
  onDelete=(id)=>{
    var check = window.confirm("Xác Nhận Xóa ?");
    if( check === true){
      var students = this.state.students;
      var index = this.findIndex(id);
  
      if (index !== -1) {
        students.splice(index,1) ;
        this.setState({
          students: students
        })
        localStorage.setItem('students', JSON.stringify(students))
      }
    }
    else{
      
    }
  }
  render(){
    var students = this.state.students;
    var display = this.state.isdisplayForm ? <TaskForm onSubmit={this.onSubmit} onhideDisplay={this.onhideDisplay} ></TaskForm> : '';
    return(
      <div>
        <div className="container-fluid">
          <h1>Quản Lý Sinh Viên</h1>
          <hr/>
        
            <div class="row">
              <div className={this.state.isdisplayForm ? "col-lg-3 col-md-3 col-sm-3 col-xs-3 col-12 taskform" : "col-lg-0 col-md-0 col-sm-0 col-xs-0 col-0 taskform"} >
                {display}
              </div>
              <div className={this.state.isdisplayForm ? "col-lg-9 col-md-9 col-sm-9 col-xs-9 col-12 managerment" : "col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 managerment"} >
                <button type="button" className="btn btn-primary" onClick={this.onshowDisplay}><i className="fas fa-plus" /> Thêm Sinh Viên</button>
                <button type="button" className="btn btn-danger ml-5" onClick={this.onGenerateData}><i className="pe-7s-menu" /> Hiển Thị Tất Cả Sinh Viên</button>
                <FormControl></FormControl>
                <div class="row">
                  <TaskList
                    students={students}
                    onDelete={this.onDelete}
                  >
  
                  </TaskList> {/*truyền prop cho thằng con , với giá trị của props là các giá trị của state*/}
                </div>
              </div>
  
            </div>
          </div>
        </div>
     
    )
  }
}

export default App;
