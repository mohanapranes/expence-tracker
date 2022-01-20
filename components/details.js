import React from 'react';
import { View,Text } from 'react-native';
import { useSelector } from 'react-redux';
import DetailsCard from './DetailsCard';

export default function Details() {
    const detail = useSelector((state)=> state.counter.arr)
    //console.log(detail.length)
    return (
      <View>
          <View>
              <Text>{//detail[0].Details
              }
              </Text>
          </View>
          {detail.map(({Amount,remarks,date,Details,Balance},id)=>(
              <DetailsCard 
              key = {id}
              Amount={Amount}
              remarks={remarks}
              date = {date}
              Details = {Details}
              Balance = {Balance}
              />
              //console.log(date)
          ))}
      </View>
  );
}
