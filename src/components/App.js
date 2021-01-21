import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { 
    SafeAreaView,
    Text,
    View
} from 'react-native';

const SAY_HELLO = gql`
  query Fuck_year ($name: String!){
    hello(name: $name)
  }
`


const App = () => {
    const { loading, error, data } = useQuery(SAY_HELLO, {
      variables: {
        name: "hyunseok"
      }
  })
  return (
    <>
        <SafeAreaView>
          <Text> we will gonna test GQL</Text>
          <Text> { data?.hello }</Text>    
        </SafeAreaView>
    </>
  );
};

export default App;
