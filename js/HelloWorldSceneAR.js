'use strict';

import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import {
  ViroARScene,
  ViroText,
  Viro3DObject,
  ViroAmbientLight,
  ViroSpotLight,
  ViroImage
} from 'react-viro';
var createReactClass = require('create-react-class');
var HelloWorldSceneAR = createReactClass({
  getInitialState() {
    return {
      text : "Initializing AR..."
    };
  },

  render: function() {
    return (
     <ViroARScene onTrackingUpdated={this._onTrackingUpdated} > 
      <ViroImage
        height={2}
        width={2}
        source={require('./res/mars.png')}
        position={[0, -.5, -2]} scale={[.3, .3, .3]} 
      />
      <ViroImage
        height={2}
        width={2}
        source={require('./res/mercury.png')}
        position={[0, 0, 0]} scale={[.02, .02, .02]} 
      />
      </ViroARScene>
    );
  },
});

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 50,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

module.exports = HelloWorldSceneAR;