/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppRegistry,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import { RNCamera } from 'react-native-camera';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style = {styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            permissionDialogTitle={'Permission to use camera'}
            permissionDialogMessage={'We need your permission to use your camera phone'}
        />
        <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center',}}>
          <TouchableOpacity
              onPress={this.takePicture.bind(this)}
              style = {styles.capture}
          >
              <Text style={{fontSize: 14}}> SNAP </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  
  takePicture = async function() {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options)
      console.log(data.uri);
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  }
});


AppRegistry.registerComponent('BadInstagramCloneApp', () => BadInstagramCloneApp);

// import React, { Component } from 'react';
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View,
//   AppRegistry,
//   Dimensions,
//   TouchableOpacity,
//   Linking
// } from 'react-native';
// import { RNCamera } from 'react-native-camera';
// import QRCodeScanner from 'react-native-qrcode-scanner';
// // import firebase from 'react-native-firebase';
// import { db } from './Firebase/firebase.js';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type Props = {};
// let scanner;

// export default class App extends Component<Props> {
//     constructor(props) {
//       super(props);

//       this.state = {
//                       code: 'tit3'
//                   };
//     } 
//    onSuccess(e) {
//     // Linking
//     //   .openURL(e.data)
//     //   .catch(err => console.error('An error occured', err));
//     const qrcode = e.data;

//     this.setState({ code: qrcode });
//     scanner.reactivate();
//   }
//   render() {
//     const {code} = this.state;
//     const startScan = () => {
//       if (scanner) {
//         scanner.reactivate();
//       }
//     };
//     return (
//       <View style={styles.container}>
//         <QRCodeScanner
//         ref={(camera) => scanner = camera}
//         onRead={this.onSuccess.bind(this)}
//         topContent={
//           <Text style={styles.centerText}>
//             Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code.
//           </Text>
//         }
//         bottomContent={
//           <TouchableOpacity style={styles.buttonTouchable} onPress={() => startScan()}>
//             <Text style={styles.buttonText}>CODE: {code}</Text>
//           </TouchableOpacity>
//         }
//       />
//       </View>
//     );
//   }
// }
  
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     backgroundColor: 'white'
//   },
//   centerText: {
//     flex: 1,
//     fontSize: 18,
//     padding: 32,
//     color: '#777',
//   },
//   textBold: {
//     fontWeight: '500',
//     color: '#000',
//   },
//   buttonText: {
//     fontSize: 21,
//     color: 'rgb(0,122,255)',
//   },
//   buttonTouchable: {
//     padding: 16,
//   },
// });

// AppRegistry.registerComponent('default', () => ScanScreen);