import './App.css';
import NavBar from '../NavBar/NavBar';
import { Component } from 'react';
import Notes from '../Notes/Notes'

class App extends Component {



  state = {
    notes: [
      {
        title: "React Class",
        content: "Today I learnt React"
      },

      {
        title: "Angular Class",
        content: "Today I learnt Angular"
      }
    ]
  };


  //   componentDidMount() {

  //     axios.get(`http://localhost:8080/api/notes`)
  //     .then(res => {

  //         const jsonString = JSON.stringify(res.data);

  //         const array = JSON.parse(jsonString);

  //         this.setState({
  //             receivedNotes: array
  //         })

  //         console.log(array);


  //     });




  // }


  render = () => {

    const numberOfNotes = this.state.notes.length;
    const { notes } = this.state;

    return (
      <div className="App">
        <NavBar
          noteCounter={numberOfNotes}
          addNote={this.addNote}
        />
        <Notes
          allNotes={notes}
          deleteNote={this.deleteNote}
          updateContent={ this.updateContentChange}
          updateTitle = { this.updateTitleChange }

        />
      </div>
    );

  };

  addNote = () => {

    const { notes } = this.state;
    let newNotes = Array.from(notes);

    newNotes.push({ title: 'Edit Me !', content: "Edit Me!" });

    this.setState({
      notes: newNotes
    });

  }


  deleteNote = index => {

    const { notes } = this.state;
    const newNotes = Array.from(notes);

    newNotes.splice(index, 1);

    this.setState({
      notes: newNotes
    });

  }

  updateContentChange = (index, event) => {

    const { target: {value }} = event;
    const { notes } = this.state;
    const newNotes = notes.slice();
    const noteToUpdate = newNotes[index];

    newNotes.splice(index, 1, {...noteToUpdate, content: value});

    this.setState({
      notes: newNotes
    })



  }


  updateTitleChange = (index, event) => {

    const { target: {value}} = event;
    const { notes } = this.state;
    const newNotes = notes.slice();
    const noteToUpdate = newNotes[index];

    newNotes.splice(index, 1, {...noteToUpdate, title: value});

    this.setState({
      notes: newNotes
    })
  }

}


export default App;
