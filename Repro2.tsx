import { Text, View, Pressable } from "react-native";
import Animated, { LinearTransition } from "react-native-reanimated";
import { useState } from "react";

const data = Array.from({ length: 50 }, (_, i) => i + 1);

const Item = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    //Remove any styles on Animated View to fix performance (or remove unistyles babel plugin)
    <Animated.View style={{ width: "100%" }}>
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
    </Animated.View>
  );
};

export const Repro2 = () => {
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
