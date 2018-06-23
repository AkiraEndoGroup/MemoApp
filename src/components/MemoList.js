import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, FlatList } from 'react-native';
import Swipeout from 'rc-swipeout';
import firebase from 'firebase';

const dateString = (date) => {
  if (date == null) { return ''; }
  const str = date.toISOString();
  return str.split('T')[0];
};

class MemoList extends React.Component {
  deleteNote(key: string) {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    db.collection(`users/${currentUser.uid}/memos`).doc(key.key).delete()
      .then(() => {
      })
      .catch(() => {
      });
  }

  renderMemo({ item }) {
    return (
      <Swipeout
        right={[
        {
          text: 'delete',
          onPress:() => this.deleteNote({ key: item.key }),
          style: { backgroundColor: 'red', color: '#fff' },
          className: 'custom-class-1',
          backgroundColor: '#fff',
        },
        ]}
        onOpen={() => {}}
        onClose={() => {}}
      >
        <TouchableHighlight onPress={() => { this.props.navigation.navigate('MemoDetail', { memo: item }); }}>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>{item.body.substring(0, 10)}</Text>
            <Text style={styles.memoDate}>{dateString(item.createdOn)}</Text>
          </View>
        </TouchableHighlight>
      </Swipeout>
    );
  }

  render() {
    // const swipeBtns = [
    //   {
    //     text: 'Delete',
    //     backgroundColor: 'red',
    //     underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
    //     onPress: () => { this.deleteNote(this.state.memoList[0]); }
    //   },
    // ];

    return (
      <View style={styles.memoList}>
        <FlatList
          data={this.props.memoList}
          renderItem={this.renderMemo.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
});

export default MemoList;
