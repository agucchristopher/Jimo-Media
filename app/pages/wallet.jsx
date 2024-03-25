import {
  Alert,
  Dimensions,
  FlatList,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../assets/data";
import InputText from "../../components/InputText";
import Button from "../../components/Button";
import { Svg, Path } from "react-native-svg";
import Dropdown from "../../components/Dropdown";
import banks from "../../assets/banks.json";
const wallet = () => {
  let [activeTab, setActiveTab] = useState("Send Money");
  const [modal, setmodal] = useState(false);
  const [showbanks, setshowbanks] = useState(false);
  const [modal2, setmodal2] = useState(false);
  const [Bank, setBank] = useState("9mobile 9Payment Service Bank");
  const [accountNumber, setAccountNumber] = useState("");
  const [accountName, setAccountName] = useState();
  const [bid, setbid] = useState("");
  const [idnf, setidnf] = useState("");
  const [amount, setamount] = useState(0);
  const [loading, setloading] = useState(false);
  const [usernameModal, setusernameModal] = useState(false);
  const [username, setusername] = useState(false);
  const [modalBanks, setmodalBanks] = useState(banks);
  const [error, seterror] = useState(false);
  const [sendAmount, setsendamount] = useState(false);
  const [reason, setfor] = useState(false);
  useEffect(() => {
    setloading(false);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, padding: 0, backgroundColor: "white" }}>
      <ScrollView style={{ flex: 1, backgroundColor: "white", padding: 15 }}>
        <Text
          style={{
            fontSize: 20,
            color: "black",
            fontFamily: "PBold",
            textAlign: "center",
            marginTop: 30,
          }}
        >
          Welcome, Christopher
        </Text>
        <Text
          style={{
            fontSize: 25,
            color: "#4E636F",
            fontFamily: "MMedium",
            textAlign: "center",
            margin: 15,
            marginTop: 0,
            marginBottom: 35,
          }}
        >
          Balance: #20,000
        </Text>
        <View
          style={{
            flexDirection: "row",
            gap: 15,
            alignSelf: "center",
            marginBottom: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => setActiveTab("Send Money")}
            style={{
              backgroundColor:
                activeTab == "Send Money" ? Colors.primary : "grey",
              padding: 15,
              width: Dimensions.get("window").width * 0.35,
              borderRadius: 5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white", fontFamily: "MMedium" }}>
              Send Money
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActiveTab("Withdraw")}
            style={{
              backgroundColor:
                activeTab == "Withdraw" ? Colors.primary : "grey",
              padding: 15,
              width: Dimensions.get("window").width * 0.35,
              borderRadius: 5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white", fontFamily: "MMedium" }}>
              Withdraw
            </Text>
          </TouchableOpacity>
        </View>
        {activeTab == "Send Money" && (
          <View>
            <Text
              style={{
                fontSize: 20,
                color: "black",
                fontFamily: "MBold",
                textAlign: "left",
                marginTop: 30,
                marginLeft: 5,
                marginBottom: 15,
              }}
            >
              Send Money
            </Text>
            <Dropdown
              placeholder={"To"}
              inputPlaceholder={username ? username : "Username"}
              onPress={() => setusernameModal(true)}
            />
            <InputText
              placeholder={"Amount"}
              keyboardType={"numeric"}
              inputPlaceholder={"00.00"}
              onChangeText={(e) => setsendamount(e)}
            />
            <InputText
              placeholder={"For?"}
              inputPlaceholder={"Example, for birthday..."}
              onChangeText={(e) => setfor(e)}
            />
            <Button
              bg={Colors.primary}
              onPress={() => setmodal(true)}
              title={"Send Money"}
            />
            <Modal
              visible={modal}
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
                padding: 5,
              }}
              animationType="fade"
              transparent
            >
              <TouchableOpacity
                onPress={() => setmodal(false)}
                style={{
                  height: "100%",
                  backgroundColor: "#000",
                  // flex: 1,
                  opacity: 0.7,
                  alignSelf: "center",
                  justifyContent: "center",
                  width: "100%",
                  alignContent: "center",
                }}
              ></TouchableOpacity>
              <View
                onPress={() => setmodal(false)}
                style={{
                  height: "100%",
                  backgroundColor: "transparent",
                  alignSelf: "center",
                  justifyContent: "center",
                  width: "80%",
                  alignContent: "center",
                  position: "absolute",
                  borderRadius: 15,
                }}
              >
                <View
                  style={{
                    height: "30%",
                    backgroundColor: "white",
                    alignSelf: "center",
                    width: "95%",
                    alignContent: "center",
                    position: "absolute",
                    borderRadius: 15,
                    gap: 15,
                    padding: 10,
                  }}
                >
                  <TouchableOpacity
                    style={{
                      alignSelf: "flex-end",
                      margin: 5,
                      marginRight: 10,
                    }}
                    onPress={() => setmodal(false)}
                  >
                    <Svg
                      height={25}
                      width={25}
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <Path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z" />
                    </Svg>
                  </TouchableOpacity>
                  <Image
                    source={require("../../assets/Successmark.png")}
                    style={{ alignSelf: "center" }}
                  />
                  <Text
                    style={{
                      alignSelf: "center",
                      fontFamily: "MBold",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    Your transfer to Precious Ben is succesfull.
                  </Text>
                </View>
              </View>
            </Modal>
            <Modal
              visible={usernameModal}
              animationType="fade"
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
                padding: 5,
              }}
              transparent
            >
              <TouchableOpacity
                onPress={() => setshowbanks(false)}
                style={{
                  height: "100%",
                  backgroundColor: "#000",
                  // flex: 1,
                  opacity: 0.7,
                  alignSelf: "center",
                  justifyContent: "center",
                  width: "100%",
                  alignContent: "center",
                }}
              ></TouchableOpacity>
              <View
                onPress={() => setshowbanks(false)}
                style={{
                  height: "100%",
                  backgroundColor: "transparent",
                  alignSelf: "center",
                  justifyContent: "center",
                  width: "95%",
                  alignContent: "center",
                  position: "absolute",
                  borderRadius: 15,
                }}
              >
                <View
                  style={{
                    height: "50%",
                    backgroundColor: "white",
                    alignSelf: "center",
                    width: "95%",
                    alignContent: "center",
                    position: "absolute",
                    borderRadius: 30,
                    gap: 15,
                    padding: 10,
                  }}
                >
                  <TouchableOpacity
                    style={{
                      alignSelf: "flex-end",
                      margin: 5,
                      marginRight: 10,
                    }}
                    onPress={() => setusernameModal(false)}
                  >
                    <Svg
                      height={25}
                      width={25}
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <Path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z" />
                    </Svg>
                  </TouchableOpacity>
                  <TextInput
                    placeholder="@username.."
                    style={{
                      marginTop: 5,
                      height: 55,
                      flexDirection: "row",
                      width: Dimensions.get("screen").width * 0.85,
                      backgroundColor: "#F1F1F1",
                      borderRadius: 10,
                      alignItems: "center",
                      padding: 10,
                      paddingLeft: 15,
                    }}
                    onChangeText={(e) => {
                      let nb = banks?.filter((bank) =>
                        bank.name
                          .toLocaleLowerCase()
                          .includes(e.toLocaleLowerCase())
                      );
                      if (nb.length > 0) {
                        setmodalBanks(banks);
                      }
                      setmodalBanks(nb);
                    }}
                  ></TextInput>
                  <FlatList
                    contentContainerStyle={{ padding: 10 }}
                    data={modalBanks}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => {
                      return (
                        <TouchableOpacity
                          style={{
                            flexDirection: "row",
                            gap: 20,
                            height: 40,
                            margin: 5,
                          }}
                          onPress={() => {
                            setusername(item.name);
                            // setbid(item.code);
                            setusernameModal(false);
                            setmodalBanks(banks);
                          }}
                        >
                          {/* <Image
                            source={{ uri: item.logo }}
                            style={{
                              alignSelf: "center",
                              height: 40,
                              width: 40,
                              // borderRadius: 1000,
                              resizeMode: "cover",
                            }}
                          /> */}
                          <Text
                            style={{
                              alignSelf: "center",
                              fontFamily: "MBold",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: 18,
                            }}
                          >
                            {item.name}
                          </Text>
                        </TouchableOpacity>
                      );
                    }}
                  />
                </View>
              </View>
            </Modal>
          </View>
        )}
        {activeTab == "Withdraw" && (
          <ScrollView style={{ marginBottom: 5 }}>
            <Text
              style={{
                fontSize: 20,
                color: "black",
                fontFamily: "MBold",
                textAlign: "left",
                marginTop: 30,
                marginLeft: 5,
                marginBottom: 15,
              }}
            >
              Withdraw Money
            </Text>
            <Dropdown
              placeholder={"Bank Name"}
              inputPlaceholder={Bank}
              onPress={() => setshowbanks(true)}
            />
            <InputText
              placeholder={"Amount"}
              onChangeText={(e) => setamount(e)}
              keyboardType={"numeric"}
              inputPlaceholder={"00.00"}
            />
            <InputText
              placeholder={"Account Number"}
              onChangeText={(e) => setAccountNumber(e)}
              inputPlaceholder={"Enter your account number"}
            />
            <Button
              bg={Colors.primary}
              loading={loading}
              onPress={async () => {
                setloading(true);
                let headersList = {
                  Accept: "*/*",
                  "User-Agent":
                    "Thunder Client (https://www.thunderclient.com)",
                  Authorization:
                    "Bearer sk_test_c06570ae32e34cfb968c1745b1b6fdfb9a8b5b87",
                };
                banks?.filter((item) => {
                  setidnf(item.code == "999992");
                });
                let response = await fetch(
                  `https://api.paystack.co/bank/resolve?account_number=${accountNumber}&bank_code=${bid}`,
                  {
                    method: "GET",
                    headers: headersList,
                  }
                )
                  .finally(() => setloading(false))
                  .catch(() => {
                    setloading(false);
                    seterror(true);
                  });
                let data = await response.json().finally(() => {
                  setloading(false);
                  setmodal2(true);
                });
                console.log(data);
                if (data.status) {
                  let df = banks?.filter((bank) => {
                    return bank.id == data?.data?.bank_id;
                  });
                  console.log(df);
                  setidnf(df[0].name);
                  setAccountName(data.data.account_name);
                  console.log(data);
                  setloading(false);
                } else {
                  seterror(true);
                }
              }}
              title={" Withdraw"}
            />
            <Modal
              visible={modal2}
              animationType="fade"
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
                padding: 5,
              }}
              transparent
            >
              <TouchableOpacity
                onPress={() => setmodal2(false)}
                style={{
                  height: "100%",
                  backgroundColor: "#000",
                  // flex: 1,
                  opacity: 0.7,
                  alignSelf: "center",
                  justifyContent: "center",
                  width: "100%",
                  alignContent: "center",
                }}
              ></TouchableOpacity>
              <View
                onPress={() => setmodal2(false)}
                style={{
                  height: "100%",
                  backgroundColor: "transparent",
                  alignSelf: "center",
                  justifyContent: "center",
                  width: "80%",
                  alignContent: "center",
                  position: "absolute",
                  borderRadius: 15,
                }}
              >
                <View
                  style={{
                    height: "35%",
                    backgroundColor: "white",
                    alignSelf: "center",
                    width: "100%",
                    alignContent: "center",
                    position: "absolute",
                    borderRadius: 15,
                    gap: 15,
                    padding: 10,
                  }}
                >
                  <TouchableOpacity
                    style={{
                      alignSelf: "flex-end",
                      margin: 5,
                      marginRight: 10,
                    }}
                    onPress={() => {
                      seterror(false);
                      setmodal2(false);
                    }}
                  >
                    <Svg
                      height={25}
                      width={25}
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <Path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z" />
                    </Svg>
                  </TouchableOpacity>
                  {error == false && (
                    <>
                      <Image
                        source={require("../../assets/Successmark.png")}
                        style={{ alignSelf: "center" }}
                      />
                      <Text
                        style={{
                          alignSelf: "center",
                          fontFamily: "MBold",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        You have succesfully withdrawn ₦{amount} to{" "}
                        {accountName} - {idnf}
                      </Text>
                    </>
                  )}
                  {error == true && (
                    <>
                      <Image
                        source={require("../../assets/cross.png")}
                        style={{
                          alignSelf: "center",
                          height: 120,
                          width: 120,
                          resizeMode: "cover",
                        }}
                      />
                      <Text
                        style={{
                          alignSelf: "center",
                          fontFamily: "MBold",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        Something Went Wrong 😿
                      </Text>
                    </>
                  )}
                  <Text
                    style={{
                      alignSelf: "center",
                      fontFamily: "MBold",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  ></Text>
                </View>
              </View>
            </Modal>
            <Modal
              visible={showbanks}
              animationType="fade"
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
                padding: 5,
              }}
              transparent
            >
              <TouchableOpacity
                onPress={() => setshowbanks(false)}
                style={{
                  height: "100%",
                  backgroundColor: "#000",
                  // flex: 1,
                  opacity: 0.7,
                  alignSelf: "center",
                  justifyContent: "center",
                  width: "100%",
                  alignContent: "center",
                }}
              ></TouchableOpacity>
              <View
                onPress={() => setshowbanks(false)}
                style={{
                  height: "100%",
                  backgroundColor: "transparent",
                  alignSelf: "center",
                  justifyContent: "center",
                  width: "95%",
                  alignContent: "center",
                  position: "absolute",
                  borderRadius: 15,
                }}
              >
                <View
                  style={{
                    height: "60%",
                    backgroundColor: "white",
                    alignSelf: "center",
                    width: "95%",
                    alignContent: "center",
                    position: "absolute",
                    borderRadius: 30,
                    gap: 15,
                    padding: 10,
                  }}
                >
                  <TouchableOpacity
                    style={{
                      alignSelf: "flex-end",
                      margin: 5,
                      marginRight: 10,
                    }}
                    onPress={() => setshowbanks(false)}
                  >
                    <Svg
                      height={25}
                      width={25}
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <Path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z" />
                    </Svg>
                  </TouchableOpacity>
                  <TextInput
                    placeholder="Search.."
                    style={{
                      marginTop: 5,
                      height: 55,
                      flexDirection: "row",
                      width: Dimensions.get("screen").width * 0.85,
                      backgroundColor: "#F1F1F1",
                      borderRadius: 10,
                      alignItems: "center",
                      padding: 10,
                      paddingLeft: 15,
                    }}
                    onChangeText={(e) => {
                      let nb = banks?.filter((bank) =>
                        bank.name
                          .toLocaleLowerCase()
                          .includes(e.toLocaleLowerCase())
                      );
                      if (nb.length > 0) {
                        setmodalBanks(banks);
                      }
                      setmodalBanks(nb);
                    }}
                  ></TextInput>
                  <FlatList
                    contentContainerStyle={{ padding: 10 }}
                    data={modalBanks}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => {
                      return (
                        <TouchableOpacity
                          style={{
                            flexDirection: "row",
                            gap: 20,
                            height: 40,
                            margin: 5,
                          }}
                          onPress={() => {
                            setBank(item.name);
                            setbid(item.code);
                            setshowbanks(false);
                            setmodalBanks(banks);
                          }}
                        >
                          {/* <Image
                            source={{ uri: item.logo }}
                            style={{
                              alignSelf: "center",
                              height: 40,
                              width: 40,
                              // borderRadius: 1000,
                              resizeMode: "cover",
                            }}
                          /> */}
                          <Text
                            style={{
                              alignSelf: "center",
                              fontFamily: "MBold",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: 18,
                            }}
                          >
                            {item.name}
                          </Text>
                        </TouchableOpacity>
                      );
                    }}
                  />
                </View>
              </View>
            </Modal>
          </ScrollView>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default wallet;

const styles = StyleSheet.create({});