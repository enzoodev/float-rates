import { useCallback } from "react";
import { ActivityIndicator, FlatList, ListRenderItem, SafeAreaView, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useRateStore } from "@/store/useRateStore";

import { useAutoFetchRates } from "@/hooks/useAuthFetchRates";

import { TRate } from "@/domain/entities/Rate";

import { sortRatesByConversion } from "@/utils/sortRatesByConversion";

import { RateItem } from "@/components/RateItem";

import { styles } from './styles';

export const RatesList = () => {
    const insets = useSafeAreaInsets();
    const { rates, isLoading } = useRateStore();
    const sortedRates = sortRatesByConversion(rates);

    const keyExtractor = useCallback((item: TRate) => item.numericCode.toString(), []);
    
    const renderItem: ListRenderItem<TRate> = useCallback(({ item }) => {
        return (
            <RateItem
                item={item}
            />
        )
    }, [])

    useAutoFetchRates();

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            {isLoading ? (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator />
                </View>
            ) : (
                <FlatList
                    data={sortedRates}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                    contentContainerStyle={[styles.flatlist, { marginTop: insets.top, marginBottom: insets.bottom }]}
                />    
            )}
        </View>
    )
}