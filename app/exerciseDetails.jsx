import { Image } from 'expo-image'
import { useLocalSearchParams, useRouter } from 'expo-router'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Anticons from 'react-native-vector-icons/AntDesign'
import {ScrollView } from 'react-native'
import { apiCallTranslate } from '../api/translate'

const MainView = styled.View`
    display: flex;
    flex: 1;

`

const ExerciseNameText = styled.Text`
    font-size: ${hp(3)}px;
    color: black;
    font-weight: bold;

`

const EquipmentText = styled.Text`
    font-size: ${hp(2)}px;
    color: black;

`

const ShowEquipmentText = styled.Text`
    color: black;
    font-weight: bold;

`

const InstructionsText = styled.Text`
    font-size: ${hp(2.5)}px;
    color: black;
    font-weight: bold;

`

const InstructionText = styled.Text`
    font-size: ${hp(1.5)}px;
    color: black;
    margin: 5px;

`

const ErrorMessage = styled.Text`


`

const SearchForInfo = styled.Text`
    color: blue;

`

const exerciseDetails = () => {

  const item = useLocalSearchParams();
  const router = useRouter();
  const [translations, setTranslations] = useState('');
  const [doneWith, setDoneWith] = useState('');
  const [secondaryMuscles, setSecondaryMuscle] = useState('');
  const [targetMuscles, setTargetMuscle] = useState('');
  let itemLength = Object.keys(item).length;
  

  const getTranslation = async (sentence, action) => {
    let data = await apiCallTranslate(sentence);
    let translated = data[0].translations[0].text
    action(translated)
    
  } 

  

  return (
    <MainView>
        
        <Image source={{uri: item.gifUrl}} contentFit='cover' style={{width: wp(100), height: wp(100), borderRadius: 40}} /> 

        <TouchableOpacity onPress={() => router.back()} style={{margin: 8, borderRadius: 50, right: 0}} >
            <Anticons name='closecircle' size={hp(4.5)} color='orange' />                       
        </TouchableOpacity>  

        <ScrollView style={{margin: 16, marginTop: 12}} showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 60}}>
            <ExerciseNameText>{item.name}</ExerciseNameText>
            <EquipmentText>
                Realizado com <ShowEquipmentText>{ getTranslation(item?.equipment, setDoneWith) ? doneWith : ''}</ShowEquipmentText>                 
            </EquipmentText> 
            <EquipmentText>
                Músculos Secundários <ShowEquipmentText>{getTranslation(item?.secondaryMuscles, setSecondaryMuscle) ? secondaryMuscles: ''}</ShowEquipmentText>                 
            </EquipmentText> 
            <EquipmentText>
                Músculo Alvo <ShowEquipmentText>{getTranslation(item?.target, setTargetMuscle) ? targetMuscles: ''}</ShowEquipmentText>                 
            </EquipmentText>  

            <InstructionsText>
                Instruções                                
            </InstructionsText> 
            { getTranslation(item.instructions, setTranslations) ? 
                translations.split(',').map((instruction, index) => {
                    return (
                        <InstructionText key={index}>
                            {instruction}
                        </InstructionText>                        
                    )
                 })
            : ''}

            {itemLength == 0 ? <ErrorMessage>Desculpe, não foi possível conceder informações sobre este exercicio</ErrorMessage> : ''}

        </ScrollView>
            
    </MainView>
  )
}

export default exerciseDetails