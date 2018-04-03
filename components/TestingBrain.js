import React from 'react';
import { Text, View} from 'react-native';

import ProfileForm from './ProfileForm.js';

export default class TestingBrain extends React.Component {
  constructor(props){
    super (props);
    this.state = {
      inputOne: "Name",
      inputTwo: "Address",
    };
  }

  updateInputOne(text) {
    this.setState(
      {
        inputOne: text,
      }
    );
  }

  updateInputTwo(text) {
    this.setState(
      {
        inputTwo: text,
      }
    );
  }

  render() {
    return(
      <View>
        <Text>{this.state.inputOne}</Text>
        <Text>{this.state.inputTwo}</Text>
        <ProfileForm
          inputOne={this.state.inputOne}
          inputOnePlaceholder="Enter name"
          inputOneUpdate={this.updateInputOne.bind(this)}
          inputTwo={this.state.inputTwo}
          inputTwoPlaceholder="Enter address"
          inputTwoUpdate={this.updateInputTwo.bind(this)}
          />
      </View>

    );
  }
}
