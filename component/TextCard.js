import { StyleSheet, Text, View, TouchableOpacity, Share } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function TextCard({
  number,
  meaning,
  iconName,
  iconSize,
  iconColor,
  cardTitle,
  refText,
  textDetails,
  onPressDetails,
  onPressLove,
}) {
  const onPressShare = async () => {
    try {
      const result = await Share.share({
        message: textDetails + meaning,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  const [liked, setLiked] = useState(true);
  return (
    <TouchableOpacity onPress={onPressDetails}>
      <View style={styles.card1}>
        <View style={styles.cardhead}>
          <MaterialCommunityIcons
            name={iconName}
            size={iconSize}
            color={iconColor}
          />
          {/* <View style={{ flexDirection: "row", justifyContent: "space-between" }}> */}
          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: "bold" }}> {cardTitle} </Text>
            {refText && <Text style={{ margin: 5 }}>{refText} </Text>}
          </View>
          <TouchableOpacity onPress={() => setLiked(!liked)}>
            <MaterialCommunityIcons
              name={liked ? "cards-heart-outline" : "heart"}
              size={30}
              color={iconColor}
            />
          </TouchableOpacity>
          {/* </View> */}
        </View>
        <View style={styles.cardbody}>
          <Text> {number}</Text>
          <Text> {textDetails}</Text>
          <Text> {meaning}</Text>
        </View>
        <View style={styles.cardfooter}>
          <TouchableOpacity onPress={onPressShare}>
            <MaterialCommunityIcons
              name={"share"}
              size={iconSize}
              color={iconColor}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressDetails}>
            <MaterialCommunityIcons
              name={"page-next"}
              size={iconSize}
              color={iconColor}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card1: {
    flex: 1,
    backgroundColor: "skyblue",
    padding: 5,
    borderRadius: 15,
    margin: 5,
  },
  cardhead: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  cardbody: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  cardfooter: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
