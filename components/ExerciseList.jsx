import React from 'react'
import styled from 'styled-components/native'
import { FlatList } from 'react-native'
import ExerciseCard from './ExerciseCard'
import { useRouter } from 'expo-router'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'


const MainView = styled.View`
    margin: 16px;

`

const MainText = styled.Text`
    font-size: ${hp(3)}px;
    font-weight: bold;
    color: black;

`

const ExerciseList = ({data}) => {

   const router = useRouter();

  return (
    <MainView>
        <FlatList data={data} numColumns={2} keyExtractor={item => item.name} showsVerticalScrollIndicator={false} 
        contentContainerStyle={{paddingBottom: 60, paddingTop: 20}} columnWrapperStyle={{justifyContent: 'space-between'}}
        renderItem={({item, index}) => <ExerciseCard index={index} item={item} router={router} />} />
    </MainView>    
  )
}

export default ExerciseList