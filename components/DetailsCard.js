import React from 'react';
import { Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';

export default function DetailsCard({Amount,remarks,date,Details,Balance}) {
    const Date = JSON.stringify(date)
   // console.log(Details)
  return (
      <View style={tw`p-1 shadow`}>
          <View style={tw`p-1 border rounded-md`}>
             <View style={tw`flex flex-row`}>
                  <View style={tw`w-40`}>
                      <Text style={tw`font-thin opacity-50`}>
                          {Date.slice(1,11)}
                      </Text>
                  </View>
                  <View>
                      <Text style={tw`italic opacity-50`}>
                          {Details}
                      </Text>
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
          </View>
      </View>
  );
}
