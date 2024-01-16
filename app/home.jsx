import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import ImageSlider from '../components/ImageSlider'
import BodyPart from '../components/BodyPart'


// Styles from line 11 to 46 

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

const BodyImageView = styled.View`
    flex: 1;

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
        
        <BodyImageView>
            <BodyPart />
        </BodyImageView>

    </SafeAreaView>
  )
}

export default home