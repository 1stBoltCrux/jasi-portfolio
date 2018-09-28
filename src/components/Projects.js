import React, { Component } from 'react';
import styles from './projects.module.scss';
import Media from './Media'
import Masonry from 'react-masonry-component'

class Projects extends Component  {
  constructor(props){
    super(props)
  }
  render(){
    console.log(this.props);
    if (this.props.windowSize > 600) {
      return (
        <div className={styles.projectsContainer}>
          <div className={styles.masonryContainer}>
            <Masonry
              style={{margin: '0 auto'}}
              options={{fitWidth: 'true', columnWidth: 10}}>
              {this.props.appMediaArray.map(mediaItem =>
                <Media
                  title={mediaItem.title}
                  medium={mediaItem.medium}
                  url={mediaItem.url}
                />
              )}
            </Masonry>
          </div>
        </div>
      )
    } else {
      return(
        <div className={styles.projectsContainer}>
          <div className={styles.masonryContainer}>
            <div className={styles.mobileFlex}>
              {this.props.appMediaArray.map(mediaItem =>
                <Media
                  title={mediaItem.title}
                  medium={mediaItem.medium}
                  url={mediaItem.url}
                />
              )}
            </div>
          </div>
        </div>
      )
    }
  }
}

export default Projects;
