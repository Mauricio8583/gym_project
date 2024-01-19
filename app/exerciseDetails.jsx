import { Image } from 'expo-image'
import { useLocalSearchParams, useRouter } from 'expo-router'
import React from 'react'
import styled from 'styled-components/native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Anticons from 'react-native-vector-icons/AntDesign'
import { ScrollView } from 'react-native'

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

const exerciseDetails = () => {

  const item = useLocalSearchParams();
  const router = useRouter();

  return (
    <MainView>
        <Image source={{uri: item.gifUrl}} contentFit='cover' style={{width: wp(100), height: wp(100), borderRadius: 40}} /> 

        <TouchableOpacity onPress={() => router.back()} style={{margin: 8, borderRadius: 50, right: 0}} >
            <Anticons name='closecircle' size={hp(4.5)} color='orange' />                       
        </TouchableOpacity>  

        <ScrollView style={{margin: 16, marginTop: 12}} showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 60}}>
            <ExerciseNameText>{item.name}</ExerciseNameText>
            <EquipmentText>
                Realizado com <ShowEquipmentText>{item?.equipment}</ShowEquipmentText>                 
            </EquipmentText> 
            <EquipmentText>
                Músculos Secundários <ShowEquipmentText>{item?.secondaryMuscles}</ShowEquipmentText>                 
            </EquipmentText> 
            <EquipmentText>
                Músculo Alvo <ShowEquipmentText>{item?.target}</ShowEquipmentText>                 
            </EquipmentText>  

            <InstructionsText>
                Instruções                                
            </InstructionsText> 
            {
                item?.instructions?.split(',').map((instruction, index) => {
                    return (
                        <InstructionText key={instruction}>
                            {instruction}
                        </InstructionText>                        
                    )
                 })
            }

        </ScrollView>     
    </MainView>
  )
}

export default exerciseDetails