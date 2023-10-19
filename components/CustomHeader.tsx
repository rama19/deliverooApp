import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React, { useRef } from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomSheet from './BottomSheet';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

const SearchBar = () => (
    <View style={styles.searchContainer}>
        <View style={styles.searchSection}>
            <View style={styles.searchField}>
                <Ionicons style={styles.searchIcon} name='ios-search' size={20} color={Colors.medium} />
                <TextInput style={styles.input} placeholder='Restaurants, groceries, dishes' />
            </View>
            <Link href={'/modal/filter'} asChild>
                <TouchableOpacity style={styles.searchField}>
                    <Ionicons name='options-outline' size={20} color={Colors.primary} />
                </TouchableOpacity>
            </Link>
        </View>
    </View>
);

const CustomHeader = () => {
    const bottomSheetRef = useRef<BottomSheetModal>(null);

    const openModal = () => {
        bottomSheetRef.current?.present();
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <BottomSheet ref={bottomSheetRef}/>
            <View style={styles.container}>
                <TouchableOpacity style={styles.bikeHolder} onPress={openModal}>
                    <Image style={styles.bike} source={require('@/assets/images/bike.png')} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.titleContainer} onPress={openModal}>
                    <Text style={styles.title}>Delivery · Now</Text>
                    <View style={styles.locationName}>
                        <Text style={styles.subtitle}>London</Text>
                        <Ionicons name='chevron-down' size={20} color={Colors.primary} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.profileButton}>
                    <Ionicons name='person-outline' size={20} color={Colors.primary} />
                </TouchableOpacity>
            </View>
            <SearchBar />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        height: 60,
        flexDirection: 'row',
        gap: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    bikeTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    bikeHolder: {
        paddingRight: 20,
    },
    bike: {
        width: 30,
        height: 30,
    },
    titleContainer: {
        flex: 1,
    },
    profileButton: {
        backgroundColor: Colors.lightGrey,
        padding: 10,
        borderRadius: 50,
    },
    title: {
        fontSize: 14,
        color: Colors.medium,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    locationName: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchContainer: {
        height: 60,
        backgroundColor: '#fff',
    },
    searchSection: {
        flexDirection: 'row',
        gap: 10,
        flex: 1,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    searchField: {
        flex: 1,
        backgroundColor: Colors.lightGrey,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        padding: 10,
        color: Colors.mediumDark,
        width: '100%',
    },
    searchIcon: {
        paddingLeft: 10,
    },
    optionButton: {
        padding: 10,
        borderRadius: 50,
    },
});

export default CustomHeader;
