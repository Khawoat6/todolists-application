//React Modules
import React, { Component } from "react";
import {
  View,
  Text,
  TouchableNativeFeedback,
  TouchableHighlight
} from "react-native";


import styles from "./styles";

export default class NumberButtons extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }
  _handleOnPress = value => {
    requestAnimationFrame(() => {
      this.props.onBtnPress(value);
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {this.props.buttons.map((row, index) => (
          <View key={index} style={styles.contRow}>
            {row.map((col, index) => (
              <TouchableHighlight
                style={{ flex: 1 }}
                key={index}
                onPress={() => this._handleOnPress(col)}
                underlayColor="#34495e"
              >
                <View
                  style={
                    index >= 3 ? styles.contButtonHighlight : styles.contButton
                  }
                >
                  <Text style={styles.txtDefault}>{col}</Text>
                </View>
              </TouchableHighlight>
            ))}
          </View>
        ))}
      </View>
    );
  }
}
