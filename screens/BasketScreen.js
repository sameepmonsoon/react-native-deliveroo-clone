import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selecBasketItems } from "../Store/cartSlice";
import { selecRestaurantItems } from "../Store/restaurantSlice";
import Cross from "react-native-vector-icons/Entypo";

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selecRestaurantItems);
  const items = useSelector(selecRestaurantItems);
  const dispatch = useDispatch();
  const [groupedBasketItems, setGroupedBasketItems] = useState([]);

  useMemo(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[items.id] || []).push(item);
      return results;
    });
    setGroupedBasketItems(groupedItems);
  }, [items]);
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#f0f0f0",
        zIndex: 10,
        height: "100%",
        position: "relative",
        Top: 10,
        marginTop: 27,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 25,
      }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "white",
            alignItems: "center",
            height: 100,
            width: "100%",
          }}>
          <Text style={{ fontSize: 18, fontWeight: 700 }}>Basket</Text>
          <Text style={{ fontWeight: 600, color: "grey" }}>Nando's</Text>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Cross
            name="circle-with-cross"
            size={37}
            color="#00ccbb"
            style={{ position: "absolute", right: 20 }}
            onPress={navigation.goBack}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            backgroundColor: "white",
            alignItems: "center",
            height: 70,
            flex: 1,
            gap: 10,
            paddingHorizontal: 10,
            width: "100%",
          }}>
          <Image
            source={{ uri: "https://links.papareact.com/wru" }}
            style={{
              height: 40,
              width: 40,
              borderRadius: 100,
            }}
          />
          <Text style={{ fontWeight: 600 }}>Deliver in 50-75 min</Text>
          <Text
            style={{
              fontWeight: 600,
              color: "#00ccbb",
              position: "absolute",
              right: 20,
            }}>
            Change
          </Text>
        </View>
      </View>

      <ScrollView style={{ width: "100%", paddingBottom: 50 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            width: "100%",
          }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              height: 70,
              flex: 1,
              gap: 10,
              paddingHorizontal: 10,
              width: "100%",
            }}>
            <Text
              style={{
                fontWeight: 600,
                fontSize: 16,
                width: 30,
                color: "#00ccbb",
              }}>
              5 x
            </Text>

            <Image
              source={{ uri: "https://links.papareact.com/wru" }}
              style={{
                height: 50,
                width: 50,
                borderRadius: 100,
              }}
            />
            <Text style={{ fontWeight: 600, fontSize: 16 }}>Nando's</Text>
            <View
              style={{
                position: "absolute",
                right: 20,
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 10,
              }}>
              <Text
                style={{
                  fontWeight: 600,
                  color: "grey",
                }}>
                Rs.300
              </Text>
              <Text
                style={{
                  fontWeight: 600,
                  color: "#00ccbb",
                }}>
                Remove
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            width: "100%",
          }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              height: 70,
              flex: 1,
              gap: 10,
              paddingHorizontal: 10,
              width: "100%",
            }}>
            <Text
              style={{
                fontWeight: 600,
                fontSize: 16,
                width: 30,
                color: "#00ccbb",
              }}>
              3 x
            </Text>

            <Image
              source={{ uri: "https://links.papareact.com/wru" }}
              style={{
                height: 50,
                width: 50,
                borderRadius: 100,
              }}
            />
            <Text style={{ fontWeight: 600, fontSize: 16 }}>Nando's</Text>
            <View
              style={{
                position: "absolute",
                right: 20,
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 10,
              }}>
              <Text
                style={{
                  fontWeight: 600,
                  color: "grey",
                }}>
                Rs.300
              </Text>
              <Text
                style={{
                  fontWeight: 600,
                  color: "#00ccbb",
                }}>
                Remove
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            width: "100%",
          }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              height: 70,
              flex: 1,
              gap: 10,
              paddingHorizontal: 10,
              width: "100%",
            }}>
            <Text
              style={{
                fontWeight: 600,
                fontSize: 16,
                width: 30,
                color: "#00ccbb",
              }}>
              2 x
            </Text>

            <Image
              source={{ uri: "https://links.papareact.com/wru" }}
              style={{
                height: 50,
                width: 50,
                borderRadius: 100,
              }}
            />
            <Text style={{ fontWeight: 600, fontSize: 16 }}>Nando's</Text>
            <View
              style={{
                position: "absolute",
                right: 20,
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 10,
              }}>
              <Text
                style={{
                  fontWeight: 600,
                  color: "grey",
                }}>
                Rs.300
              </Text>
              <Text
                style={{
                  fontWeight: 600,
                  color: "#00ccbb",
                }}>
                Remove
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            width: "100%",
          }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              height: 70,
              flex: 1,
              gap: 10,
              paddingHorizontal: 10,
              width: "100%",
            }}>
            <Text
              style={{
                fontWeight: 600,
                fontSize: 16,
                width: 30,
                color: "#00ccbb",
              }}>
              1 x
            </Text>

            <Image
              source={{ uri: "https://links.papareact.com/wru" }}
              style={{
                height: 50,
                width: 50,
                borderRadius: 100,
              }}
            />
            <Text style={{ fontWeight: 600, fontSize: 16 }}>Nando's</Text>
            <View
              style={{
                position: "absolute",
                right: 20,
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 10,
              }}>
              <Text
                style={{
                  fontWeight: 600,
                  color: "grey",
                }}>
                Rs.300
              </Text>
              <Text
                style={{
                  fontWeight: 600,
                  color: "#00ccbb",
                }}>
                Remove
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            width: "100%",
          }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              height: 70,
              flex: 1,
              gap: 10,
              paddingHorizontal: 10,
              width: "100%",
            }}>
            <Text
              style={{
                fontWeight: 600,
                fontSize: 16,
                width: 30,
                color: "#00ccbb",
              }}>
              2 x
            </Text>

            <Image
              source={{ uri: "https://links.papareact.com/wru" }}
              style={{
                height: 50,
                width: 50,
                borderRadius: 100,
              }}
            />
            <Text style={{ fontWeight: 600, fontSize: 16 }}>Nando's</Text>
            <View
              style={{
                position: "absolute",
                right: 20,
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 10,
              }}>
              <Text
                style={{
                  fontWeight: 600,
                  color: "grey",
                }}>
                Rs.300
              </Text>
              <Text
                style={{
                  fontWeight: 600,
                  color: "#00ccbb",
                }}>
                Remove
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            width: "100%",
          }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              height: 70,
              flex: 1,
              gap: 10,
              paddingHorizontal: 10,
              width: "100%",
            }}>
            <Text
              style={{
                fontWeight: 600,
                fontSize: 16,
                width: 30,
                color: "#00ccbb",
              }}>
              2 x
            </Text>

            <Image
              source={{ uri: "https://links.papareact.com/wru" }}
              style={{
                height: 50,
                width: 50,
                borderRadius: 100,
              }}
            />
            <Text style={{ fontWeight: 600, fontSize: 16 }}>Nando's</Text>
            <View
              style={{
                position: "absolute",
                right: 20,
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 10,
              }}>
              <Text
                style={{
                  fontWeight: 600,
                  color: "grey",
                }}>
                Rs.300
              </Text>
              <Text
                style={{
                  fontWeight: 600,
                  color: "#00ccbb",
                }}>
                Remove
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            width: "100%",
          }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              height: 70,
              flex: 1,
              gap: 10,
              paddingHorizontal: 10,
              width: "100%",
            }}>
            <Text
              style={{
                fontWeight: 600,
                fontSize: 16,
                width: 30,
                color: "#00ccbb",
              }}>
              2 x
            </Text>

            <Image
              source={{ uri: "https://links.papareact.com/wru" }}
              style={{
                height: 50,
                width: 50,
                borderRadius: 100,
              }}
            />
            <Text style={{ fontWeight: 600, fontSize: 16 }}>Nando's</Text>
            <View
              style={{
                position: "absolute",
                right: 20,
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 10,
              }}>
              <Text
                style={{
                  fontWeight: 600,
                  color: "grey",
                }}>
                Rs.300
              </Text>
              <Text
                style={{
                  fontWeight: 600,
                  color: "#00ccbb",
                }}>
                Remove
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            width: "100%",
          }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              height: 70,
              flex: 1,
              gap: 10,
              paddingHorizontal: 10,
              width: "100%",
            }}>
            <Text
              style={{
                fontWeight: 600,
                fontSize: 16,
                width: 30,
                color: "#00ccbb",
              }}>
              2 x
            </Text>

            <Image
              source={{ uri: "https://links.papareact.com/wru" }}
              style={{
                height: 50,
                width: 50,
                borderRadius: 100,
              }}
            />
            <Text style={{ fontWeight: 600, fontSize: 16 }}>Nando's</Text>
            <View
              style={{
                position: "absolute",
                right: 20,
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 10,
              }}>
              <Text
                style={{
                  fontWeight: 600,
                  color: "grey",
                }}>
                Rs.300
              </Text>
              <Text
                style={{
                  fontWeight: 600,
                  color: "#00ccbb",
                }}>
                Remove
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            width: "100%",
          }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              height: 70,
              flex: 1,
              gap: 10,
              paddingHorizontal: 10,
              width: "100%",
            }}>
            <Text
              style={{
                fontWeight: 600,
                fontSize: 16,
                width: 30,
                color: "#00ccbb",
              }}>
              2 x
            </Text>

            <Image
              source={{ uri: "https://links.papareact.com/wru" }}
              style={{
                height: 50,
                width: 50,
                borderRadius: 100,
              }}
            />
            <Text style={{ fontWeight: 600, fontSize: 16 }}>Nando's</Text>
            <View
              style={{
                position: "absolute",
                right: 20,
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 10,
              }}>
              <Text
                style={{
                  fontWeight: 600,
                  color: "grey",
                }}>
                Rs.300
              </Text>
              <Text
                style={{
                  fontWeight: 600,
                  color: "#00ccbb",
                }}>
                Remove
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            width: "100%",
          }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              height: 70,
              flex: 1,
              gap: 10,
              paddingHorizontal: 10,
              width: "100%",
            }}>
            <Text
              style={{
                fontWeight: 600,
                fontSize: 16,
                width: 30,
                color: "#00ccbb",
              }}>
              2 x
            </Text>

            <Image
              source={{ uri: "https://links.papareact.com/wru" }}
              style={{
                height: 50,
                width: 50,
                borderRadius: 100,
              }}
            />
            <Text style={{ fontWeight: 600, fontSize: 16 }}>Nando's</Text>
            <View
              style={{
                position: "absolute",
                right: 20,
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 10,
              }}>
              <Text
                style={{
                  fontWeight: 600,
                  color: "grey",
                }}>
                Rs.300
              </Text>
              <Text
                style={{
                  fontWeight: 600,
                  color: "#00ccbb",
                }}>
                Remove
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          position: "absolute",
          paddingVertical: 15,
          gap: 10,
          bottom: 26,
          width: "100%",
          backgroundColor: "white",
          height: 200,
        }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              flex: 1,
              gap: 10,
              paddingHorizontal: 10,
              width: "100%",
            }}>
            <Text style={{ fontWeight: 600, fontSize: 16, color: "grey" }}>
              Subtotal
            </Text>
            <View
              style={{
                position: "absolute",
                right: 20,
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 10,
              }}>
              <Text
                style={{
                  fontWeight: 600,
                  color: "grey",
                }}>
                Rs.300
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              flex: 1,
              gap: 10,
              paddingHorizontal: 10,
              width: "100%",
            }}>
            <Text style={{ fontWeight: 600, fontSize: 16, color: "grey" }}>
              Delivery Fee
            </Text>
            <View
              style={{
                position: "absolute",
                right: 20,
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 10,
              }}>
              <Text
                style={{
                  fontWeight: 600,
                  color: "grey",
                }}>
                Rs.300
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              flex: 1,
              gap: 10,
              paddingHorizontal: 10,
              width: "100%",
            }}>
            <Text style={{ fontWeight: 600, fontSize: 16 }}>Order Total</Text>
            <View
              style={{
                position: "absolute",
                right: 20,
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 10,
              }}>
              <Text
                style={{
                  fontWeight: 600,
                }}>
                Rs.300
              </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={{
            zIndex: 1,
            width: "95%",
            borderRadius: 10,
            flexDirection: "row",
            justifyContent: "center",
            paddingHorizontal: 12,
            alignItems: "center",
            height: 61,
            backgroundColor: "#00ccbb",
            color: "white",
          }}
          onPress={() => navigation.navigate("Order")}>
          <Text style={{ color: "white", fontSize: 16, fontWeight: 700 }}>
            Place Order
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
