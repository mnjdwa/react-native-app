import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import AstroidSearch from '../screens/AstroidSearch'
import { colors } from '../styles/constants'
import Astroid from '../screens/Astorid'
// import { colors } from '../styles/constants'
// import Users from '../screens/Users'


const Stack = createStackNavigator()

const Navigation = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="AstroidSeaech"
          component={ AstroidSearch }
          options={{
            title: 'Asrtoid Search',
            headerStyle: {
              backgroundColor: colors.primary,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              alignSelf: 'center',
              fontWeight: 'bold'
            }
          }}
        />
          <Stack.Screen
          name="Astroid"
          component={ Astroid }
          options={{
            title: 'Asrtoid',
            headerStyle: {
              backgroundColor: colors.primary,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              alignSelf: 'center',
              fontWeight: 'bold'
            }
          }}
        />
  
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation