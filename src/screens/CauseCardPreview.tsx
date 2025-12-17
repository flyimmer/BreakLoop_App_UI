import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { CauseCard } from '../components/CauseCard';
import { InterventionLayout } from '../layouts/InterventionLayout';

/**
 * Preview screen for CauseCard component
 * Demonstrates selection behavior in a grid layout
 * 
 * Note: Vertical positioning delegated to InterventionLayout
 */
const CauseCardPreview: React.FC = () => {
  const [selectedCauses, setSelectedCauses] = useState<Set<string>>(new Set());

  const causes = [
    'Boredom',
    'Anxiety',
    'Fatigue',
    'Loneliness',
    'Self-doubt',
    'No goal',
  ];

  const toggleCause = (cause: string) => {
    setSelectedCauses((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(cause)) {
        newSet.delete(cause);
      } else {
        newSet.add(cause);
      }
      return newSet;
    });
  };

  return (
    <InterventionLayout
      header={
        <View style={styles.header}>
          <Text style={styles.title}>What's triggering this urge?</Text>
          <Text style={styles.subtitle}>Select what feels true</Text>
        </View>
      }
    >
      <View style={styles.grid}>
        {causes.map((cause) => (
          <View key={cause} style={styles.cardWrapper}>
            <CauseCard
              label={cause}
              selected={selectedCauses.has(cause)}
              onPress={() => toggleCause(cause)}
            />
          </View>
        ))}
      </View>
    </InterventionLayout>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24, // h2
    lineHeight: 32,
    fontWeight: '600',
    letterSpacing: -0.3,
    color: '#FAFAFA', // textPrimary
    textAlign: 'center',
    marginBottom: 8, // space_8
  },
  subtitle: {
    fontSize: 14, // bodySecondary
    lineHeight: 20,
    fontWeight: '400',
    color: '#A1A1AA', // textSecondary
    textAlign: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12, // space_12
    justifyContent: 'center',
  },
  cardWrapper: {
    width: '47%', // 2 columns with gap
  },
});
export default CauseCardPreview;

