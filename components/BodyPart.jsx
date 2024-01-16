import React from 'react'
import styled from 'styled-components/native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { FlatList } from 'react-native'
import { bodyParts } from '../constants'
import BodyPartCard from './BodyPartCard'

const MainView = styled.View`
    margin: 16px;

`

const MainText = styled.Text`
    font-size: ${hp(3)}px;
    font-weight: bold;
    color: black;

`

const BodyPart = () => {
  return (
    <MainView>
        <MainText>Exercicios</MainText>

        <FlatList data={bodyParts} numColumns={2} keyExtractor={item => item.name} showsVerticalScrollIndicator={false} 
        contentContainerStyle={{paddingBottom: 50, paddingTop: 20}} columnWrapperStyle={{justifyContent: 'space-between'}}
        renderItem={({item, index}) => <BodyPartCard index={index} item={item} />} />
    </MainView>
  )
}

export default BodyPart