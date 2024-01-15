import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import ImageSlider from '../components/ImageSlider'


// Styles from line 11 to 41 

const HomeView = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 40px;

`
const HomeSubView = styled.View`


`

const HomeText = styled.Text`
    font-size: ${hp(4.5)}px;
    font-weight: bold;
    color: #03131C;

`

const HomeSubText = styled.Text`
    font-size: ${hp(4.5)}px;
    font-weight: bold;
    color: orange;

`

const SliderView = styled.View`


`
// 

const home = () => {
  return (
    <SafeAreaView style={{display: 'flex', flex: 1, backgroundColor: 'white'}} edges={['top']}>
        <StatusBar style='dark' />

        <HomeView>
            <HomeSubView>
                <HomeText>O MELHOR PARA</HomeText>
                <HomeSubText>O SEU TREINO</HomeSubText>                            
            </HomeSubView>            
        </HomeView>

        <SliderView>
            <ImageSlider /> 
        </SliderView>
    </SafeAreaView>
  )
}

export default home