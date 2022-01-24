import React from 'react';
import { Text, TouchableOpacity, View,Alert } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useSelector,useDispatch } from 'react-redux';
import { deleteArr } from './Data/data';

export default function DetailsCard({ind,Amount,remarks,date,Details,Balance}) {
    const Date = JSON.stringify(date)
    const dispatch = useDispatch()
   // console.log('ind',Balance)
    function deleteVal(index) {
        //console.log('inf',index)
        dispatch(deleteArr(index))

    }

    function setAlert() {
        Alert.alert(
        "Delete",
        "Do you want to delete this record",
        [
        {
          text: "Yes",
          onPress: () => deleteVal(ind),
          //style: "cancel"
        },
        { text: "No"  }
      ]
    );
    }
    return (
      <View style={tw`p-1 shadow`}>
          <TouchableOpacity   onLongPress={()=>setAlert()} style={tw`p-1 border rounded-md bg-white`}>
             <View style={tw`flex flex-row`}>
                  <View style={tw`w-40`}>
                      <Text style={tw`font-thin opacity-50`}>
                          {Date.slice(1,11)}
                      </Text>
                  </View>
                  <View>
                      {Details=='Cash IN'?
                      <Text style={tw`italic opacity-50 text-green-800`}>                          
                          { Details}
                      </Text>
                      :
                      <Text style={tw`italic opacity-50 text-red-800`}>
                          {Details}
                      </Text>
}
                  </View>
             </View>
            <View style={tw`flex flex-row`}>
                
                <View style={tw`w-40 `}>
                    <Text style={tw`font-bold`}>{remarks}</Text>
                </View>
                <View style={tw`w-32`}>
                    <Text style={tw`font-bold`}>{Amount}</Text>
                </View>
                <View style={tw``}>
                    <Text style={tw`font-bold`}>{Balance}</Text>
                </View>
            </View>
          </TouchableOpacity>
      </View>
  );
}
