import React from 'react'
import styled from 'styled-components/native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { StatusBar } from 'expo-status-bar'
import { LinearGradient } from 'expo-linear-gradient'

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

const LinearView = styled.View`
    display: flex;
    align-items: center;

`

const LinearText = styled.Text`


`

const index = () => {
  return (
    <IndexView>
        <StatusBar style='light' />
        <IndexImage source={require('../assets/images/index_image.jpg')} />

            <LinearGradient colors={['transparent', '#18181b']} style={{width: wp(100), height: hp(70), display: 'flex', justifyContent: 'flex-end', paddingBottom: '10px'}} start={{x: 0.5, y: 0}} end={{x: 0.5, y: 0.5}}>
               <LinearView>
                 <LinearText>Confira os melhores exercicios</LinearText>
               </LinearView>
            </LinearGradient>
    </IndexView>     
  )
}

export default index