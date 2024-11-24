import React from "react";
import { View, StyleSheet, ScrollView, RefreshControl, ScrollViewProps } from "react-native";
import { ThemedText } from "./ThemedText";
import { Colors } from "@/constants/Colors";
import { Dimensions } from "@/constants/Diamensions";

interface RenderNoDataProps {
    refreshing: boolean;
    onRefresh: () => void;
}

export function RenderNoData({ refreshing, onRefresh }: RenderNoDataProps) {
    return (
        <ScrollView
            style={styles.scrollViewContainer}
            contentContainerStyle={styles.scrollViewContent}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
        >
            <View style={styles.noDataContainer}>
                <ThemedText type="title3" color={Colors.light.neutral[1]}>
                    ไม่มีข้อมูล
                </ThemedText>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollViewContainer: {
        width: Dimensions.width,
        height: Dimensions.height,
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    noDataContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
});
