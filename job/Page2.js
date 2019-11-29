import React, { Component } from "react";
import { StyleSheet, Platform, View, Text, ToastAndroid, ScrollView } from "react-native";
import NumberButtons from "../components/NumberButtons";
import HistoryView from "../components/HistoryView";
const buttons = [
  ["C", "+/-", "%", "÷"],
  ["7", "8", "9", "x"],
  ["4", "5", "6", "+"],
  ["1", "2", "3", "-"],
  [".", "0", "Del", "="]
];
const initialOutput = "0";
const maxLength = 57;


export default class Page2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _output: initialOutput,
      _mathExpression: "",
      _history: []
    };
    this._handleEvent = this._handleEvent.bind(this);
    this._clearHistory = this._clearHistory.bind(this);
  }


  _handleEvent = value => {
    if (!isNaN(value) || value == ".") {
      this._concatToOutput(value);
    } else {
      switch (value) {
        case buttons[0][0]:
          this._initOutput();
          break;

        case buttons[4][2]:
          if (this.state._output.length === 1) {
            this._initOutput();
          } else {
            this._replaceLastIndex("");
          }
          break;

        case buttons[4][3]:
          this._evaluate();
          break;

        case buttons[0][2]:
          this._inputPercent();
          break;

        case buttons[0][1]:
          this._toggleSign();
          break;

        default:
          let strLastChar = this.state._output.slice(-1);
          if (isNaN(strLastChar)) {
            this._replaceLastIndex(value);
          } else {
            this._concatToOutput(value);
          }
          break;
      }
    }
  };
  _concatToOutput = value => {
    if (this.state._output.length >= maxLength) {
      this._showToast(
        "Maximum Expression Length of " + maxLength + " is reached."
      );
    } else {
      if (this.state._output !== initialOutput) {
        this.setState({ _output: this.state._output + "" + value + "" });
      } else {
        this.setState({ _output: value + "" });
      }
    }
  };
  _replaceLastIndex = value => {
    var str1 = this.state._output.replace(/.$/, value);
    this.setState({
      _output: str1
    });
  };

  _evaluate = () => {
    try {
      let strCurOutput = this.state._output;
      if (isNaN(strCurOutput)) {
        let dEval = eval(this._convertToMathExpression(this.state._output));

        let aHistory = [...this.state._history];
        aHistory.push([strCurOutput, dEval]);

        this.setState({
          _output: "" + dEval,
          _history: aHistory
        });
      }
    } catch (exception) {

      this._showToast("Invalid format used.");
    }
  };

  _toggleSign() {
    let output = this.state._output;
    let newValue = parseFloat(output) * -1;

    this.setState({
      _output: String(newValue)
    });
  }

  _inputPercent = () => {
    let output = this.state._output;
    let currentValue = parseFloat(output);

    if (currentValue === 0) return;

    const fixedDigits = output.replace(/^-?\d*\.?/, "");
    const newValue = parseFloat(output) / 100;

    this.setState({
      _output: String(newValue.toFixed(fixedDigits.length + 2))
    });
  };

  _convertToMathExpression = value => {
    let strTemp = value.replace(
      new RegExp(this._escapeRegExp(buttons[0][3]), "g"),
      "/"
    );
    strTemp = strTemp.replace(
      new RegExp(this._escapeRegExp(buttons[1][3]), "g"),
      "*"
    );
    return strTemp;
  };

  _escapeRegExp = str => {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
  };

  _initOutput = () => {
    this.setState({
      _output: initialOutput
    });
  };

  _clearHistory = () => {
    console.log("inside _clearHistory function");
    const emptyArray = [];
    this.setState({
      _history: emptyArray
    });
  };

  _showToast = value => {
    ToastAndroid.show(value, ToastAndroid.SHORT);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contHistory}>
          <HistoryView
            data={this.state._history}
            onClear={this._clearHistory}
          />
        </View>
        <View style={styles.contOutput}>
          <View style={styles.placeHolderOutput}>
            <Text style={styles.txtDefault}>{this.state._output}</Text>
          </View>
        </View>
        <View style={styles.contButtons}>
          <NumberButtons onBtnPress={this._handleEvent} buttons={buttons} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: "column"
  },

  contHistory: {
    flex: 0.3,
    borderBottomWidth: 1,
    borderColor: "#2c3e50"
  },

  contOutput: {
    flex: 0.1
  },

  contButtons: {
    flex: 0.6,
    backgroundColor: "#2c3e50"
  },

  placeHolderOutput: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 15,
    paddingLeft: 15
  },

  txtDefault: {
    color: "#000",
    fontFamily: "System",
    fontSize: 30
  }


})
