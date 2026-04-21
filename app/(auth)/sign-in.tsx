import { AuthView } from '@clerk/expo/native';
import { View, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { useAuth } from '@clerk/expo';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';

export default function SignInScreen() {
    const { isSignedIn } = useAuth({ treatPendingAsSignedOut: false });
    const router = useRouter();

    useEffect(() => {
        if (isSignedIn) {
            router.replace('/(protected)');
        }
    }, [isSignedIn]);

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
            <View style={styles.container}>
                <View style={styles.authViewWrapper}>
                    <AuthView mode="signInOrUp" />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    authViewWrapper: {
        width: '100%',
        maxWidth: 400,
        height: 600,
    },
});