import React, {Component} from 'react';

// Material-ui components
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';

class LeftMenuComponent extends Component {
  render() {
    let title = this.props.title || 'Menu title';

    return(
      <Drawer
        open={this.props.isOpen}
        docked={false}
        onRequestChange={this.props.handleSwitch}
      >
        <AppBar title={ title } showMenuIconButton={false} />
      </Drawer>
    )
  }

  handleClickMenuItem(itemData) {
    itemData.routeDispatch();
    this.props.handleSwitch();
  }
}

export default LeftMenuComponent;