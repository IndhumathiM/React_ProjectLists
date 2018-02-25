import React, { Component } from 'react';
import Projects from './Components/Projects';
import uuid from 'uuid';
import AddProject from './Components/AddProject';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      projects:{}
    }
  }
  componentWillMount(){
    this.setState({projects:[
      {
        'id':uuid.v4(),
        'title': 'Design',
        'category':'UI'
      },
      {
        'id':uuid.v4(),
        'title': 'Coding',
        'category':'Dev'
      },{
        'id':uuid.v4(),
        'title': 'Test',
        'category':'Prod'
      }
    ]});
  }
  handleAddProject(project){
    //console.log(project);
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }
handleDeleteProject(id){
  console.log(id);
  let projects = this.state.projects;
   let index =projects.findIndex(x => x.id === id)
   projects.splice(index,1);
   this.setState({projects:projects});

}

  render() {
    return (
      <div className="App">
      <h1>My App</h1>
      <AddProject addProject={this.handleAddProject.bind(this)}/>
      <Projects projects={this.state.projects}  onDelete={this.handleDeleteProject.bind(this)}/>
      </div>
    );
  }
}

export default App;
