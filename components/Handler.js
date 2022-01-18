import React from 'react'
import { useState } from 'react'
import { View,Text,TextInput, Button, ScrollView } from 'react-native'
import CalendarPicker from 'react-native-calendar-picker'
import tw from 'tailwind-react-native-classnames'

import  {addAmount}  from './Data/data'
import { useSelector, useDispatch } from 'react-redux'



export default function Handler(navigation) {
    const [number, setNumber] = useState(null)
    const [remarks, setRemarks] = useState("")
    const [date, setdate] = useState(new Date())
    const operator = navigation.route.params
    
    const dispatch = useDispatch()
    const submit = (Amount,remarks,date) =>{ 
    if(operator==='+'){
        var obj = {
            'Amount':Amount,
            'remarks':remarks,
            'date':date,
            'operator':operator,
            'Details':'Cash IN'
        }
    }
    else {
        var obj = {
            'Amount':Amount,
            'remarks':remarks,
            'date':date,
            'operator':operator,
            'Details':'Cash Out',
        }
    }
    dispatch(addAmount(obj))
    setNumber(null)
    setRemarks("")
}
    return (
       <View style={tw`bg-white p-3`}>
           <ScrollView>
                <View style={tw``}>
                    <Text style={tw`text-xl font-bold`}>
                        {(operator==='+')?"Amount-In" :"Amount-Out" }
                    </Text>
                    <TextInput 
                            value={number}
                            onChangeText={setNumber}
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
                            onChangeText={setRemarks}
                            multiline 
                            style={tw`border-2 p-1 rounded-md flex items-stretch text-lg`}/> 
                </View>
                <View style={tw``}>
                    <Text style={tw`font-bold text-xl`}>Choose Date</Text>
                    <CalendarPicker onDateChange={setdate}/>
                </View>
                <View style={tw`p-3`}>
                        <Button title='Submit' onPress={()=>submit(number,remarks,date)}/>
                </View>
            </ScrollView>
            {//console.log(value)
            }
       </View>

    )
}
