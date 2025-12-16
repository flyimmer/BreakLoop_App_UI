# BreakLoop UI Components

This document defines all reusable UI components for the BreakLoop mobile app, extracted from `design/ui/screens.md`.

**Purpose:** Component library specification for React Native implementation  
**Scope:** Functional and structural definitions (styling specifications to be added separately)

---

## Component Categories

1. [Navigation Components](#1-navigation-components)
2. [Intervention Components](#2-intervention-components)
3. [Card Components](#3-card-components)
4. [Form Components](#4-form-components)
5. [Feedback Components](#5-feedback-components)
6. [System Components](#6-system-components)
7. [Container Components](#7-container-components)
8. [List Components](#8-list-components)

---

## 1. Navigation Components

### 1.1 TabBar

**Purpose:** Main app navigation between primary sections

**Key Props:**
- `activeTab: "insights" | "community" | "settings"` - Currently active tab
- `onTabChange: (tab: string) => void` - Tab selection handler
- `badges?: { [key: string]: number }` - Optional notification badges per tab

**Used In:**
- Main BreakLoop App (all main screens)

---

### 1.2 SubMenuNav

**Purpose:** Secondary navigation within Community tab

**Key Props:**
- `activeMenu: "friends" | "my-upcoming" | "discover" | "plan"` - Active sub-menu
- `onMenuChange: (menu: string) => void` - Menu selection handler
- `variant: "horizontal" | "vertical"` - Layout orientation

**Used In:**
- Community Tab Screen
- Community Sub-screens (Friends, My Upcoming, Discover, Plan)

---

### 1.3 TabNavigation

**Purpose:** Tab switching within a specific screen context

**Key Props:**
- `tabs: Array<{ id: string, label: string, icon?: ReactNode }>` - Tab definitions
- `activeTab: string` - Currently active tab ID
- `onTabChange: (tabId: string) => void` - Tab change handler
- `variant?: "default" | "compact"` - Display style

**Used In:**
- Alternatives Screen (My List, Discover, AI For You)
- Add Friend Modal (Phone, Username)

---

### 1.4 BackButton

**Purpose:** Navigate back or close current view

**Key Props:**
- `onPress: () => void` - Press handler
- `variant: "back" | "close"` - Arrow vs X icon
- `position?: "top-left" | "top-right"` - Screen position

**Used In:**
- All modal screens
- Intervention flow screens
- Detail views

---

### 1.5 PaginationControls

**Purpose:** Navigate between paginated content

**Key Props:**
- `currentPage: number` - Current page index (0-based)
- `totalPages: number` - Total number of pages
- `onPageChange: (page: number) => void` - Page change handler
- `itemsPerPage?: number` - Items shown per page (for display)

**Variants:**
- `dots` - Dot indicators
- `arrows` - Previous/Next buttons
- `combined` - Both dots and arrows

**Used In:**
- Alternatives Screen (3 items per page)

---

## 2. Intervention Components

### 2.1 CountdownTimer

**Purpose:** Display animated countdown for breathing or activity timer

**Key Props:**
- `seconds: number` - Remaining seconds
- `variant: "breathing" | "action" | "circular" | "badge"` - Display style
- `size?: "small" | "medium" | "large"` - Component size
- `onComplete?: () => void` - Callback when timer reaches 0
- `animated?: boolean` - Enable pulsing animation

**Used In:**
- Breathing Screen (large, pulsing)
- Action Timer Screen (large, circular)
- Quick Task badge (small, badge style)
- Active Session Override (badge)
- Dummy App Screen (badge)

---

### 2.2 CauseCard

**Purpose:** Selectable card for emotional trigger selection

**Key Props:**
- `id: string` - Cause identifier
- `label: string` - Display text (e.g., "Boredom", "Anxiety")
- `icon?: ReactNode` - Optional icon
- `selected: boolean` - Selection state
- `onPress: () => void` - Toggle selection handler

**Used In:**
- Root Cause Selection Screen

---

### 2.3 ActionStepsList

**Purpose:** Display numbered action steps for an activity

**Key Props:**
- `steps: Array<string>` - Array of step descriptions
- `variant?: "default" | "compact"` - Display density
- `numbered?: boolean` - Show step numbers (default: true)

**Used In:**
- Action Confirmation Screen
- Action Timer Screen
- Alt Scheduler Modal
- Custom Alternative Form

---

### 2.4 MoodSelector

**Purpose:** Emoji-based mood selection for reflection

**Key Props:**
- `onSelect: (mood: 1 | 0 | -1) => void` - Mood selection handler (positive/neutral/negative)
- `showSkip?: boolean` - Show skip option (default: true)
- `onSkip?: () => void` - Skip handler

**Used In:**
- Reflection Screen

---

### 2.5 TimeOptionGrid

**Purpose:** Grid of time duration buttons

**Key Props:**
- `options: Array<{ value: number, label: string, size?: "small" | "large" }>` - Time options in minutes
- `onSelect: (minutes: number) => void` - Selection handler
- `layout?: "grid" | "list"` - Display layout

**Used In:**
- Timer Selection Screen (5m, 15m, 30m, 45m, 60m, 1m)

---

## 3. Card Components

### 3.1 ActivityCard

**Purpose:** Display activity summary in lists

**Key Props:**
- `activity: Activity` - Activity data object
- `variant?: "compact" | "full"` - Display density
- `showHost?: boolean` - Display host information
- `showStatus?: boolean` - Display status badge
- `statusBadge?: "PENDING" | "CONFIRMED" | "Host"` - Badge type
- `onPress?: () => void` - Card tap handler

**Activity Object:**
```typescript
{
  id: string
  title: string
  description?: string
  dateLabel: string
  time: string
  location?: string
  hostId?: string
  hostName?: string
  duration?: string
  visibility?: "private" | "friends" | "public"
}
```

**Used In:**
- My Upcoming Screen
- Discover Screen
- Plan Screen
- Activity Details Modal
- Alternatives Screen

---

### 3.2 ActivitySuggestionCard

**Purpose:** Display AI-generated activity suggestion with actions

**Key Props:**
- `suggestion: Suggestion` - Suggestion data
- `onAccept: () => void` - Accept button handler
- `onEdit: () => void` - Edit button handler
- `onSave: () => void` - Save button handler

**Suggestion Object:**
```typescript
{
  title: string
  description: string
  duration: string
  time: string
  location?: string
  topic?: string
}
```

**Used In:**
- Plan Activity Modal (AI Suggestion mode)

---

### 3.3 ValueCard

**Purpose:** Selectable card for value/goal selection

**Key Props:**
- `id: string` - Value identifier
- `label: string` - Display text (e.g., "Career", "Health")
- `icon?: ReactNode` - Optional icon
- `selected: boolean` - Selection state
- `onPress: () => void` - Toggle selection handler

**Used In:**
- Select Values Screen (onboarding)
- Settings Screen (values configuration)

---

### 3.4 FriendCard

**Purpose:** Display friend summary in list

**Key Props:**
- `friend: Friend` - Friend data object
- `showSuccessRate?: boolean` - Display success rate
- `showMessageButton?: boolean` - Show message action
- `onPress?: () => void` - Card tap handler
- `onMessage?: () => void` - Message button handler

**Friend Object:**
```typescript
{
  id: string
  name: string
  avatar?: string
  successRate?: number
  location?: string
  currentActivity?: string
  isFavorite?: boolean
}
```

**Used In:**
- Friends List Screen
- Add Friend Modal

---

### 3.5 JoinRequestCard

**Purpose:** Display pending join request with host actions

**Key Props:**
- `request: JoinRequest` - Request data
- `onAccept: () => void` - Accept button handler
- `onDecline: () => void` - Decline button handler

**JoinRequest Object:**
```typescript
{
  requesterId: string
  requesterName: string
  requesterAvatar?: string
  timestamp?: string
}
```

**Used In:**
- Activity Details Modal (host view)

---

### 3.6 AppSelectionCard

**Purpose:** App item with toggle for monitoring selection

**Key Props:**
- `app: App` - App data
- `selected: boolean` - Monitoring state
- `onToggle: () => void` - Toggle handler

**App Object:**
```typescript
{
  id: string
  name: string
  icon?: ReactNode
  isCustom?: boolean
}
```

**Used In:**
- Select Monitored Apps Screen
- Edit Apps Screen

---

## 4. Form Components

### 4.1 FormInput

**Purpose:** Text input field with label

**Key Props:**
- `label: string` - Field label
- `value: string` - Input value
- `onChangeText: (text: string) => void` - Change handler
- `placeholder?: string` - Placeholder text
- `multiline?: boolean` - Enable multi-line input
- `required?: boolean` - Show required indicator
- `error?: string` - Error message
- `disabled?: boolean` - Disabled state

**Used In:**
- Plan Activity Modal (all modes)
- Alt Scheduler Modal
- Custom Alternative Form
- Friend Detail Modal (notes field)
- Chat Interface Modal

---

### 4.2 DatePicker

**Purpose:** Native date selection

**Key Props:**
- `label?: string` - Field label
- `value: Date | string` - Selected date
- `onChange: (date: Date) => void` - Selection handler
- `minimumDate?: Date` - Earliest selectable date
- `mode?: "date" | "time" | "datetime"` - Picker mode
- `required?: boolean` - Show required indicator

**Used In:**
- Plan Activity Modal (date field)
- Alt Scheduler Modal (date field)

---

### 4.3 TimePicker

**Purpose:** Native time selection

**Key Props:**
- `label?: string` - Field label
- `value: string` - Selected time (HH:MM format)
- `onChange: (time: string) => void` - Selection handler
- `required?: boolean` - Show required indicator

**Used In:**
- Plan Activity Modal (start time, end time)
- Alt Scheduler Modal (time field)

---

### 4.4 Dropdown

**Purpose:** Single selection from options list

**Key Props:**
- `label?: string` - Field label
- `options: Array<{ value: string, label: string }>` - Available options
- `value: string` - Selected value
- `onChange: (value: string) => void` - Selection handler
- `placeholder?: string` - Placeholder text
- `required?: boolean` - Show required indicator

**Used In:**
- Plan Activity Modal (visibility selector, time preference)
- Custom Alternative Form (type selector)
- Settings Screen (various dropdowns)

---

### 4.5 Toggle

**Purpose:** Binary on/off switch

**Key Props:**
- `label?: string` - Label text
- `value: boolean` - Toggle state
- `onValueChange: (value: boolean) => void` - Change handler
- `disabled?: boolean` - Disabled state

**Used In:**
- Select Monitored Apps Screen
- Edit Apps Screen
- Plan Activity Modal (allow auto-join)
- Settings Screen (premium features, privacy settings)
- Friend Detail Modal (favorite toggle)

---

### 4.6 NumberInput

**Purpose:** Numeric input with +/- controls

**Key Props:**
- `label?: string` - Field label
- `value: number` - Current value
- `onChange: (value: number) => void` - Change handler
- `min?: number` - Minimum value
- `max?: number` - Maximum value
- `step?: number` - Increment step
- `unit?: string` - Unit label (e.g., "minutes", "people")

**Used In:**
- Plan Activity Modal (max participants)
- Settings Screen (intervention duration, quick task settings)

---

### 4.7 SearchBar

**Purpose:** Search input with icon

**Key Props:**
- `value: string` - Search query
- `onChangeText: (text: string) => void` - Input handler
- `placeholder?: string` - Placeholder text
- `onClear?: () => void` - Clear button handler
- `autoFocus?: boolean` - Auto-focus on mount

**Used In:**
- Add Friend Modal (username tab)

---

## 5. Feedback Components

### 5.1 StatusBadge

**Purpose:** Display activity status indicator

**Key Props:**
- `status: "PENDING" | "CONFIRMED" | "Host"` - Badge type
- `size?: "small" | "medium"` - Badge size
- `variant?: "solid" | "outline"` - Display style

**Used In:**
- Activity Card
- Activity Details Modal
- My Upcoming Screen

---

### 5.2 Toast

**Purpose:** Temporary notification message

**Key Props:**
- `message: string` - Notification text
- `type?: "success" | "error" | "info" | "warning"` - Message type
- `duration?: number` - Display duration in ms (default: 3000)
- `onDismiss?: () => void` - Dismiss callback

**Used In:**
- Throughout app for user feedback (activity saved, request sent, error messages)

---

### 5.3 LoadingSpinner

**Purpose:** Indicate loading state

**Key Props:**
- `size?: "small" | "medium" | "large"` - Spinner size
- `message?: string` - Optional loading message
- `fullScreen?: boolean` - Cover entire screen

**Used In:**
- AI Generation Loading State
- Plan Activity Modal (AI mode)
- Network requests

---

### 5.4 EmptyState

**Purpose:** Display message when no content available

**Key Props:**
- `icon?: ReactNode` - Optional icon
- `title: string` - Primary message
- `description?: string` - Secondary message
- `action?: { label: string, onPress: () => void }` - Optional action button

**Variants:**
- No activities
- No friends
- No search results
- API key missing
- Network error

**Used In:**
- My Upcoming Screen (no activities)
- Friends List Screen (no friends)
- Discover Screen (no events)
- Alternatives Screen (empty lists)

---

### 5.5 ErrorMessage

**Purpose:** Display error with optional retry action

**Key Props:**
- `message: string` - Error text
- `variant?: "inline" | "banner" | "modal"` - Display style
- `onRetry?: () => void` - Retry button handler
- `onDismiss?: () => void` - Dismiss handler

**Used In:**
- AI generation errors
- Network failures
- Form validation errors
- Alternatives Screen (API key warning)

---

### 5.6 NotificationBanner

**Purpose:** Prominent banner for important messages

**Key Props:**
- `message: string` - Banner text
- `type?: "info" | "warning" | "success"` - Banner type
- `icon?: ReactNode` - Optional icon
- `onPress?: () => void` - Tap handler
- `onDismiss?: () => void` - Dismiss button handler
- `dismissible?: boolean` - Show dismiss button

**Used In:**
- Launcher Screen (notification banner)
- Proactive Prompt Overlay

---

### 5.7 SuccessCheckmark

**Purpose:** Large animated checkmark for confirmation

**Key Props:**
- `size?: "medium" | "large"` - Checkmark size
- `animated?: boolean` - Enable entrance animation
- `label?: string` - Optional text below checkmark

**Used In:**
- Action Confirmation Screen

---

## 6. System Components

### 6.1 Modal

**Purpose:** Full-screen or centered modal container

**Key Props:**
- `visible: boolean` - Modal visibility
- `onClose: () => void` - Close handler
- `fullScreen?: boolean` - Full-screen vs centered
- `title?: string` - Modal title
- `closeButton?: boolean` - Show close button (default: true)
- `swipeToDismiss?: boolean` - Enable swipe-down dismiss (iOS)
- `children: ReactNode` - Modal content

**Used In:**
- Plan Activity Modal
- Alt Scheduler Modal
- Activity Details Modal
- Friend Detail Modal
- Add Friend Modal
- Chat Interface Modal

---

### 6.2 Dialog

**Purpose:** Alert-style confirmation dialog

**Key Props:**
- `visible: boolean` - Dialog visibility
- `title: string` - Dialog title
- `message: string` - Dialog message
- `buttons: Array<{ label: string, onPress: () => void, variant?: "default" | "destructive" }>` - Action buttons
- `dismissible?: boolean` - Allow dismiss by tapping outside

**Used In:**
- Quick Task Dialog
- Cancel event confirmation
- Destructive action confirmations

---

### 6.3 Overlay

**Purpose:** Full-screen overlay for intervention flow

**Key Props:**
- `visible: boolean` - Overlay visibility
- `backgroundColor?: string` - Background color/opacity
- `blurBackground?: boolean` - Blur background content
- `onDismiss?: () => void` - Background tap handler
- `children: ReactNode` - Overlay content

**Used In:**
- Intervention Flow (all screens)
- Active Session Override Screen

---

### 6.4 IconButton

**Purpose:** Touchable icon with optional label

**Key Props:**
- `icon: ReactNode` - Icon component
- `onPress: () => void` - Press handler
- `label?: string` - Optional text label
- `size?: "small" | "medium" | "large"` - Button size
- `variant?: "default" | "ghost" | "outline"` - Button style
- `disabled?: boolean` - Disabled state

**Used In:**
- Throughout app for icon-based actions
- Close buttons
- Add buttons
- Navigation icons

---

### 6.5 AppIcon

**Purpose:** Display app icon with consistent sizing

**Key Props:**
- `appId: string` - App identifier
- `size?: "small" | "medium" | "large"` - Icon size
- `showBadge?: boolean` - Show countdown badge
- `badgeValue?: string | number` - Badge content

**Used In:**
- Launcher Screen (app grid)
- Dummy App Screen
- Select Monitored Apps Screen
- Edit Apps Screen
- Timer Selection Screen

---

## 7. Container Components

### 7.1 Screen

**Purpose:** Base screen container with safe area handling

**Key Props:**
- `children: ReactNode` - Screen content
- `scrollable?: boolean` - Enable scrolling (default: false)
- `backgroundColor?: string` - Background color
- `safeArea?: boolean` - Apply safe area insets (default: true)
- `statusBarStyle?: "light" | "dark"` - Status bar appearance

**Used In:**
- All screen components

---

### 7.2 Card

**Purpose:** Generic card container with shadow/border

**Key Props:**
- `children: ReactNode` - Card content
- `onPress?: () => void` - Make card touchable
- `variant?: "default" | "elevated" | "outline"` - Card style
- `padding?: "none" | "small" | "medium" | "large"` - Internal padding

**Used In:**
- Wraps most card components (ActivityCard, FriendCard, etc.)

---

### 7.3 Section

**Purpose:** Content section with optional title

**Key Props:**
- `title?: string` - Section title
- `children: ReactNode` - Section content
- `headerAction?: ReactNode` - Right-side header action
- `spacing?: "small" | "medium" | "large"` - Vertical spacing

**Used In:**
- Settings Screen (sections)
- Activity Details Modal (sections)
- Insights Tab (sections)

---

### 7.4 HorizontalScrollList

**Purpose:** Horizontal scrollable container for cards

**Key Props:**
- `children: ReactNode` - Scrollable items
- `itemSpacing?: number` - Space between items
- `contentPadding?: number` - Left/right padding
- `showScrollIndicator?: boolean` - Show scroll bar

**Used In:**
- My Upcoming Screen
- Discover Screen
- Alternatives Screen

---

### 7.5 Grid

**Purpose:** Responsive grid layout

**Key Props:**
- `children: ReactNode` - Grid items
- `columns?: number` - Number of columns (default: 2)
- `spacing?: number` - Gap between items
- `itemMinWidth?: number` - Minimum item width (responsive)

**Used In:**
- Root Cause Selection Screen (cause cards)
- Select Values Screen (value cards)
- Timer Selection Screen (time options)

---

## 8. List Components

### 8.1 ParticipantList

**Purpose:** Display list of session/activity participants

**Key Props:**
- `participants: Array<Participant>` - Participant data
- `showStatus?: boolean` - Display focus/distracted status
- `variant?: "compact" | "full"` - Display density

**Participant Object:**
```typescript
{
  id: string
  name: string
  avatar?: string
  status?: "focused" | "distracted"
}
```

**Used In:**
- Active Session Override Screen
- Activity Details Modal (participant list)

---

### 8.2 MessageList

**Purpose:** Scrollable message thread

**Key Props:**
- `messages: Array<Message>` - Message data
- `currentUserId: string` - Current user ID for alignment
- `onLoadMore?: () => void` - Load more messages handler

**Message Object:**
```typescript
{
  id: string
  senderId: string
  text: string
  timestamp: string
}
```

**Used In:**
- Chat Interface Modal

---

### 8.3 StatsDisplay

**Purpose:** Display key metrics and statistics

**Key Props:**
- `stats: Array<{ label: string, value: string | number, icon?: ReactNode }>` - Stats data
- `variant?: "grid" | "list"` - Layout style
- `highlightPrimary?: boolean` - Emphasize first stat

**Used In:**
- Insights Tab Screen
- Friend Detail Modal
- Friends List Screen (success rates)

---

### 8.4 ContactList

**Purpose:** Selectable list of contacts

**Key Props:**
- `contacts: Array<Contact>` - Contact data
- `selectedIds?: Array<string>` - Pre-selected contacts
- `onContactPress: (contactId: string) => void` - Selection handler
- `showAddButton?: boolean` - Show add button per contact

**Contact Object:**
```typescript
{
  id: string
  name: string
  avatar?: string
  phone?: string
  username?: string
}
```

**Used In:**
- Add Friend Modal (phone contacts tab)

---

### 8.5 SessionHistory

**Purpose:** Display historical session entries

**Key Props:**
- `sessions: Array<Session>` - Session history data
- `onSessionPress?: (session: Session) => void` - Session tap handler

**Session Object:**
```typescript
{
  id: string
  date: string
  activity: string
  mood: 1 | 0 | -1
  duration: number
  completed: boolean
}
```

**Used In:**
- Insights Tab Screen

---

## Component Composition Examples

### Example 1: Activity Card with Status Badge

```
<Card onPress={handleActivityPress}>
  <ActivityCard
    activity={activity}
    showHost={true}
    showStatus={true}
    statusBadge="CONFIRMED"
  />
</Card>
```

### Example 2: Modal with Form

```
<Modal
  visible={showModal}
  onClose={handleClose}
  title="Plan Activity"
  fullScreen={true}
>
  <FormInput
    label="Title"
    value={title}
    onChangeText={setTitle}
    required={true}
  />
  <DatePicker
    label="Date"
    value={date}
    onChange={setDate}
  />
  <Button onPress={handleSave}>
    Save Activity
  </Button>
</Modal>
```

### Example 3: Horizontal Scrollable Activities

```
<Section title="My Upcoming">
  <HorizontalScrollList itemSpacing={12}>
    {activities.map(activity => (
      <ActivityCard
        key={activity.id}
        activity={activity}
        statusBadge={getStatusBadge(activity)}
        onPress={() => viewDetails(activity)}
      />
    ))}
  </HorizontalScrollList>
</Section>
```

---

## Component Organization Strategy

### Directory Structure (Recommended)

```
src/
├── components/
│   ├── navigation/
│   │   ├── TabBar.tsx
│   │   ├── SubMenuNav.tsx
│   │   ├── TabNavigation.tsx
│   │   ├── BackButton.tsx
│   │   └── PaginationControls.tsx
│   ├── intervention/
│   │   ├── CountdownTimer.tsx
│   │   ├── CauseCard.tsx
│   │   ├── ActionStepsList.tsx
│   │   ├── MoodSelector.tsx
│   │   └── TimeOptionGrid.tsx
│   ├── cards/
│   │   ├── ActivityCard.tsx
│   │   ├── ActivitySuggestionCard.tsx
│   │   ├── ValueCard.tsx
│   │   ├── FriendCard.tsx
│   │   ├── JoinRequestCard.tsx
│   │   └── AppSelectionCard.tsx
│   ├── forms/
│   │   ├── FormInput.tsx
│   │   ├── DatePicker.tsx
│   │   ├── TimePicker.tsx
│   │   ├── Dropdown.tsx
│   │   ├── Toggle.tsx
│   │   ├── NumberInput.tsx
│   │   └── SearchBar.tsx
│   ├── feedback/
│   │   ├── StatusBadge.tsx
│   │   ├── Toast.tsx
│   │   ├── LoadingSpinner.tsx
│   │   ├── EmptyState.tsx
│   │   ├── ErrorMessage.tsx
│   │   ├── NotificationBanner.tsx
│   │   └── SuccessCheckmark.tsx
│   ├── system/
│   │   ├── Modal.tsx
│   │   ├── Dialog.tsx
│   │   ├── Overlay.tsx
│   │   ├── IconButton.tsx
│   │   └── AppIcon.tsx
│   ├── containers/
│   │   ├── Screen.tsx
│   │   ├── Card.tsx
│   │   ├── Section.tsx
│   │   ├── HorizontalScrollList.tsx
│   │   └── Grid.tsx
│   └── lists/
│       ├── ParticipantList.tsx
│       ├── MessageList.tsx
│       ├── StatsDisplay.tsx
│       ├── ContactList.tsx
│       └── SessionHistory.tsx
```

---

## Component Reuse Matrix

| Component | Usage Count | High Traffic Screens |
|-----------|-------------|----------------------|
| ActivityCard | 12+ | My Upcoming, Discover, Alternatives |
| Modal | 6 | All modal screens |
| FormInput | 20+ | All forms and modals |
| StatusBadge | 8 | Activity-related screens |
| CountdownTimer | 5 | Intervention flow, session screens |
| Button | 50+ | Throughout entire app |
| Card | 30+ | Most list-based screens |
| TabNavigation | 3 | Community, Alternatives, Add Friend |
| EmptyState | 8 | All list screens |
| Toast | App-wide | All user actions |

---

## Implementation Priorities

### Phase 1: Foundation (Essential for MVP)
1. System Components (Modal, Dialog, Overlay)
2. Container Components (Screen, Card, Section)
3. Form Components (FormInput, DatePicker, TimePicker, Toggle)
4. Navigation Components (TabBar, BackButton)
5. Feedback Components (Toast, LoadingSpinner, EmptyState)

### Phase 2: Core Features
1. Card Components (ActivityCard, FriendCard, ValueCard)
2. Intervention Components (CountdownTimer, CauseCard, ActionStepsList)
3. List Components (ParticipantList, MessageList)
4. Navigation Components (SubMenuNav, TabNavigation, PaginationControls)

### Phase 3: Enhanced Features
1. Card Components (ActivitySuggestionCard, JoinRequestCard)
2. Intervention Components (MoodSelector, TimeOptionGrid)
3. Feedback Components (NotificationBanner, SuccessCheckmark)
4. Form Components (Dropdown, NumberInput, SearchBar)
5. List Components (StatsDisplay, SessionHistory)

---

## Cross-Platform Considerations

### React Native Specific
- Use `TouchableOpacity` or `Pressable` for touchable components
- Native date/time pickers via `@react-native-community/datetimepicker`
- Safe area handling via `react-native-safe-area-context`
- Modal implementation via React Native `Modal` component
- Gesture handling via `react-native-gesture-handler`

### Platform Adaptations
- **iOS:** Swipe-down to dismiss modals
- **Android:** Back button handling for modals and overlays
- **Both:** Native look-and-feel for pickers, toggles, and system components

### Accessibility
- All interactive components must support screen readers
- Proper `accessibilityLabel` and `accessibilityHint` props
- Adequate touch target sizes (minimum 44x44 points)
- Color contrast compliance for text and icons

---

## Shared Component Props (Common Patterns)

Many components share these common prop patterns:

### Styling Props
```typescript
{
  style?: ViewStyle | TextStyle
  testID?: string  // For testing
}
```

### Interactive Props
```typescript
{
  disabled?: boolean
  loading?: boolean
  onPress?: () => void
}
```

### Content Props
```typescript
{
  icon?: ReactNode
  label?: string
  children?: ReactNode
}
```

### Variant Props
```typescript
{
  variant?: "default" | "primary" | "secondary" | "destructive"
  size?: "small" | "medium" | "large"
}
```

---

## Type Definitions (TypeScript)

### Core Data Types

```typescript
// Activity type (full definition)
interface Activity {
  id: string
  title: string
  description?: string
  dateLabel: string
  time: string
  location?: string
  hostId?: string
  hostName?: string
  duration?: string
  visibility?: "private" | "friends" | "public"
  status?: "pending" | "confirmed"
  steps?: Array<string>
  maxParticipants?: number
  allowAutoJoin?: boolean
  participants?: Array<string>
}

// Friend type
interface Friend {
  id: string
  name: string
  avatar?: string
  successRate?: number
  location?: string
  currentActivity?: string
  isFavorite?: boolean
  note?: string
}

// Session type
interface Session {
  id: string
  date: string
  activity: string
  mood: 1 | 0 | -1
  duration: number
  completed: boolean
}

// Message type
interface Message {
  id: string
  senderId: string
  text: string
  timestamp: string
}
```

---

## Notes for Implementation

### State Management
- Components should be primarily presentational
- Business logic and state management handled in parent screens
- Use React hooks for local component state
- Consider React Context for deeply nested prop drilling

### Performance Optimization
- Memoize expensive components with `React.memo`
- Use `FlatList` for long lists (friends, messages, history)
- Lazy load images for avatars and activity photos
- Debounce search inputs and form validation

### Testing Strategy
- Unit tests for all reusable components
- Snapshot tests for visual regression
- Integration tests for complex interactions (modals, forms)
- Accessibility tests for all interactive components

### Documentation
- Each component should have inline JSDoc comments
- Storybook/React Native Showcase for component library
- Usage examples in component files
- Prop validation with PropTypes or TypeScript

---

**Document Version:** 1.0  
**Last Updated:** December 16, 2025  
**Source Document:** `design/ui/screens.md`  
**Maintained By:** Design Systems Team


