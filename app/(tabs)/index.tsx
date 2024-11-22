import { StyleSheet, View, Image } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { CardPet } from "@/components/pets/CardPet";
import { IconButton } from "@/components/IconButton";
import { useMemo } from "react";
import { router } from "expo-router";

import useAxios from "@/hooks/useAxios";
import { Progress } from "@/components/Progress";
import { HeaderProfile } from "@/components/layout/HeaderProfile";
import { Theme } from "@/constants/pet";
import { useUser } from "@/app/ctx";
import { EUserRole } from "@/constants/user";
import { Entypo, FontAwesome5, FontAwesome6 } from "@expo/vector-icons";
import { ThemedText } from "@/components/ThemedText";
import { ThemedButton } from "@/components/ThemedButton";
import Paw from "@/assets/images/Paw";
import { Dimensions } from "@/constants/Diamensions";
import NewsPaper from "@/assets/images/NewsPaper";
import Diversity3 from "@/assets/images/Diversity3";
import Person from "@/assets/images/Person";
import { IPagination } from "@/interface/global";
import { IPet } from "@/interface/pet";

export default function HomePage() {
  const user = useUser();

  const menuList = useMemo(
    () => [
      {
        icon: (
          <Paw
            height={Dimensions.percentageHeight(4.27)}
            color={Colors.light.semantic.warning}
          />
        ),
        title: "สัตว์เลี้ยง",
        path: "/pets",
      },
      {
        icon: (
          <NewsPaper
            height={Dimensions.percentageHeight(4.27)}
            color={Colors.light.semantic.info}
          />
        ),
        title: "โพสต์ข่าวสาร",
        path: "/news",
      },
      {
        // icon: (
        //   // <History
        //   //   height={Dimensions.percentageHeight(4.27)}
        //   //   color={Colors.light.neutral[2]}
        //   // />
        // ),
        title: user.data?.role.includes(EUserRole.USER)
          ? "ประวัติการรับสัตว์เลี้ยง"
          : "ประวัติการส่งมอบสัตว์เลี้ยง",
        path: "/transactions",
      },
      ...(user.data?.role.includes(EUserRole.ADMIN)
        ? [
            {
              icon: (
                <Diversity3
                  height={Dimensions.percentageHeight(4.27)}
                  color={Colors.light.semantic.success}
                />
              ),
              title: "อาสาสมัคร",
              path: `/users?role=${EUserRole.AGENCY}`,
            },
          ]
        : []),
      ...(user.data?.role.includes(EUserRole.ADMIN)
        ? [
            {
              icon: (
                <Person
                  height={Dimensions.percentageHeight(4.27)}
                  color={Colors.light.primary[3]}
                />
              ),
              title: "ผู้ต้องการรับเลี้ยงสัตว์",
              path: `/users?role=${EUserRole.USER}`,
            },
          ]
        : []),
        ...(user.data?.role.includes(EUserRole.USER)
        ? [
      {
        icon: (
          <Entypo
            name="shop"
            size={Dimensions.percentageHeight(4.27)}
            color={Colors.light.semantic.error}
          />
        ),
        title: "ร้านค้า",
        path: "/store",
      },
    ]
    : []),
      {
        icon: (
          // <Entypo
          //   name="shop"
          //   size={Dimensions.percentageHeight(4.27)}
          //   color={Colors.light.semantic.error}
          // />
          <FontAwesome6 name="people-roof" size={Dimensions.percentageHeight(3.7)} color={Colors.light.semantic.info} />
        ),
        title: "ชุมชน",
        path: "/posts",
      },
      ...(user.data?.role.includes(EUserRole.USER)
        ? [
            {
              icon: (
                <FontAwesome5
                  name="donate"
                  size={Dimensions.percentageHeight(4.27)}
                  color={Colors.light.semantic.success}
                />
              ),
              title: "บริจาค",
              path: "/donate",
            },
          ]
        : []),
      // ...(user.data?.role.includes(EUserRole.USER)
      //   ? [
      //       {
      //         icon: (
      //           <FontAwesome5
      //             name="donate"
      //             size={Dimensions.percentageHeight(4.27)}
      //             color={Colors.light.semantic.success}
      //           />
      //         ),
      //         title: "บริจาค",
      //         path: `/transactions/delivery-form/6713903e85421f750f4decd6`,
      //       },
      //     ]
      //   : []),
    ],
    [user.data]
  );

  const petsList = useAxios<IPagination<IPet>>({
    method: "GET",
    url: "/pet",
    params: {
      page: 1,
      perPage: 1,
    },
  });

  if (petsList.isLoading) {
    return <Progress />;
  }

  return (
    <ThemedView style={styles.container}>
      <View style={styles.headerProfile}>
        <HeaderProfile />
      </View>
      <View style={styles.cardContainer}>
        {petsList.data?.data?.[0] && (
          <CardPet
            name={petsList.data?.data?.[0]?.nickname}
            description={petsList.data?.data?.[0]?.notes}
            identityNumber={petsList.data?.data?.[0]?._numberId}
            birthDate={new Date(petsList.data?.data?.[0]?.birthdayAt)}
            theme={petsList.data?.data?.[0]?.theme || Theme.GREEN}
            image={petsList.data?.data?.[0]?.images?.[0] || ""}
            gender={petsList.data.data?.[0].gender}
          />
        )}
        <View style={styles.menuContainer}>
          {menuList.map((menu, index) => (
            <IconButton
              key={index}
              title={menu.title}
              icon={menu.icon}
              onPress={() => router.navigate(menu.path as any)}
            />
          ))}
        </View>
      </View>

      {/* Conditionally render advert if the user's role is USER */}
      {user.data?.role.includes(EUserRole.USER) && (
        <View style={styles.advert}>
          <Image
            source={require("../../assets/images/petFood.png")}
            style={styles.logoImage}
            resizeMode="contain"
          />
          <View style={styles.TextAndButton}>
            <ThemedText type="title1" color={Colors.light.semantic.error}>
              PetDooDee
            </ThemedText>
            <ThemedButton
              width={Dimensions.percentageWidth(25.64)}
              height={Dimensions.percentageHeight(4.74)}
              title="ซื้อเลย!"
              titleType="body3"
              borderRadius={Dimensions.percentageWidth(7.69)}
              color={Colors.light.semantic.error}
              // onPress={onPress}  // Only the button triggers the onPress event
            />
          </View>
        </View>
       )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.light.primary[1],
    paddingTop: Dimensions.percentageHeight(7.11),
    width: Dimensions.width,
    height: Dimensions.height,
  },
  cardContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: Colors.light.neutral[6],
    padding: "6.4%",
    zIndex: 1,
  },
  menuContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: "8.5%",
    width: "100%",
    flexWrap: "wrap",
    gap: Dimensions.percentageWidth(6.09),
  },
  headerProfile: {
    zIndex: 999,
  },
  advert: {
    flexDirection: "row",
    // justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
    width: Dimensions.width,
    height: Dimensions.percentageHeight(11.85),
    backgroundColor: "#ffe683",
    paddingHorizontal: Dimensions.percentageWidth(5.13),
    gap: Dimensions.percentageWidth(12.82),
  },
  logoImage: {
    // marginLeft:20,
    width: Dimensions.percentageWidth(25.64), // Set desired width for the image
    height: Dimensions.percentageHeight(11.85), // Set desired height for the image
    // backgroundColor:"green",
    // marginRight:50
  },
  TextAndButton: {
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor:"pink",
    height: Dimensions.percentageHeight(11.85),
  },
});
