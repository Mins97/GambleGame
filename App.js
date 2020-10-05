function HomeScreen() {
  const [coin, setCoin] = useState(0);
  const [gradeT, setGrade] = useState("Stone");
  const [betting, setBetting] = useState(0);
  function oneCoin() {
    setCoin(coin + 100);
  }
  function gamble(percent, multiple) {
    const min = 0;
    const max = 100;
    const rand = min + Math.random() * (max - min);
    const p = 100 - percent;
    if (rand > p) {
      setCoin(coin * multiple);
    } else {
      setCoin(0);
    }
  }
  function level(coin) {
    let level = 0;
    if (coin > 100) {
      level = 1;
    } else if (coin > 1000) {
      level = 2;
    } else if (coin > 2000) {
      level = 3;
    } else if (coin > 5000) {
      level = 4;
    } else if (coin > 10000) {
      level = 5;
    } else if (coin > 20000) {
      level = 6;
    } else if (coin > 100000) {
      level = 7;
    }
  }
  async function grade(level) {
    let gradeV;
    switch (level) {
      case 0:
        gradeV = "Stone";
        break;
      case 1:
        gradeV = "Bronze";
        break;
      case 2:
        gradeV = "Sliver";
        break;
      case 3:
        gradeV = "Gold";
        break;
      case 4:
        gradeV = "Diamond";
        break;
      case 5:
        gradeV = "Master";
        break;
      case 6:
        gradeV = "Grand Master";
        break;
      case 7:
        gradeV = "Challenger";
        break;
    }
  }
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.textH1}>
          현재 당신의 돈은 <Text style={styles.red}>{coin.toFixed(0)} </Text>
          골드입니다.
        </Text>
        <Text style={styles.textH1}>
          Your gold is <Text style={styles.red}>{coin.toFixed(0)}</Text> .
        </Text>
        <Text style={styles.textH1}></Text>
        {/* <Text>남은 무료자본 횟수 {coin} .</Text> */}
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>카지노에 오신 여러분을 환영합니다 !</Text>
        <Text>무한한 영광을 위하여 !</Text>
        <Button title="100원만 주십쇼.." onPress={() => oneCoin()}></Button>
        <Button
          title="80% 확률로 1.1배 !"
          onPress={() => gamble(80, 1.1)}
        ></Button>
        <Button
          title="70% 확률로 1.2배 !"
          onPress={() => gamble(70, 1.2)}
        ></Button>
        <Button
          title="50% 확률로 두배 !"
          onPress={() => gamble(50, 2)}
        ></Button>
        <Button
          title="25% 확률로 다섯배 !!"
          onPress={() => gamble(25, 5)}
        ></Button>
        <Button
          title="12% 확률로 열다섯배!"
          onPress={() => gamble(12, 15)}
        ></Button>
        <Button
          title="10% 확률로 오십배!"
          onPress={() => gamble(10, 50)}
        ></Button>
        <Button
          title="1% 확률로 천배 !!!"
          onPress={() => gamble(1, 1000)}
        ></Button>
        <Button
          title="게임 승리에 도전 !!!! 확률: 불가능"
          onPress={() => gamble(0, 1000)}
        ></Button>
      </View>
    </>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            } else if (route.name === "Settings") {
              iconName = focused ? "ios-list-box" : "ios-list";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
const styles = StyleSheet.create({
  red: { color: "red" },
  textH1: { fontSize: 20 },
  text: { fontWeight: "bold" },
  header: {
    flex: 0,
    alignItems: "center",
    marginTop: 150,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
