import { Text, View, Pressable } from "react-native";
import Animated, { LinearTransition } from "react-native-reanimated";
import { StyleSheet } from "react-native-unistyles";
import { useState } from "react";

const data = Array.from({ length: 50 }, (_, i) => i + 1);

const Item = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <View>
      <Pressable
        onPress={() => {
          setIsExpanded(!isExpanded);
        }}
        style={{
          height: 100,
          backgroundColor: "brown",
        }}
      >
        <Text style={{ color: "white" }}>
          {isExpanded ? "Collapse" : "Expand"}
        </Text>
      </Pressable>
      {isExpanded && (
        <View style={{ height: 100, width: "100%", backgroundColor: "black" }}>
          <Text style={{ color: "white" }}>Expanded Item</Text>
        </View>
      )}
    </View>
  );
};

export const Repro1 = () => {
  return (
    <Animated.FlatList
      itemLayoutAnimation={LinearTransition}
      data={data}
      contentContainerStyle={{
        rowGap: 10,
      }}
      renderItem={() => {
        return <Item />;
      }}
    />
  );
};

// Comment to fix performance
const styles = StyleSheet.create({});
