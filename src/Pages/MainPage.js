import React from 'react';
import firebase from '../firebase';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      snapshot: {},
    }

    this.firebase = firebase.database().ref();

    this.firebase.on('value', snapshot => {
      console.log('value changed');
      console.log(snapshot.val());
      const store = snapshot.val();

      this.setState({
        snapshot: store,
      })
    });
  }

  render() {
    console.log(this.state.snapshot);
    return (
      <div>
        Main Page
      </div>
    );
  }
}

export default MainPage;
