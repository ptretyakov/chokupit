import {connect} from 'react-redux';
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';

// Components
import TextFieldComponent from 'app/shared/form/text-field.component';
import SelectFieldComponent from 'app/shared/form/select-field/select-field.component';
import HeaderFlatButtonComponent from 'app/shared/buttons/header-flat-button.component';

// Actions
import * as appActions from 'app/app.actions';
import * as headerActions from 'app/shared/header/header.actions';
import * as productsActions from '../products.actions';

// Constants
import {
  PRODUCTS_ADD_TITLE,
  PRODUCTS_ADD_BUTTON_LABEL,
  PRODUCTS_ADD_CATEGORIES_LABEL,
  PRODUCTS_ADD_CATEGORIES_FLOAT_LEBEL,
} from './products-add.constants';

// CSS
import './products-add.container.css';

export class ProductsAddContainer extends Component {
  static path = '/products/add'

  componentWillMount() {
    if(this.props.headerActions) {
      this.props.headerActions.updateHeaderTitle(PRODUCTS_ADD_TITLE);
    }
  }

  componentDidMount() {
    if(this.props.setHeaderButtons) {
      this.props.setHeaderButtons(
        null,
        <HeaderFlatButtonComponent
          label={PRODUCTS_ADD_BUTTON_LABEL}
          handleClick={::this.handleClickSaveButton}
        />
      );
    }
  }

  render() {

    let categoriesCollection = this.props.categories.collection || [];

    return (
      <div id="products-add-wrapper">
        
        {/* Поля ввода наименования товара */}
        <TextFieldComponent
          ref={ ref => { this.nameTextField = ref; }}
          name="name"
          required={true}
          hintText="Наименование"
          fullWidth={true}
          errorValue="Это поле не может быть пустым"
        />

        {/* Поле для выбора категории товара */}
        <SelectFieldComponent
          ref={ ref => { this.selectCategoriesField = ref; }}
          hintText={PRODUCTS_ADD_CATEGORIES_LABEL}
          collection={categoriesCollection}
          floatingLabelText={PRODUCTS_ADD_CATEGORIES_FLOAT_LEBEL}
        />
      </div>
    );
  }

  handleClickSaveButton() {
    if(this.nameTextField.validate()) {
      let name = this.nameTextField.getValue();
      let categories = this.selectCategoriesField.getValues();

      this.props.productsActions.addProduct({ name, categories });
      this.props.appActions.routeToBack();
    }
  }
}

function mapStateToProps(state) {
  return {
    app: state.app,
    products: state.products,
    categories: state.categories,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    appActions: bindActionCreators(appActions, dispatch),
    headerActions: bindActionCreators(headerActions, dispatch),
    productsActions: bindActionCreators(productsActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsAddContainer);