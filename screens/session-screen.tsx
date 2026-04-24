import { Gradient } from '@/components/gradient';
import { useConversationControls, useConversationStatus } from '@elevenlabs/react-native';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function SessionScreen() {
    const { startSession, endSession } = useConversationControls();
    const { status } = useConversationStatus();

    const isConnected = status === 'connected';
    const isConnecting = status === 'connecting';

    const handleStart = async () => {
        await startSession({
            agentId: process.env.EXPO_PUBLIC_ELEVENLABS_AGENT_ID,
        });
    };

    return (
        <>
            <Gradient position='bottom' isSpeaking={isConnected} />
            <View style={styles.container}>
                <Text style={styles.status}>{status}</Text>
                <Pressable
                    onPress={isConnected ? endSession : handleStart}
                    disabled={isConnecting}
                    style={({ pressed }) => [
                        styles.button,
                        isConnected && styles.buttonEnd,
                        pressed && styles.buttonPressed,
                        isConnecting && styles.buttonDisabled,
                    ]}
                >
                    <Text style={styles.buttonText}>
                        {isConnected ? 'End session' : isConnecting ? 'Connecting...' : 'Begin session'}
                    </Text>
                </Pressable>
            </View>
        </>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 80,
        paddingBottom: 60,
        paddingHorizontal: 24,
    },
    status: {
        fontSize: 13,
        color: 'rgba(30, 60, 90, 0.7)',
        textTransform: 'uppercase',
        letterSpacing: 2,
        fontWeight: '500',
    },
    button: {
        paddingHorizontal: 56,
        paddingVertical: 18,
        borderRadius: 999,
        backgroundColor: '#000',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.3)',
        minWidth: 240,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 4,
    },
    buttonEnd: {
        backgroundColor: 'rgba(180, 50, 50, 0.85)',
    },
    buttonPressed: {
        opacity: 0.8,
        transform: [{ scale: 0.98 }],
    },
    buttonDisabled: {
        opacity: 0.5,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#ffffff',
        letterSpacing: 0.5,
    },
});