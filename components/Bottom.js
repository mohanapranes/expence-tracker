import { View,Text } from 'react-native';
import { useSelector } from 'react-redux';
import tw from 'tailwind-react-native-classnames';


export default function Bottom() {
    const arr = useSelector((state)=>state.counter.arr)
    let cashIn = 0
    let cashOut = 0
    arr.map(ind=>{
        if(ind.operator === '+' ){
            cashIn += ind.Amount
        }
        else {
            cashOut += ind.Amount
        }
    })
    return (
      <View style={tw``}>
          <View style={tw`bg-gray-700 flex flex-row justify-between p-1`}>
                <View style={tw``}>
                    <Text style={tw`text-lg text-white font-bold text-center`}>Cash In</Text>
                    <Text style={tw`text-lg text-green-500 text-center`}>{cashIn}</Text>
                </View>
                <View style={tw``}>
                    <Text style={tw`text-lg text-white font-bold text-center`}>Cash Out</Text>
                    <Text style={tw`text-lg text-red-500 text-center`}>{cashOut}</Text>
                </View>
                <View style={tw``}>
                    <Text style={tw`text-lg text-white font-bold`}>Balance</Text>
                    <Text style={tw`text-lg text-yellow-300 text-center`}>{cashIn-cashOut}</Text>
                </View>
          </View>
      </View>
  );
}
