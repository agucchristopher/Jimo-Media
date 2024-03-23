import { Tabs } from "expo-router";
import { Path, Svg } from "react-native-svg";
import { Colors } from "../../assets/data";
import { Dimensions, Platform, StatusBar, Text } from "react-native";
export default () => {
  return (
    <>
      <StatusBar backgroundColor={"white"} />

      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            gap: 5,
            alignContent: "center",
            justifyContent: "center",
            height:
              Platform.OS == "android"
                ? Dimensions.get("screen").height * 0.08
                : Dimensions.get("screen").height * 0.1,
            paddingTop: 10,
            backgroundColor: "#f9f9f9",
            padding: 5,
          },
          tabBarLabel: ({ color, focused, children }) => {
            // if (focused) {
            return (
              <Text
                style={{
                  fontFamily: "MMedium",
                  fontSize: 12,
                  color: focused ? Colors.primary : "black",
                  marginTop: 10,
                }}
              >
                {/* <Svg
                    height={10}
                    width={10}
                    fill={colors.primary}
                    viewBox="0 0 200 200"
                  >
                    <Circle cx="100" cy="100" r="75" />
                  </Svg> */}
                {`${children}`.slice(0, 1).toUpperCase()}
                {`${children}`.slice(1, children.length)}
              </Text>
            );
            // }
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            tabBarIcon: ({ color, focused }) => {
              return (
                <Svg
                  height={25}
                  width={25}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill={"none"}
                >
                  {/* <Path
                      d="M2.35139 13.2135C1.99837 10.9162 1.82186 9.76763 2.25617 8.74938C2.69047 7.73112 3.65403 7.03443 5.58114 5.64106L7.02099 4.6C9.41829 2.86667 10.6169 2 12 2C13.3831 2 14.5817 2.86667 16.979 4.6L18.4189 5.64106C20.346 7.03443 21.3095 7.73112 21.7438 8.74938C22.1781 9.76763 22.0016 10.9162 21.6486 13.2135L21.3476 15.1724C20.8471 18.4289 20.5969 20.0572 19.429 21.0286C18.2611 22 16.5537 22 13.1388 22H10.8612C7.44633 22 5.73891 22 4.571 21.0286C3.40309 20.0572 3.15287 18.4289 2.65243 15.1724L2.35139 13.2135Z"
                      stroke={focused ? Colors.primary : "darkgrey"}
                      // fill={focused ? Colors.primary : "darkgrey"}
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    /> */}
                  <Path
                    d="M12 18L12 15"
                    // stroke-width="1.5"
                    stroke-linecap="round"
                    stroke={focused ? Colors.primary : "#141B34"}
                  />
                  <Path
                    d="M2.35139 13.2135C1.99837 10.9162 1.82186 9.76763 2.25617 8.74938C2.69047 7.73112 3.65403 7.03443 5.58114 5.64106L7.02099 4.6C9.41829 2.86667 10.6169 2 12 2C13.3831 2 14.5817 2.86667 16.979 4.6L18.4189 5.64106C20.346 7.03443 21.3095 7.73112 21.7438 8.74938C22.1781 9.76763 22.0016 10.9162 21.6486 13.2135L21.3476 15.1724C20.8471 18.4289 20.5969 20.0572 19.429 21.0286C18.2611 22 16.5537 22 13.1388 22H10.8612C7.44633 22 5.73891 22 4.571 21.0286C3.40309 20.0572 3.15287 18.4289 2.65243 15.1724L2.35139 13.2135Z"
                    // stroke-width="1.5"
                    stroke-linejoin="round"
                    stroke={focused ? Colors.primary : "#141B34"}
                  />
                </Svg>
              );
            },
          }}
        />
        <Tabs.Screen
          name="notifications"
          options={{
            tabBarIcon: ({ color, focused }) => {
              return (
                <Svg
                  height={25}
                  width={25}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill={"none"}
                >
                  {/* <Path
                      d="M2.35139 13.2135C1.99837 10.9162 1.82186 9.76763 2.25617 8.74938C2.69047 7.73112 3.65403 7.03443 5.58114 5.64106L7.02099 4.6C9.41829 2.86667 10.6169 2 12 2C13.3831 2 14.5817 2.86667 16.979 4.6L18.4189 5.64106C20.346 7.03443 21.3095 7.73112 21.7438 8.74938C22.1781 9.76763 22.0016 10.9162 21.6486 13.2135L21.3476 15.1724C20.8471 18.4289 20.5969 20.0572 19.429 21.0286C18.2611 22 16.5537 22 13.1388 22H10.8612C7.44633 22 5.73891 22 4.571 21.0286C3.40309 20.0572 3.15287 18.4289 2.65243 15.1724L2.35139 13.2135Z"
                      stroke={focused ? Colors.primary : "darkgrey"}
                      // fill={focused ? Colors.primary : "darkgrey"}
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    /> */}

                  <Path
                    d="M2.52992 14.394C2.31727 15.7471 3.268 16.6862 4.43205 17.1542C8.89481 18.9486 15.1052 18.9486 19.5679 17.1542C20.732 16.6862 21.6827 15.7471 21.4701 14.394C21.3394 13.5625 20.6932 12.8701 20.2144 12.194C19.5873 11.2975 19.525 10.3197 19.5249 9.27941C19.5249 5.2591 16.1559 2 12 2C7.84413 2 4.47513 5.2591 4.47513 9.27941C4.47503 10.3197 4.41272 11.2975 3.78561 12.194C3.30684 12.8701 2.66061 13.5625 2.52992 14.394Z"
                    //   stroke="#141B34"
                    // stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke={focused ? Colors.primary : "#141B34"}
                  />
                  <Path
                    d="M9 21C9.79613 21.6219 10.8475 22 12 22C13.1525 22 14.2039 21.6219 15 21"
                    //   stroke="#141B34"
                    stroke={focused ? Colors.primary : "#141B34"}
                    // stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </Svg>
              );
            },
          }}
        />
        <Tabs.Screen
          name="wallet"
          options={{
            tabBarIcon: ({ color, focused }) => {
              return (
                <Svg
                  height={25}
                  width={25}
                  xmlns="http://www.w3.org/2000/svg"
                  fill={"none"}
                  id="Layer_1"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                >
                  <Path
                    strokeWidth={1}
                    fill={focused ? Colors.primary : "#141B34"}
                    d="M21.5,6H4.5c-1.146,0-2.221-.567-2.872-1.499,.634-.907,1.685-1.501,2.872-1.501H23.5c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5H4.5C2.015,2,0,4.015,0,6.5v11c0,2.485,2.015,4.5,4.5,4.5H21.5c1.381,0,2.5-1.119,2.5-2.5V8.5c0-1.381-1.119-2.5-2.5-2.5Zm1.5,13.5c0,.827-.673,1.5-1.5,1.5H4.5c-1.93,0-3.5-1.57-3.5-3.5V6.5c0-.348,.051-.684,.146-1.001,.846,.942,2.064,1.501,3.354,1.501H21.5c.827,0,1.5,.673,1.5,1.5v11Zm-2-5.5c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Z"
                  />
                </Svg>
              );
            },
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ color, focused }) => {
              return (
                <Svg
                  height={25}
                  width={25}
                  xmlns="http://www.w3.org/2000/svg"
                  fill={"none"}
                  id="Layer_1"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                >
                  <Path
                    strokeWidth={1}
                    fill={focused ? Colors.primary : "#141B34"}
                    d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm-5,21.797v-3.297c0-.827.673-1.5,1.5-1.5h7c.827,0,1.5.673,1.5,1.5v3.297c-1.501.769-3.201,1.203-5,1.203s-3.499-.434-5-1.203Zm11-.582v-2.715c0-1.379-1.122-2.5-2.5-2.5h-7c-1.378,0-2.5,1.121-2.5,2.5v2.715c-3.008-1.965-5-5.362-5-9.215C1,5.935,5.935,1,12,1s11,4.935,11,11c0,3.853-1.992,7.25-5,9.215Zm-6-15.215c-2.206,0-4,1.794-4,4s1.794,4,4,4,4-1.794,4-4-1.794-4-4-4Zm0,7c-1.654,0-3-1.346-3-3s1.346-3,3-3,3,1.346,3,3-1.346,3-3,3Z"
                  />
                </Svg>
              );
            },
          }}
        />
      </Tabs>
    </>
  );
};
