import React, {Component} from 'react';
import {Button, View, Image, StyleSheet} from 'react-native';
import ImagePicker from 'react-native-image-picker';

import Photo from './assets/photo.jpg';

class PickImage extends Component {
  state = {
    pickedImage: null,
  };

  pickImageHandler = () => {
    ImagePicker.showImagePicker({title: 'Pick Image'}, (res) => {
      if (res.didCancel) {
        console.log('User cancelled!');
      } else if (res.error) {
        console.log('Error', res.error);
      } else {
        this.setState({
          pickedImage: {uri: res.uri},
        });
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <Image source={Photo} style={styles.imageStile} /> */}
        <Image source={this.state.pickedImage} style={styles.imageStile} />
        <Button
          title="Pick Image"
          onPress={this.pickImageHandler}
          style={styles.pickImageButton}
        />
        <Button
          title="Save image"
          onPress={this.pickImageHandler}
          style={styles.saveImageButton}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  imageStile: {
    flex: 2,
  },
  pickImageButton: {
    paddingBottom: 10,
    marginBottom: 10,
  },
  saveImageButton: {
    paddingBottom: 10,
    marginBottom: 10,
  },
});

export default PickImage;
