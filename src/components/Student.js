import React from 'react';

class Student extends React.Component{
    render(){
        return(
            <div>
                 <StudentProfile id={this.props.id}
                                name ={this.props.name}
                                image = {this.props.image}/>
                 <StudentInfo student_number={this.props.student_number}
                              major ={this.props.major}
                              gpa={this.props.gpa}/>
            </div>
        );
    }
}
class StudentProfile extends React.Component{
    render(){
        return(
            <div>
                <img src={this.props.image} alt ="profile"/>
                <h2>{this.props.name}</h2>

            </div>
        )
    }
}
class StudentInfo extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.student_number}</p>
                <p>{this.props.major}</p>
                <p>{this.props.gpa}</p>
            </div>
        )
    }
}
export default Student;