import React, { Component } from 'react';
import firebase from 'firebase'
import styles from './app.module.scss';
import Title from './components/Title';
import Nav from './components/Nav';
import Projects from './components/Projects';
import firebaseConfig from './firebaseConfig'

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const settings = {timestampsInSnapshots: true};
  db.settings(settings);
var test = db.collection('film')



class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      mediaArray: null
    }
  }

  componentDidMount(){
    let testMediaArray = [];
    test.get().then((doc) => {
      doc.docs.forEach((doc) => {
        testMediaArray.push(doc.data());
      })
      this.setState({
        mediaArray: testMediaArray
      })
    })
  }

  render() {
    if (this.state.mediaArray) {


    return (
      <div className={styles.appContainer}>
        <div className={styles.titleNavContainer}>
          <Title/>
          <Nav/>
        </div>
        <div className={styles.projectsWrapper}>
          <Projects
            appMediaArray={this.state.mediaArray}
          />
        </div>
      </div>
    );
  } else {
    return (
      <p>loading...</p>
    )
  }
  }
}

export default App;
