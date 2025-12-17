// src/screens/CountdownTimerPreview.tsx
import { View } from 'react-native'
import { CountdownTimer } from '@/components/CountdownTimer'

export default function CountdownTimerPreview() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000', // or use theme background
      }}
    >
      <CountdownTimer
        durationSeconds={120}
        remainingSeconds={90}
        state="running"
      />
    </View>
  )
}
