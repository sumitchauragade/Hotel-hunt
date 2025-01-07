import { View, Text } from 'react-native'
import React, {useState, useMemo} from 'react'
import { Link, Stack } from 'expo-router'
import ExploreHeader from '@/components/ExploreHeader'
import LIstings from '@/components/LIstings'
import listingsData from '@/assets/data/airbnb-listings.json'

const Page = () => {
  const [category, setCategory] = useState('Tiny homes');
  const items = useMemo(() => listingsData as any, []);

 const onDataChanged = (category: string) => {
  setCategory(category);
 console.log('Changed_', category);
 } ;

  return (
    <View style={{flex: 1, marginTop: 140}}>
     <Stack.Screen options={
      {
        header: () => <ExploreHeader onCategoryChanged={onDataChanged}/>,
      }
     }/>
     <LIstings listings={items} category={category}/>
    </View>
  )
}

export default Page