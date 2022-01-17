import React from 'react'
import { useState } from 'react'
import { View,Text,TextInput, Button, ScrollView } from 'react-native'
import CalendarPicker from 'react-native-calendar-picker'
//import DatePicker from 'react-native-date-picker'
import tw from 'tailwind-react-native-classnames'

function submit(Amount,remarks) {

}

export default function Handler(navigation) {
   const [number, setnumber] = useState(null)
   const [remarks, setremarks] = useState("")
   const [date, setdate] = useState(new Date())
   console.log(navigation.route.params)
    return (
       <View style={tw`bg-white p-3`}>
           <ScrollView>
                <View style={tw``}>
                    <Text style={tw`text-xl font-bold`}>
                        Amount
                    </Text>
                    <TextInput 
                            value={number}
                            onChangeText={setnumber}
                            keyboardType='numeric'
                            style={tw`border-2 p-1 rounded-md`
                            
                        }
                        />
                </View>
                <View style={tw``}>
                    <Text style={tw`text-xl font-bold`}>
                        Remarks
                    </Text>
                    <TextInput
                            value={remarks}
                            onChangeText={setremarks}
                            multiline 
                            style={tw`border-2 p-1 rounded-md flex items-stretch h-48 text-lg`}/> 
                </View>
                <View style={tw``}>
                    <Text style={tw`font-bold text-xl`}>Choose Date</Text>
                    <CalendarPicker onDateChange={setdate}/>
                </View>
                <View style={tw`p-3`}>
                        <Button title='Submit' onPress={submit(number,remarks)}/>
                </View>
            </ScrollView>
       </View>
    )
}
