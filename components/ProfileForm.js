import React from 'react';
import {View, Text} from 'react-native';

import FormComponent from './FormComponent.js';

export default class ProfileForm extends React.Component {
  render() {
    return(
      <View>
        <FormComponent
          type="text-input"
          formLabel="Name"
          placeholder={this.props.inputOnePlaceholder}
          updateFunction={this.props.inputOneUpdate}
          />

        <FormComponent
          type="text-input"
          formLabel="Address"
          placeholder={this.props.inputTwoPlaceholder}
          updateFunction={this.props.inputTwoUpdate}
          />
      </View>
    );
  }
}
