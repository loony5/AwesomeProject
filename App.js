/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const myIcon = <Icon name="rocket" size={30} color="#900" />;

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>이전</Text>
      <View style={styles.searchBar}>
        <Text style={styles.searchBarText}>우리</Text>
      </View>
      <Text style={styles.text}>검색</Text>
    </View>
  );
};

const Body = () => {
  return (
    <View style={styles.body}>
      <View style={styles.bodyTop}>
        <View style={styles.distanceBtn}>
          <Text style={styles.text}>거리순</Text>
        </View>
        <View style={styles.accuracyBtn}>
          <Text style={styles.text}>정확도순</Text>
        </View>
      </View>
      <BodyContent />
    </View>
  );
};

const BodyContent = () => {
  return (
    <View style={styles.bodyContentView}>
      <ScrollView>
        <BodyItem />
      </ScrollView>
    </View>
  );
};

const infoItems = [
  {
    name: '우리동네병원 01',
    adrress: '가산디지털단지역',
    distance: '거리: 2km',
  },
  {
    name: '우리동네병원 02',
    adrress: '가산디지털단지역',
    distance: '거리: 2km',
  },
  {
    name: '우리동네병원 03',
    adrress: '가산디지털단지역',
    distance: '거리: 2km',
  },
  {
    name: '우리동네병원 04',
    adrress: '가산디지털단지역',
    distance: '거리: 2km',
  },
];

const BodyItem = () => {
  return infoItems.map(item => {
    return (
      <View style={styles.bodyItemView}>
        <View style={{height: 100, flexDirection: 'row'}}>
          <View
            style={{
              width: 100,
              backgroundColor: 'powderblue',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {/* <Text style={{textAlign: 'center', color: 'white'}}>이미지</Text> */}
            {myIcon}
          </View>
          <View style={{flex: 1, flexDirection: 'column'}}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
              }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                }}>
                <Text style={{paddingLeft: 20}}>{item.name}</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                }}>
                <Text style={{paddingRight: 20, textAlign: 'right'}}>
                  진료중 / 주차가능
                </Text>
              </View>
            </View>
            <View style={{flex: 1, paddingLeft: 20, justifyContent: 'center'}}>
              <Text>{item.adrress}</Text>
            </View>
          </View>
        </View>
        <View style={{height: 40}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              borderTopWidth: 0.5,
              borderColor: 'black',
            }}>
            <Text style={{flex: 1, textAlign: 'center'}}>{item.distance}</Text>
            <Text style={{flex: 1, textAlign: 'center'}}>전화 연결하기</Text>
            <Text style={{flex: 1, textAlign: 'center'}}>네비로 길찾기</Text>
            <Text style={{flex: 1, textAlign: 'center'}}>택시 호출하기</Text>
          </View>
        </View>
      </View>
    );
  });
};

const NavItems = ['병원/약국', '이벤트', '홈', '포인트샵', '마이메뉴'];

const Nav = () => {
  return (
    <View style={styles.nav}>
      {NavItems.map((item, index) => {
        return (
          <View style={styles.navItem}>
            <Text key={index} style={styles.searchBarText}>
              {item}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

const App = () => {
  return (
    <View style={styles.root}>
      <Header />
      <Body />
      <Nav />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  text: {
    color: 'white',
  },
  header: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  searchBar: {
    width: 200,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 30,
    justifyContent: 'center',
  },
  searchBarText: {
    color: 'black',
    textAlign: 'center',
  },
  body: {
    flex: 7,
    backgroundColor: '#d7e0eb',
    flexDirection: 'column',
  },
  bodyTop: {
    flex: 1,
    flexDirection: 'row',
    margin: 20,
    backgroundColor: 'gray',
  },
  distanceBtn: {
    flex: 1,
    backgroundColor: '#13bcd0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  accuracyBtn: {
    flex: 1,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyContentView: {
    flex: 8,
    // marginLeft: 20,
    // marginRight: 20,
  },
  bodyItemView: {
    height: 140,
    backgroundColor: 'white',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },
  nav: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'steelblue',
  },
  navItem: {
    flex: 1,
    borderColor: 'black',
    borderRightWidth: 0.5,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
