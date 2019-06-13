import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ConfirmForm extends Component {
    render() {
        //Render nothing if the "show" prop is false
        if(!this.props.show){
            return null
        }

        //the gray background
        const backdropStyle={
            position:'fixed',
            top:0,
            bottom:0,
            left:0,
            right:0,
            backgroundColor:'rgba(0,0,0,0.3)',
            padding:50,
            
        }
        const modalStyle={
            backgroundColor: '#fff',
            borderRadius: 5,
            height:300,
            width:500,
            maxWidth: 500,
            maxHeight: 300,
            margin: '0 auto',
            padding: 50
        }
        return (
            <dialog  open={this.props.show} className="backdrop" style={{backdropStyle}}>
            <div className="modal" style={{modalStyle}}>
              {this.props.children}
    
              <div>
                <button onClick={this.props.onClose}>
                  Close
                </button>
              </div>
            </div>
          </dialog>
        );
    }
}
ConfirmForm.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node
  };
export default ConfirmForm;