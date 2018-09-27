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
      bottom: ''
    }
  }

  componentDidMount(){
    // setTimeout(()=> {
    //   console.log(this.state.imageSize.offsetWidth);
    // }, 2000)
    }

    componentDidUpdate(){
      // console.log(this.state.imageSize.offsetWidth);
    }

  handleModal = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

  render(){
    let display =  'none'
    if (this.state.height) {
      display =  'block'
    }
    let modal;

    if (this.state.modal) {
      modal =  <DetailModal url={this.props.url}/>
    }

    return (
      <div onClick={()=> this.handleModal()} className={styles.mediaContainer}>
        <div className={styles.imageMedia}>
          <img
            onMouseEnter={()=> this.setState({
            width: this.state.image.offsetWidth,
            height: this.state.image.offsetHeight,
            bottom: this.state.image.offsetHeight
          })} ref={(ref) => this.state.image = ref} src={this.props.url}/>
        </div>
        {modal}
        <div onMouseLeave={()=> this.setState({
          width: '',
          height: '',
          bottom: ''
        })} style={{width: this.state.width, height: this.state.height, bottom: this.state.bottom + 5, display: display}} className={styles.hoveredLayer}>
        </div>
      </div>
    )

  }
}

export default Media;
