// Core && libs
import React from 'react';
import {mount, shallow} from 'enzyme';

// Material-ui components
import SelectField from 'material-ui/SelectField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin'; 

// Component
import SelectFieldComponent from './select-field.component';

injectTapEventPlugin();

describe('>>> Компонента SelectFieldComponent', () => {
  let wrapper;

  const PROPS = {
    collection: [
      {
        id: 1,
        name: 'Name',
      },
    ],
  }

  it('+++ должен быть определен', () => {
    expect(SelectFieldComponent).toBeDefined();
  });

  describe('>>> Полное (mount) монтирование', () => {

    beforeEach(() => {
      wrapper = mount(
        <MuiThemeProvider>
          <SelectFieldComponent {...PROPS} />
        </MuiThemeProvider>
      );
    });

    it('+++ должен быть срендерен', () => {
      expect(wrapper).toBeDefined();
    });

    describe('>>> дочерний SelectField компонент', () => {
      let selectField;

      beforeEach(() => {
        selectField = wrapper.find(SelectField);
      });

      it('+++ должен быть в компоненте', () => {
        expect(selectField.length).toEqual(1);
      });
    });

  });

  describe('>>> Частичное (shallow) монтирование ', () => {
    const wrapper = shallow(<SelectFieldComponent {...PROPS} />);
    const methods = wrapper.instance();

    it('+++ должен срендериться', () => {
      expect(wrapper).toBeDefined();
    });

    describe('>>> метод getListItems', () => {
      let getListItems;

      const expectedCollection = PROPS.collection;

      beforeEach(() => {
        getListItems = methods.getListItems.bind(methods);
      });

      it('+++ должен быть определен', () => {
        expect(getListItems).toBeDefined();
      });

      it('+++ должен вернуть массив', () => {
        let result = getListItems();
        expect(Array.isArray(result)).toBeTruthy();
      });

      it('+++ принимать на вход массив и возвращать столько же мерный', () => {
        let result = getListItems(expectedCollection);
        expect(result.length).toEqual(1);
      });
    });

    describe('>>> метод handleChange', () => {
      let handleChange;

      beforeEach(() => {
        handleChange = methods.handleChange;
      });

      it('+++ метод должен быть определен', () => {
        expect(handleChange).toBeDefined();
      });
    });

    describe('>>> метод getValues должен...', () => {
      const getValues = methods.getValues.bind(methods);

      it('+++ быть определен', () => {
        expect(getValues).toBeDefined();
      });

      it('+++ быть функцией', () => {
        expect(typeof getValues).toEqual('function');
      });

      it('+++ должен вернуть массив', () => {
        expect(Array.isArray(getValues())).toBeTruthy();
      })
    });

  });
})