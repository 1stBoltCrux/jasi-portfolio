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
      chosenGallery: 'film',
      windowSize: window.innerWidth
    }
  }


    componentDidMount(){
      this.chooseGallery()
      window.addEventListener('resize', this.handleSize)
    }

    componentWillUnmount(){
      window.removeEventListener('resize', this.handleSize)
    }

  handleSize = () => {
    console.log(window.innerWidth);
    this.setState({
      windowSize: window.innerWidth
    })
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
    if (this.state.mediaArray && this.state.windowSize > 600) {

    return (
      <div className={styles.appContainer}>
        <div  className={styles.appMainContent}>
          <div className={styles.titleNavContainer}>
            <Title windowSize={this.state.windowSize}/>
            <div style={{marginBottom: 40}}>
              <Nav
                onHandleSelect={this.handleSelect}
              />
            </div>
            <Social/>
          </div>
          <div className={styles.projectsWrapper}>
            <Projects
              appMediaArray={this.state.mediaArray}
            />
          </div>
        </div>
      </div>
    );
  } else if (this.state.windowSize <= 600 && this.state.mediaArray) {
    return (
      <div className={styles.appContainer}>
        <div className={styles.mobileNavTitleContainer}>
          <Title/>
          <Nav onHandleSelect={this.handleSelect}/>
        </div>
        <div  className={styles.appMainContent}>
          <div className={styles.projectsWrapper}>
              <Projects
                windowSize={this.state.windowSize}
                appMediaArray={this.state.mediaArray}
              />
          </div>

        </div>
      <Social
        windowSize={{justifyContent: 'center'}}
      />
      </div>
    )
  } else if (!this.state.mediaArray){
    return (
      <p>loading...</p>
    )
  }
  }
}

export default App;
