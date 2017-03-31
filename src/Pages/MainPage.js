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
      <div
        className="gray-bg"
      >
        <div className="row wrapper border-bottom white-bg page-heading">
          <div className="col-lg-10">
            <h2>
              Vocabulary List
            </h2>
            <ol className="breadcrumb">
              <li>GRE</li>
            </ol>
          </div>
        </div>
        <div className="wrapper wrapper-content animated fadeInRight">
          <div className="row m-b-lg m-t-lg">
            <div className="col-md-6">
              GRE Full Vocabulary
            </div>
            <div className="col-md-3">
            </div>
            <div className="col-md-3">
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
