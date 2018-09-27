import React, { Component } from 'react';
import styles from './media.module.scss';
import DetailModal from './DetailModal'

class Media extends Component {
  constructor(props){
    super(props)
    this.state = {
      modal: false,
      image: React.createRef(),
      width: '',
      height: '',
      bottom: '',
      hoveredLayer: 'none'
    }
  }

  componentDidMount(){

    }

    handleImageSize = () => {
      this.setState({
        width: this.state.image.offsetWidth,
        height: this.state.image.offsetHeight,
        bottom: this.state.image.offsetHeight
      })
    }

  handleModal = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

  handleMouseEnter = () => {
    console.log(this.state.height);

  }

  render(){
    let modal;

    if (this.state.modal) {
      modal =  <DetailModal url={this.props.url}/>
    }

    return (
      <div onClick={()=> this.handleModal()} className={styles.mediaContainer}>
        {modal}
        <div className={styles.imageMedia}>
          <img
              onLoad={()=> this.handleImageSize()}
             ref={(ref) => this.state.image = ref} src={this.props.url}/>
        </div>
        <div onMouseEnter={()=> this.handleMouseEnter()} style={{width: this.state.width, height: this.state.height, bottom: this.state.bottom + 4}} className={styles.hoveredLayer}>
          <p>Click to Open the image bitch</p>
        </div>
      </div>
    )

  }
}

export default Media;
