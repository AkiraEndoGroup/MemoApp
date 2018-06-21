import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.appbar}>
          <View>
            <Text style={styles.appbarTitle}>MEMOT</Text>
          </View>
        </View>

        <View style={styles.memoList}>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>講座のアイテム</Text>
            <Text style={styles.memoDate}>2017/8/10</Text>
          </View>
        </View>

        <View style={styles.memoList}>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>講座のアイテム</Text>
            <Text style={styles.memoDate}>2017/8/10</Text>
          </View>
        </View>

        <View style={styles.memoList}>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>講座のアイテム</Text>
            <Text style={styles.memoDate}>2017/8/10</Text>
          </View>
        </View>

        <View style={styles.memoList}>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>講座のアイテム</Text>
            <Text style={styles.memoDate}>2017/8/10</Text>
          </View>
        </View>

        <View style={styles.memoList}>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>講座のアイテム</Text>
            <Text style={styles.memoDate}>2017/8/10</Text>
          </View>
        </View>

        <View style={styles.memoAddButton}>
          <Text style={styles.memoAddButtonTitle}>+</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 78,
  },
  appbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 78,
    paddingTop: 30,
    backgroundColor: '#265366',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  appbarTitle: {
    color: '#fff',
    fontSize: 18,
  },
  memoList: {
    width: '100%',
    flex: 1,
  },
  memoListItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },
  memoTitle: {
    fontSize: 18,
    marginBottom: 4,
  },
  memoDate: {
    fontSize: 12,
    color: '#a2a2a2',
  },
  memoAddButton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 40,
    height: 40,
    backgroundColor: '#E31676',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  memoAddButtonTitle: {
    fontSize: 24,
    lineHeight: 20,
    color: '#fff',
  }
});
