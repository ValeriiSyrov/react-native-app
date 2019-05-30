
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ApolloClient} from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import { ApolloProvider, graphql } from 'react-apollo';
import gql from 'graphql-tag';

// import the different screens
import Loading from './screens/auth/loading'
import SignUp from './screens/auth/signup'
import Login from './screens/auth/login'
import Main from './screens/main/main'




const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://192.168.0.83:3000/graphql' }),
 
 
  cache: new InMemoryCache()
});
const Query = gql`
{
  listEvents {
    title
  }
}
`;

const DogComponent = graphql(Query)(props => {
  //const { error, listEvents } = props.data;
  console.log(props)
/*   if (error) {
    return <Text>{error}</Text>;
  } */
 /*  if (listEvents) {
    return <Text>{listEvents[0].title}</Text>;
  } */

  return <Text>Loading...</Text>;
});




/* class App extends Component {
  render() {
    

    return (
      <ApolloProvider client={client}>
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>it is from graphql</Text>
        <DogComponent/>
      </View>
      </ApolloProvider>
    );
  }
} */


const AppNavigator = createStackNavigator(
  {
    Loading,
    SignUp,
    Login,
    Main
  },
  {
    initialRouteName: Loading
  }
);

const AppContainer = createAppContainer(AppNavigator);

class App extends Component {
  render() {
    

    return (
      <ApolloProvider client={client}>
      <AppContainer />
      </ApolloProvider>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});


export default App