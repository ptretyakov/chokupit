// Core && libs
import {connect} from 'react-redux';
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';

// Constants
import {PRODUCTS_SHOW_ROUTE} from './products-show.constants';

// Actions
import * as headerActions from 'app/shared/header/header.actions';
import * as productsShowActions from './products-show.actions';

export class ProductsShowContainer extends Component {
  static path = PRODUCTS_SHOW_ROUTE

  constructor(options) {
    super(options);

    let id = +this.props.params.id || 0;
    let collection = this.props.products.collection || [];
    
    this.model = this.getProductModel(collection, id);
  }

  componentWillMount() {
    if(this.props.headerActions) {
      this.props.setHeaderButtons(null, null);
      this.props.headerActions.updateHeaderTitle(this.model.name || 'Product');
    }
  }

  render() {
    return(
      <div>
      </div>
    );
  }

  getProductModel(collection = [], id = 0) {
    let model = collection.find((element) => {
      return element.id === id;
    });

    return model ? model : {};
  }
}

function mapStateToProps(state) {
  return {
    app: state.app, 
    products: state.products,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    headerActions: bindActionCreators(headerActions, dispatch),
    productsShowActions: bindActionCreators(productsShowActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsShowContainer);