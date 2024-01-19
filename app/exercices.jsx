import { useLocalSearchParams, useRouter } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styled from 'styled-components/native'
import { exercicesByBodyPart } from '../api/exercice'
import { ScrollView } from 'react-native-virtualized-view'
import { StatusBar } from 'expo-status-bar'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { Ionicons } from '@expo/vector-icons'
import ExerciseList from '../components/ExerciseList'

const MainView = styled.View`
    margin-top: 80px;

`

const MainText = styled.Text`


`

const GoBackText = styled.Text`


`

const BodyPartImage = styled.Image`
    width: ${wp(100)}px;
    height: ${hp(45)}px;
    border-radius: 40px;

`

const ExerciseView = styled.View`
    margin: 0 16px;    

`

const ExerciseText = styled.Text`
    font-size: ${hp(3)}px;
    font-weight: bold;

`

const ExerciseListInfo = styled.View`
    margin-bottom: 40px;

`

const exercices = () => {

  const router = useRouter();
  const [exercisces, setExercises] = useState([]);
  const item = useLocalSearchParams();

  useEffect(() => {
    if(item) getExercises(item.id) 

  }, [item])
  
  const getExercises = async (bodyPart) => {
    let data = await exercicesByBodyPart(bodyPart);
    setExercises(data);
  }

  return (
     <ScrollView>
        <StatusBar style='light' />
        <BodyPartImage source={item.image} />

        <TouchableOpacity onPress={() => router.back()} style={{backgroundColor: 'orange', margin: 16, borderRadius: 50, height: hp(5.5),
         width: hp(5.5), marginTop: 10, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Ionicons name='caret-back-outline' size={hp(4)} color='white' />
        </TouchableOpacity>

        <ExerciseView>
          <ExerciseText>{item.name}</ExerciseText>
          <ExerciseListInfo>
            <ExerciseList data={exercisces} />
          </ExerciseListInfo>
        </ExerciseView>
        
     </ScrollView>
  )
}

export default exercices