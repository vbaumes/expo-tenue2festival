import { LinearGradient } from "expo-linear-gradient";
import { Text } from 'react-native';
import React from "react";

type GradientTextProps = {
    style: Object,
    text: String
};

export default function MyGradientText({
    style,
    text
}: GradientTextProps) {
  return (
    <LinearGradient
      colors={["#7613A5", "#C71BBC", "#BC8917"]}
      end={{ x: .8, y: 1 }}
          >
        <Text style={[style, { opacity: 1 }]}>{text}</Text>
    </LinearGradient>
  );
}