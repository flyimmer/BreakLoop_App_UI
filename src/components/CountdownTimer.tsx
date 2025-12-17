import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  AccessibilityInfo,
  useColorScheme,
} from 'react-native';

interface CountdownTimerProps {
  durationSeconds: number;
  remainingSeconds: number;
  state?: 'idle' | 'running' | 'paused' | 'complete';
  size?: 'small' | 'large';
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({
  durationSeconds,
  remainingSeconds,
  state = 'idle',
  size = 'large',
}) => {
  const scheme = useColorScheme();
  const isDark = scheme === 'dark';
  
  const pulseAnim = useRef(new Animated.Value(1)).current;
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const [reducedMotion, setReducedMotion] = React.useState(false);

  useEffect(() => {
    AccessibilityInfo.isReduceMotionEnabled().then(setReducedMotion);
  }, []);

  useEffect(() => {
    if (reducedMotion || state === 'complete') {
      pulseAnim.setValue(1);
      return;
    }

    if (state === 'running') {
      const breathing = Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, {
            toValue: 1.02,
            duration: 2000,
            useNativeDriver: true,
          }),
          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
          }),
        ])
      );
      breathing.start();
      return () => breathing.stop();
    }
  }, [state, reducedMotion, pulseAnim]);

  useEffect(() => {
    if (state === 'complete') {
      Animated.timing(fadeAnim, {
        toValue: 0.6,
        duration: 600,
        useNativeDriver: true,
      }).start();
    } else {
      fadeAnim.setValue(1);
    }
  }, [state, fadeAnim]);

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getAccessibilityLabel = (): string => {
    const mins = Math.floor(remainingSeconds / 60);
    const secs = remainingSeconds % 60;
    
    if (state === 'complete') {
      return 'Breathing complete';
    }
    
    let label = '';
    if (mins > 0) {
      label += `${mins} minute${mins === 1 ? '' : 's'}`;
      if (secs > 0) {
        label += ` and ${secs} second${secs === 1 ? '' : 's'}`;
      }
    } else {
      label = `${secs} second${secs === 1 ? '' : 's'}`;
    }
    label += ' remaining';
    
    return label;
  };

  const containerSize = size === 'large' ? 200 : 120;
  const timeSize = size === 'large' ? 'h1' : 'h2';
  const labelSize = size === 'large' ? 'bodySecondary' : 'caption';

  const colors = isDark ? styles.dark : styles.light;

  return (
    <Animated.View
      style={[
        styles.container,
        colors.container,
        {
          width: containerSize,
          height: containerSize,
          transform: [{ scale: pulseAnim }],
          opacity: fadeAnim,
        },
      ]}
      accessible={true}
      accessibilityRole="timer"
      accessibilityLabel={getAccessibilityLabel()}
      accessibilityLiveRegion="polite"
    >
      <View style={styles.content}>
        <Text style={[styles[timeSize], colors.timeText]}>
          {formatTime(remainingSeconds)}
        </Text>
        {state === 'running' && (
          <Text style={[styles[labelSize], colors.labelText]}>
            breathe
          </Text>
        )}
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 9999,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  content: {
    alignItems: 'center',
    gap: 8,
  },
  h1: {
    fontSize: 32,
    lineHeight: 40,
    fontWeight: '600',
    letterSpacing: -0.5,
  },
  h2: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '600',
    letterSpacing: -0.3,
  },
  bodySecondary: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
    letterSpacing: 0,
  },
  caption: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '500',
    letterSpacing: 0.3,
  },
  dark: {
    container: {
      backgroundColor: 'rgba(24, 24, 27, 0.7)',
      shadowColor: '#000000',
      shadowOpacity: 0.4,
    },
    timeText: {
      color: '#FAFAFA',
    },
    labelText: {
      color: '#A1A1AA',
    },
  },
  light: {
    container: {
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      shadowColor: '#000000',
      shadowOpacity: 0.08,
    },
    timeText: {
      color: '#18181B',
    },
    labelText: {
      color: '#52525B',
    },
  },
});

