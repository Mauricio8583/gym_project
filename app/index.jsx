import React from 'react'
import styled from 'styled-components/native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { StatusBar } from 'expo-status-bar'
import { LinearGradient } from 'expo-linear-gradient'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Animated, { FadeInDown } from 'react-native-reanimated'

// Styles from line 1 to 47

const IndexView = styled.View`
    display: flex;
    flex: 1;
    justify-content: flex-end;
    position: relative;    
    
`

const IndexImage = styled.Image`
    width: 100%;
    height: 100%;
    position: absolute;

`

const LinearText = styled.Text`
    color: white;
    font-size: ${hp(5)}px;
    font-weight: bold;


`

const LinearSubText = styled.Text`
    color: orange;
    font-size: ${hp(5)}px;
    font-weight: bold;

`

const TouchableText = styled.Text`
    color: white;
    font-weight: bold;
    font-size: ${hp(2)}px;

`
//



const index = () => {
  return (
    <IndexView>
        <StatusBar style='light' />
        <IndexImage source={require('../assets/images/index_image.jpg')} />

            <LinearGradient colors={['transparent', '#18181b']} style={{width: wp(100), height: hp(70), display: 'flex', 
               justifyContent: 'flex-end', paddingBottom: '10px'}} start={{x: 0.5, y: 0}} end={{x: 0.5, y: 0.5}}>
               <Animated.View entering={FadeInDown.delay(100).springify()} style={{display: 'flex', alignItems: 'center'}}>
                 <LinearText>Os melhores</LinearText><LinearSubText>exercicíos</LinearSubText>
               </Animated.View>
               
               <Animated.View entering={FadeInDown.delay(200).springify()}>
                <TouchableOpacity style={{height: hp(7), width: wp(80), backgroundColor: '#FFA100', display: 'flex', 
                   alignItems: 'center', justifyContent: 'center', marginLeft: 40, marginBottom: 20, marginTop: 15, 
                   borderColor: 'white', borderRadius: 50}}>
                  <TouchableText>Comece já</TouchableText>
                </TouchableOpacity>
               </Animated.View>
            </LinearGradient>
    </IndexView>     
  )
}

export default index