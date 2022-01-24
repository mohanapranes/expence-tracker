import React from 'react';
import { View,Text, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import DetailsCard from './DetailsCard';

export default function Details() {
    const detail = useSelector((state)=> state.counter.arr)
    //console.log(detail.length)
    return (
      <View>
          <ScrollView>
          {detail.map(({key,Amount,remarks,date,Details,Balance},id)=>(
              <DetailsCard 
              key = {id}
              ind = {key}
              Amount={Amount}
              remarks={remarks}
              date = {date}
              Details = {Details}
              Balance = {Balance}
              />
            //  console.log("yeuo",Balance)
          ))}
        </ScrollView>
      </View>
  );
}
