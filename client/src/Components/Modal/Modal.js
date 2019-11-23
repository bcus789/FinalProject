
import React, {Component} from "react";
import Auth from "../Auth";
import Fade from 'react-reveal/Fade';
import "./Modal.css";

class LogModal extends Component {
    
    state = { 
      show: false,
      btnMsg: 'LOG-IN',
      loggedIn: false,
      token: null
    }
  
    componentDidMount() {
      if (this.props.token) {
        this.setState({token: this.props.token, loggedIn: true})
      }
    }

    showModal = () => {
      this.setState({ show: true });
    }
    
    hideModal = () => {
      this.setState({ show: false });
    }
      
    render() {
      
      if (this.state.loggedIn) {
        this.setState({btnMsg: 'LOG OUT'});
      }
      
      return (
        <main>
          <Modal show={this.state.show} handleClose={this.hideModal} >
            <Auth />
          </Modal>
          <Fade right>
            <button className="log-in" type='button' onClick={this.showModal}>
              {this.state.btnMsg}
            </button>
          </Fade>
        </main>
      )
    }
  }
  
  const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  
    return (
      <div className={showHideClassName}>
        <section className='modal-main'>
          {children}
          <button className="close-bttn"
            onClick={handleClose}
          >
            CLOSE
          </button>
        </section>
      </div>
    );
  };

  export default LogModal;