import React from 'react';
import { Pressable, Text, StyleSheet, ViewStyle } from 'react-native';
import { elevationUsage, radiusUsage, surfaceUsage } from '../theme/theme';

interface CauseCardProps {
  label: string;
  selected?: boolean;
  onPress?: () => void;
}

/**
 * CauseCard - Soft, pillow-like selection card for root cause identification
 * 
 * Tone: Ambient Hearth
 * - Selection feels acknowledging, not committing
 * - User should feel seen, not evaluated
 * - Depth changes communicate state, not color contrast
 */
export const CauseCard: React.FC<CauseCardProps> = ({
  label,
  selected = false,
  onPress,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        // Surface: secondary → glass on selection (tone: soft acknowledgment)
        selected ? styles.surfaceSelected : styles.surfaceDefault,
        // Elevation: presence → focus on selection (tone: depth not contrast)
        selected ? styles.elevationSelected : styles.elevationDefault,
        // Pressed state: gentle opacity fade (tone: unhurried, no bounce)
        pressed && styles.pressed,
      ]}
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityState={{ selected }}
    >
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    // Radius: containment semantic (soft pillow feel)
    borderRadius: 16, // radius_16
    paddingVertical: 20, // space_20
    paddingHorizontal: 16, // space_16
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 80,
  },
  // Surface: secondary (visually recedes when unselected)
  surfaceDefault: {
    backgroundColor: '#27272A', // surfaceSecondary
  },
  // Surface: glass (acknowledges selection without strong emphasis)
  surfaceSelected: {
    backgroundColor: 'rgba(24, 24, 27, 0.7)', // surfaceGlass
  },
  // Elevation: presence level (ambient, unselected)
  elevationDefault: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 1, // elevation_1 (presence)
  },
  // Elevation: slightly increased depth for selection (not color)
  elevationSelected: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 2, // elevation_2 (focus)
  },
  // Pressed: brief opacity fade (tone: unhurried feedback)
  pressed: {
    opacity: 0.8, // opacity_hover
  },
  label: {
    fontSize: 16, // body
    lineHeight: 24,
    fontWeight: '400',
    letterSpacing: 0,
    color: '#FAFAFA', // textPrimary
    textAlign: 'center',
  },
});

