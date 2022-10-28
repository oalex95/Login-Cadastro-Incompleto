import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import {Card, Icon} from 'react-native-elements'
import firebase from 'firebase';

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = { 
      uid: ''
    }
  }
  signOut = () => {
    firebase.auth().signOut().then(() => {
      this.props.navigation.navigate('Login')
    })
    .catch(error => this.setState({ errorMessage: error.message }))
  }  
  render() {
    this.setState = { 
      displayName: firebase.auth().currentUser.displayName,
      uid: firebase.auth().currentUser.uid
    }
    return (
      <View style={styles.container}>
        <Div>
          <Card>
            <Card.Title>Serviço de Alinhamento</Card.Title>
            <Card.Divider/>
            <Card.Image 
              styles={"padding:10"} 
              source={require('./img/alinhamento.jpg')}
            />
            </Card>
            <Card>
            <Card.Title>Troca de olio</Card.Title>
            <Card.Divider/>
            <Card.Image 
              styles={"padding:10"} 
              source={require('./img/alinhamento.jpg')}
            />
          </Card>
        </Div>
        <Button
          color="#3740FE"
          title="Logout"
          onPress={() => this.signOut()}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 35,
    backgroundColor: '#fff'
  },
  textStyle: {
    fontSize: 15,
    marginBottom: 20
  }
});
