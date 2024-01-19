import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styled from 'styled-components/native'
import { Image } from 'expo-image'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const MainView = styled.View`


`



const ExerciseCard = ({index, item, router}) => {

  return (
    <MainView>
        <TouchableOpacity style={{display: 'flex', paddingVertical: 12}}>
            <Image source={{uri: item.gifUrl}} contentFit='cover' style={{width: wp(44), height: wp(52), borderRadius: 25}} />
        </TouchableOpacity>
    </MainView>    
  )
}

export default ExerciseCard