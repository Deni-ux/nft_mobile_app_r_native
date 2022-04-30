import react from "react";
import {
  View,
  SafeAreaView,
  Image,
  StatusBar,
  FlatList,
  Text,
} from "react-native";

import { COLORS, SIZES, SHADOWS, FONTS, assets } from "../constants";
import {
  CircleButton,
  RectaButton,
  SubInfo,
  FocusedStatusBar,
  DetailsDesc,
  DetailsBid,
} from "../components";

//navigation from app.js; route is an object who contains diff params
const Details = ({ route, navigation }) => {
  const { data } = route.params;

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          zIndex: 1,
        }}
      >
        <RectaButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>
      <FlatList
        data={data.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
         ListHeaderComponent={() => (
                  <React.Fragment>
                      <DetailsHeader />
            </React.Fragment>
        )}
      />
    </SafeAreaView>
  );
};

export default Details;
