import React, { FC, useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import MainStore from '../../store';
import chars from '../../store/chars';

const CharList: FC = () => {
  const {
    chars: { charList, getAllChars },
  } = MainStore;

  useEffect(() => {
    getAllChars();
  }, []);
  if (chars === null) return null;

  const getColor = (vision: String): String => {
    switch (vision) {
      case 'GEO': {
        return '#a98a3a';
      }
      case 'CRYO': {
        return '#a1c6ec';
      }
      case 'HYDRO': {
        return '#156ad8';
      }
      case 'ELECTRO': {
        return '#a73db0';
      }
      case 'ANEMO': {
        return '#51c397';
      }
      case 'PYRO': {
        return '#d34a4a';
      }
      case 'DENDRO': {
        return '#71bf55';
      }
    }
    return '#FFF';
  };

  const renderChar = ({ item }) => {
    const backcolor = getColor(item.vision);
    return (
      <ImageBackground
        source={{ uri: item.icon }}
        imageStyle={styles.cardImageStyle}
        style={[
          styles.cardImage,
          {
            backgroundColor: backcolor,
            borderRadius: 50,
            justifyContent: 'flex-end',
            alignItems: 'center',
          },
        ]}
        resizeMode={'contain'}>
        <Text style={styles.cardTitle}>{item.name}</Text>
      </ImageBackground>
    );
  };

  return (
    <View>
      <FlatList
        contentContainerStyle={styles.flatListContainer}
        renderItem={renderChar}
        data={charList}
      />
    </View>
  );
};
export default CharList;

const styles = StyleSheet.create({
  cardImage: {
    height: 250,
    width: 200,
    paddingHorizontal: 16,
  },
  cardImageStyle: {
    // borderRadius: 50,
  },
  cardTitle: {
    paddingTop: 8,
    color: '#fff',
  },
  flatListContainer: {
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
