import React from "react";
import Auth from "../Auth";
import Fade from 'react-reveal/Fade';
import "./Modal.css";
class LogModal extends React.Component {
    state = { show: false }
  
    showModal = () => {
      this.setState({ show: true });
    }
    
    hideModal = () => {
      this.setState({ show: false });
    }
      
    render() {
      return (
        <main>
          <Modal  show={this.state.show}
                  handleClose={this.hideModal} >
            <Auth username={this.props.username}
                  loggedIn={this.props.loggedIn}
                  updateUser={this.props.updateUser}
                  hideModal={this.hideModal} />
          </Modal>
          <Fade right>
            <button className="log-in"
                    type='button'
                    onClick={this.showModal}>LOG IN
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
        <Fade up>
        <section className='modal-main'>
          {children}
          <button className="close-bttn"
            onClick={handleClose}
          >
            CLOSE
          </button>
        </section>
        </Fade>
      </div>
    );
  };

  export default LogModal;