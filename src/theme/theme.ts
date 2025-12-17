/**
 * Theme Enforcement Layer
 * Maps Ambient Hearth tone rules to token semantics
 */

// Elevation Semantics
export const elevationUsage = {
  focus: 'elevation_2',       // Primary focus elements (intervention cards, active modals)
  presence: 'elevation_1',    // Ambient presence (activity cards, community items)
  background: 'elevation_0',  // Base layer (screens, sections)
};

// Radius Semantics
export const radiusUsage = {
  containment: 'radius_16',   // Soft containment (cards, modals)
  presence: 'radius_full',    // Human presence (avatars, status indicators)
  control: 'radius_8',        // Interactive controls (buttons, inputs)
};

// Surface Intent Mapping
export const surfaceUsage = {
  primary: 'surfacePrimary',       // Main content surfaces
  secondary: 'surfaceSecondary',   // Receding content, secondary cards
  glass: 'surfaceGlass',           // Intervention overlays, context separation
};

