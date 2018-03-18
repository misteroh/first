import React from 'react';
import {
  Text,
  View,
  CameraRoll,
  Button,
  ScrollView,
} from 'react-native';

export default class App extends React.Component {
  _handleButtonPress = () => {
    CameraRoll.getPhotos({
        first: 20,
        assetType: 'Photos',
      })
      .then(r => {
        this.setState({ photos: r.edges });
      })
      .catch((err) => {
         //Error Loading Images
      });
  }
  render() {
    return (
      <View>
        <Button title="Load Images" onPress={this._handleButtonPress} />
        <ScrollView>
          {this.state.photos.map((p, i) => {
          return (
            <Image
              key={i}
              style={{
                width: 300,
                height: 100,
              }}
              source={{ uri: p.node.image.uri }}
            />
          );
        })}
        </ScrollView>
    </View>
    );
  }
}
