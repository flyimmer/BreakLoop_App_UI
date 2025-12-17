import React from 'react';
import { SafeAreaView, View } from 'react-native';

/**
 * InterventionLayout
 * 
 * Purpose: Anchor intervention decision moments in lower-middle of screen
 * (Breathing, Root Cause, Alternatives)
 * 
 * Intent:
 * - Content feels grounded, settled, non-interrogative
 * - Top of screen remains quiet and irrelevant
 * - Bottom padding defines the resting height of the decision zone
 * 
 * Tone: Ambient Hearth
 * - No borders, no decoration
 * - Space as emotional buffer
 * - Prioritizes grounding over density
 */

interface InterventionLayoutProps {
  header?: React.ReactNode;
  children: React.ReactNode;
}

export const InterventionLayout: React.FC<InterventionLayoutProps> = ({
  header,
  children,
}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#0A0A0B', // token: background (dark)
      }}
    >
      {/* Anchor content at bottom using flex-end gravity for perceptual weight */}
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          paddingHorizontal: 24, // token: space_24
          paddingBottom: 64, // token: space_64
          alignItems: 'center',
        }}
      >
        {/* Optional subtle dimming layer behind content */}
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.15)', // Very subtle dimming
          }}
          pointerEvents="none"
        />

        {/* Content container */}
        <View
          style={{
            width: '100%',
            maxWidth: 480,
          }}
        >
          {header && (
            <View style={{ marginBottom: 24 }}>
              {header}
            </View>
          )}

          {children}
        </View>
      </View>
    </SafeAreaView>
  );
};

