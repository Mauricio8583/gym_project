import React from 'react'
import Carousel, { ParallaxImage } from 'react-native-snap-carousel'
import styled from 'styled-components/native'
import { sliderImages } from '../constants'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'


const ItemView = styled.View`
     width: ${wp(100)-70}px;
     height: ${hp(25)}px;

`

const ImageSlider = () => {
  return (
    <Carousel data={sliderImages} loop={true} autoplay={true} renderItem={ItemCard} hasParallaxImages={true} sliderWidth={wp(100)} 
    firstItem={1} autoplayInterval={4000} itemWidth={wp(100)-70} slideStyle={{display: 'flex', alignItems: 'center'}} />    
  )
}

const ItemCard = ({item, index}, parallaxProps) => {
    return (
        <ItemView>
            <ParallaxImage source={item} containerStyle={{borderRadius: 30, flex: 1, display: 'flex'}} style={{resizeMode: 'contain'}}
            parallaxFactor={1} {...parallaxProps} />
        </ItemView>
    )    
}

export default ImageSlider