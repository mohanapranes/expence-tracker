import React from 'react'
import { Button, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import Bottom from './Bottom'
import Details from './details'

export default function Home({navigation}) {
    return (
        <View style={{ height: '100%' }}>
        <ScrollView>
            <View style={tw`bg-blue-400`}>
                <View style={tw`flex flex-row justify-around py-3`}>
                    <Button title='Cash In' color="#5cc955" onPress={()=>navigation.navigate('Cash in/out',{operator:'+'})}/>
                    <Button title='Cash Out' color="#d66b6b" onPress={()=>navigation.navigate('Cash in/out',{operator:'-'})}/>
                </View> 
                
            </View>
            <View>
                <Details />
            </View> 
        </ScrollView>
        <Bottom style={tw`bottom-0 left-0 `}/>
        </View>
    )
}

