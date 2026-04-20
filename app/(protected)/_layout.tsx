import { useAuth } from '@clerk/expo'
import { Redirect, Slot } from 'expo-router'

export default function Layout() {
  const { isSignedIn, isLoaded } = useAuth()

  if (!isLoaded) {
    return null
  }

  if (!isSignedIn) {
    return <Redirect href="/(auth)/sign-in" />
  }

  return <Slot />
}