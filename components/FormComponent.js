import React from 'react';
import {View, Text, TextInput, StyleSheet, Alert } from 'react-native';

export default class FormComponent extends React.Component {
  updateParentText(text, parentFunction) {
    parentFunction(text);
  }

  render() {
    if (this.props.type === "text-input") {
      return(
        <View>
          <View style={styles.single_row}>
            <Text style={styles.text_input_label}>
              {this.props.formLabel}
            </Text>
          </View>
          <View style={styles.single_row}>
            <TextInput
              style={styles.text_input}
              onChangeText={(text) => this.updateParentText(text, this.props.updateFunction)}
              placeholder={this.props.placeholder ? this.props.placeholder: "placeholder" }
              value={this.props.value ? this.props.value : null}>
            </TextInput>
          </View>
        </View>
      );
    } else {
      return(
        <View>
          <Text>
            Something went wrong, did you pass a type as a prop?
          </Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  text_input: {
    flex: 1,
    paddingLeft: 10,
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 4,
    height: 45,
  },
  text_input_label: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 3,
  },
  single_row: {
    flexDirection: 'row',
  },
});
