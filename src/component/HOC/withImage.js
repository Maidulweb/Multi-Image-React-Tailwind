import React, { Component } from "react";

const withImage = (OrginalComponent) => {
  class NewInput extends Component {
    state = {
        result: '',
    }
    handleInput = (e) => {
        if (e.target.files && e.target.files[0]) {
          let reader = new FileReader();

          reader.onload = (e) => {
           this.setState({result:e.target.result})
          };

          reader.readAsDataURL(e.target.files[0]);
        }
    }
    removeInput = () => {
      this.setState({ result: '' });
    }
    render() {
      return (
        <>
          <OrginalComponent
            result={this.state.result}
            handleInput={this.handleInput}
            removeInput={this.removeInput}
          />
        </>
      );
    }
  }

  return NewInput;
};

export default withImage;