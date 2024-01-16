import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styled from 'styled-components/native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { LinearGradient } from 'expo-linear-gradient'

const MainView = styled.View`
    position: relative;

`

const MainImage = styled.Image`
    width: ${wp(44)}px;
    height: ${wp(52)}px;
    border-radius: 35px;
    position: absolute;

`

const TextName = styled.Text`
    font-size: ${hp(2.3)}px;
    color: white;
    font-weight: bold;
    text-align: center;

`

const BodyPartCard = ({index, item}) => {
  return (
    <MainView>
        <TouchableOpacity style={{width: wp(44), height: wp(52), display: 'flex', justifyContent: 'flex-end', padding: 16, marginBottom: 16}}>
            <MainImage source={item.image} resizeMode='cover'  />
            <LinearGradient colors={['transparent', 'rgba(0, 0, 0, 0.9)']} style={{width: wp(44), height: hp(15), position: 'absolute', marginBottom: 0, borderRadius: 35}} 
            start={{x: 0.5, y: 0}} end={{x: 0.5, y: 1}} />
            <TextName>{item?.name}</TextName>            
            
        </TouchableOpacity>
    </MainView>    
  )
}

export default BodyPartCard