# CauseCard Component

## Overview

`CauseCard` is a core decision UI component for the Root Cause Selection screen in the BreakLoop intervention flow. It embodies the Ambient Hearth tone philosophy: soft, acknowledging, and emotionally safe.

## Design Philosophy

### Tone: Ambient Hearth
- **Feels like a soft pillow, not a button**
- **Selection feels acknowledging, not committing**
- **User should feel seen, not evaluated**

### Visual Strategy
- **Depth over contrast**: Selection indicated by elevation change, not color shift
- **Soft containment**: `radius_16` creates pillow-like feel
- **Generous spacing**: Component designed for `space_24` vertical rhythm
- **No borders**: Surface + elevation provide all containment needed

## API

```typescript
interface CauseCardProps {
  label: string;      // Display text (e.g., "Boredom", "Anxiety")
  selected?: boolean; // Selection state
  onPress?: () => void; // Toggle handler
}
```

## Usage

```tsx
import { CauseCard } from '../components/CauseCard';

<CauseCard
  label="Boredom"
  selected={selectedCauses.has('boredom')}
  onPress={() => toggleCause('boredom')}
/>
```

## States

### Default (Unselected)
- **Surface**: `surfaceSecondary` (#27272A)
- **Elevation**: `elevation_1` (presence level)
- **Opacity**: 1.0

### Selected
- **Surface**: `surfaceGlass` (rgba(24, 24, 27, 0.7))
- **Elevation**: `elevation_2` (focus level)
- **Opacity**: 1.0
- **Transition**: Cross-dissolve (250ms standard duration)

### Pressed
- **Opacity**: 0.8 (`opacity_hover`)
- **Duration**: Brief, unhurried
- **No bounce or scale transforms**

## Accessibility

- **Role**: `button`
- **Label**: Component label text
- **State**: Reports `selected` state to screen readers
- **Touch target**: Minimum 80pt height for comfortable touch

## Motion Behavior

- **Pressed feedback**: Gentle opacity fade
- **Selection transition**: Cross-dissolve surface change
- **No animations**: scale, bounce, or slide transforms
- **Philosophy**: Unhurried, breathing-like feel

## Layout Recommendations

### Grid Context
- **Columns**: 2 per row (mobile)
- **Gap**: `space_12` (12pt)
- **Vertical rhythm**: `space_24` (24pt) between rows

### Container Padding
- **Horizontal**: `space_16` (16pt)
- **Vertical**: `space_20` (20pt) internal padding

## Tone Compliance

✅ **Follows Ambient Hearth Rules:**
- Hierarchy via depth (elevation), not contrast
- No borders on primary content
- Generous spacing for emotional buffer
- Prefers `surfaceSecondary` + elevation over borders
- `radius_16` indicates soft containment
- Motion feels like breathing, not counting
- Never creates urgency or encourages comparison

## Preview

See `src/screens/CauseCardPreview.tsx` for an interactive demo showing:
- Multi-select behavior
- Grid layout (2 columns)
- Selection state transitions
- Screen context (title, subtitle)

## Integration Notes

This component is designed to be:
1. **Stateless**: Parent manages selection state
2. **Composable**: Works in any grid or list layout
3. **Accessible**: Full screen reader support
4. **Theme-consistent**: Uses semantic tokens from `src/theme/theme.ts`

## Design References

- **Tone document**: `design/ui/tone-ambient-hearth.md`
- **Component spec**: `design/ui/components.md` (lines 158-177)
- **Token definitions**: `design/ui/tokens.md`
- **Theme semantics**: `src/theme/theme.ts`

---

**Created**: December 17, 2025  
**Design System**: Ambient Hearth  
**Status**: Ready for integration

