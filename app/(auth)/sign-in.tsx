import { AuthView } from '@clerk/expo/native';
import { View, StyleSheet } from 'react-native';
import { useAuth } from '@clerk/expo'
import { useRouter } from 'expo-router'
import { useEffect } from 'react'

export default function SignInScreen() {
    const { isSignedIn } = useAuth({ treatPendingAsSignedOut: false })
    const router = useRouter()

    useEffect(() => {
        if (isSignedIn) {
            router.replace('/(protected)')
        }
    }, [isSignedIn])

    return (
        <View style={styles.container}>
            <View style={styles.authViewWrapper}>
                <AuthView mode="signInOrUp" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"black"
    },

    authViewWrapper: {
        width: "98%",
        height: 600
    }
})