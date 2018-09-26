import React from 'react';
import styles from './projects.module.scss';
import Media from './Media'
import Masonry from 'react-masonry-component'



const Projects = (props) => {
  console.log(props);
  return (
    <div className={styles.projectsContainer}>
      <div className={styles.masonryContainer}>
        <Masonry>
          {props.appMediaArray.map(mediaItem =>
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
}

export default Projects;
