import React, { Component } from 'react';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FloatingActionButton from 'material-ui/FloatingActionButton';

// CSS
import './float-add-button.component.css';

class FloatAddButton extends Component {
  render() {
    return(
      <div className="float-button">
          <FloatingActionButton
            // mini={true}
            onTouchTap={() => {this.props.handleClickAction()}}
            secondary={true}
            className="animated zoomIn"
          >
            <ContentAdd className="animated rotateIn" />
          </FloatingActionButton>
        </div>
    );
  }
}

export default FloatAddButton;