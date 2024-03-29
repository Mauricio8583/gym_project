import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styled from 'styled-components/native'
import { Image } from 'expo-image'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { View } from 'react-native'
import Animated, { FadeInDown } from 'react-native-reanimated'


const ExerciseNameText = styled.Text`
    font-size: ${hp(1.7)}px;
    color: black;
    font-weight: bold;
    margin-left: 4px;    

`


const ExerciseCard = ({index, item, router}) => {

  return (
    <Animated.View entering={FadeInDown.duration(200).delay(index*200).springify()}>
        <TouchableOpacity style={{display: 'flex', paddingVertical: 12}} onPress={() => router.push({pathname: '/exerciseDetails', params: item})}>
            <Image source={{uri: item.gifUrl}} contentFit='cover' style={{width: wp(44), height: wp(52), borderRadius: 25, gap: 20, 
            margin: -7}} />
        </TouchableOpacity>
        
        <ExerciseNameText>{item?.name?.length>20? item.name.slice(0, 20) + '...': item.name}</ExerciseNameText>
    </Animated.View>    
  )
}

export default ExerciseCard