import { useAuth } from '@clerk/expo'
import { Redirect, Slot } from 'expo-router'
import { ConversationProvider } from '@elevenlabs/react-native';

export default function Layout() {
  const { isSignedIn, isLoaded } = useAuth()

  if (!isLoaded) {
    return null
  }

  if (!isSignedIn) {
    return <Redirect href="/(auth)/sign-in" />
  }

  return (
    <ConversationProvider>
        <Slot/>
    </ConversationProvider>
  )
}