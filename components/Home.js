import React from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import Handler from './Handler'
import { useSelector } from 'react-redux'

export default function Home({navigation}) {
    return (
        <View style={tw`bg-blue-400`}>
            <View style={tw`flex flex-row justify-around py-3`}>
                <Button title='Cash In' color="#5cc955" onPress={()=>navigation.navigate('Cash in/out','+')}/>
                <Button title='Cash Out' color="#d66b6b" onPress={()=>navigation.navigate('Cash in/out','-')}/>
            </View>   
        </View>
    )
}

