import React, { Component } from 'react';
import { View, Button } from 'react-native';
import SignaturePad from 'react-native-signature-pad';

import { style } from './style';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 0,
      image: '',
    };
  }

  clearSignature = () => {
    this.setState({ key: Math.floor(Math.random(100) * 100) });
    this.setState({ image: '' });
  };

  saveSignature = () => {
    const { image } = this.state;
    console.log(image);
  };

  signaturePadError = error => {
    console.error(error);
  };

  signaturePadChange = ({ base64DataUrl }) => {
    this.setState({ image: base64DataUrl });
  };

  render() {
    const { key } = this.state;
    const { container, signature, buttons } = style;
    return (
      <View style={container}>
        <SignaturePad
          key={key}
          onError={this.signaturePadError}
          onChange={this.signaturePadChange}
          style={signature}
        />
        <View style={buttons}>
          <Button title="Limpar" onPress={this.clearSignature} />
          <Button title="Salvar" onPress={this.saveSignature} />
        </View>
      </View>
    );
  }
}
