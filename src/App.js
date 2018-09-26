import React, { Component } from 'react';
import firebase from 'firebase'
import styles from './app.module.scss';
import Title from './components/Title';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Social from './components/Social'
import firebaseConfig from './firebaseConfig'

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const settings = {timestampsInSnapshots: true};
  db.settings(settings);





class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      mediaArray: null,
      chosenGallery: 'paintings'
    }
  }

  handleSelect = (selected) => {
    console.log(selected);
    this.setState({
      chosenGallery: selected
    })
    setTimeout(()=>{
      this.chooseGallery()
    }, 10)
  }

  componentDidMount(){
    this.chooseGallery()
  }

  chooseGallery = () => {
    let test = db.collection(this.state.chosenGallery)
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
        <Social></Social>
        <div  className={styles.appMainContent}>
          <div className={styles.titleNavContainer}>
            <Title/>
            <Nav
              onHandleSelect={this.handleSelect}
            />
          </div>
          <div className={styles.projectsWrapper}>
            <Projects
              appMediaArray={this.state.mediaArray}
            />
          </div>
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
