import { Stack } from 'expo-router'
import React from 'react'
import { LogBox } from 'react-native'

const Layout = () => {
  LogBox.ignoreLogs(['Warning: Failed prop type:', 'Cannot set prop', 'Possible Unhandled Promise Rejection'])

  return (
    <Stack screenOptions={{
        headerShown: false,
    }}>
     <Stack.Screen name='exercices' options={{
      presentation: 'fullScreenModal'

     }} />
     <Stack.Screen name='exerciseDetails' options={{
      presentation: 'modal'

     }} />
    </Stack>
  )
}

export default Layout