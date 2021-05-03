import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import styled from 'styled-components';

import TopCalendar from '../components/TopCalendar'
import HomeWarningSwriper from '../components/Home/HomeWarningSwiper'
import SSCD from '../SampleDB/SpecializedSubjectCardsData';





const Search = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <TopCalendar/>  
       
      </View>
    </SafeAreaView>
  )
}

export default Search;
