import React, {Component} from 'react';

// Material-ui component
import { List, ListItem } from 'material-ui';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

// Style
import './products-list.component.css';

export class ProductsListComponent extends Component {
  render() {
    let products = this.props.products || [];
    let preparedList = products.map((product, index) => {
      return (
        <ListItem
          key={product.id || index}
          primaryText={product.name}
          leftCheckbox={<Checkbox />}
          rightIconButton={<IconButton><StarBorder /></IconButton>}
        />
      );
    });

    return(
      <div>
        <List className="materialui-list-wrapper">
          {preparedList}
        </List>
      </div>
    );
  }
}

export default ProductsListComponent;