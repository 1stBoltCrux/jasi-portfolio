import React, { Component } from 'react';
import styles from './media.module.scss';
import DetailModal from './DetailModal'

class Media extends Component {
  constructor(props){
    super(props)
    this.state = {
      modal: false
    }
  }

  handleModal = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

  render(){
    let modal;

    if (this.state.modal) {
      modal =  <DetailModal url={this.props.url}/>
    }

    return (
      <div onClick={()=> this.handleModal()} className={styles.mediaContainer}>
        <div className={styles.imageMedia}>
          <img src={this.props.url}/>
        </div>
        {modal}
      </div>
    )

  }
}

export default Media;
