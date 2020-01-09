/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View
} from 'react-native';
import { VictoryArea, VictoryAxis, VictoryBar, VictoryChart, VictoryPolarAxis, VictoryTheme } from 'victory-native'


const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 }
]

const polarData = [
  {x: 1, y: 2, label: 'a'},
  {x: 2, y: 3, label: 'b'},
  {x: 4, y: 4, label: 'c'},
  {x: 7, y: 1, label: 'd'}
]

const App = () => (
    <SafeAreaView style={styles.container}>
      <Text>
        Hello world!
      </Text>
      <Text>
        Bar chart with fake data:
      </Text>
      <VictoryChart domainPadding={20} width={350}>
        <VictoryAxis tickValues={[1, 2, 3, 4]} tickFormat={['Q1', 'Q2', 'Q3', 'Q4']}/>
        <VictoryAxis dependentAxis tickFormat={(x) => (`$${x / 1000}k`)}/>
        <VictoryBar data={data} x='quarter' y='earnings' />
      </VictoryChart>
      <Text>
        Another type of chart:
      </Text>
      <VictoryChart polar domainPadding={15} width={350}>
        <VictoryPolarAxis />
        <VictoryArea data={polarData} style={{ data: { fill: '#c43a31' } }} />
      </VictoryChart>
    </SafeAreaView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default App;
