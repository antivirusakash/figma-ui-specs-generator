---
title: User Education Patterns
impact: HIGH
impactDescription: Onboarding, progressive disclosure, guidance, feature discovery
tags: education, onboarding, tooltip, wizard, stepper, flow, help, guidance, hint, first-time, setup, progressive disclosure, coachmark
---

# User Education Patterns

> **Load when**: `onboarding`, `education`, `tooltip`, `wizard`, `stepper`, `flow`, `help`, `guidance`, `hint`, `first-time`, `new user`, `setup`, `progressive disclosure`, `coachmark`

> **Cross-references**:
> - [states.md](states.md) — Empty states as education opportunity
> - [copy.md](copy.md) — Microcopy examples for education text
> - [ai-core.md](ai-core.md) — AI trust patterns (implicit via design)
> - [viven-product.md](viven-product.md) — Twin lifecycle, permissions

> **Exclusions**: Multi-party education (how others experience your AI) — out of scope

---

## Core Principles

| Principle | Implementation |
|-----------|----------------|
| Layered depth | Surface-level for all; "Learn more" expands for curious |
| Education memory | Persist what user has seen; don't repeat dismissed education |
| Hybrid by complexity | Simple features = smart defaults; complex features = dedicated education |
| Under-educate is worse | When in doubt, educate more—confusion kills adoption faster than tooltips |

---

## Problem: Confusion

When users don't understand what something does or how to use it.

### Graduated Disclosure

Progress from mechanics → decision → consequences.

| Stage | Question Answered | Example (Privacy Rules) |
|-------|-------------------|-------------------------|
| What | "How does this work?" | "Rules control what your Twin can access" |
| Which | "What should I choose?" | "Most users start with 'Work documents only'" |
| Consequences | "What happens if I choose X?" | Preview: "With this setting, Twin cannot see personal files" |

### Contextual Help Icons

| Element | Implementation |
|---------|----------------|
| Trigger | `?` or `i` icon next to complex elements |
| Behavior | Click to expand inline; not hover (mobile-friendly) |
| Content | 1-2 sentences max; link to docs for depth |
| Persistence | Dismissable; dismissal persists across sessions |

**Reference**: [Linear's contextual tooltips](https://linear.app) — non-intrusive, discoverable, never blocks workflow.

### AI Boundary Communication

| Situation | Pattern |
|-----------|---------|
| Proactive | Show capabilities upfront: "Your Twin can read documents, draft responses, and join meetings" |
| Reactive | Handle limits gracefully: "I don't have access to your calendar yet. Connect it in Settings." |
| Uncertainty | Communicate confidence: "Based on your notes, I think the deadline is Friday—please verify" |

See [ai-core.md](ai-core.md) for uncertainty communication patterns.

### Tooltip/Coachmark System

| Rule | Rationale |
|------|-----------|
| Max 1 coachmark visible at a time | Avoid overwhelm |
| Frequency cap: 1 per session for same feature | Respect user attention |
| Dismiss = permanent (with "reset tips" in settings) | User in control |
| Trigger on first encounter, not on every visit | Education memory |

---

## Problem: Abandonment

When users drop off mid-flow because they don't know what's next or feel uncertain.

### Progress Visualization

| Rule | Implementation |
|------|----------------|
| Always show total steps | "Step 2 of 4" — even for branching flows, estimate |
| Show current position | Stepper with completed/current/upcoming states |
| Name the steps | "Profile → Permissions → Knowledge → Review" |
| Allow back navigation | User can review previous choices |

**Anti-pattern**: "Step 2" without "of X" — user can't gauge commitment.

### Reversibility Education

Reduce anxiety by making undo visible.

| Pattern | Implementation |
|---------|----------------|
| Inline reassurance | "You can change this anytime in Settings" |
| Undo availability | Show "Undo" button after destructive-looking actions |
| Preview before commit | "Here's what will happen" before irreversible actions |
| Grace period | "Deleted. Undo (10s)" for recoverable actions |

### Template-as-Education

Users learn by seeing examples, not reading instructions.

| Pattern | Implementation |
|---------|----------------|
| Pre-filled examples | Show realistic sample data, not "Lorem ipsum" |
| Starter templates | "Start with Marketing Twin template" |
| Before/after | Show transformation: input → what Twin produces |

**Reference**: [Notion's template gallery](https://notion.so/templates) — education through pre-filled examples users can modify.

### "What Happens Next" Preview

| Trigger | Content |
|---------|---------|
| Before major action | "After you save, your Twin will start attending meetings tomorrow" |
| At flow completion | "Next: Your Twin will analyze your documents (takes ~5 min)" |
| On permission grant | "This lets your Twin see your calendar events" |

---

## Problem: Friction

When users can complete flows but feel uncertain or resistant.

### Destructive Action Education

High-stakes actions need explicit education.

| Element | Implementation |
|---------|----------------|
| Name the consequence | "Permanently delete" not "Delete" |
| State what's lost | "This will remove all Twin history and cannot be undone" |
| Require confirmation | Type to confirm for irreversible actions |
| Offer alternative | "You can pause your Twin instead of deleting" |

### Skip Hierarchy

Whether flows are skippable is a per-feature decision. Document the pattern:

| Flow Type | Skip Policy | Example |
|-----------|-------------|---------|
| Critical setup | Cannot skip | Privacy rules on first Twin |
| Recommended setup | Skip with warning | "Skip for now (you'll see limited features)" |
| Enhancement | Freely skippable | "Add photo to your Twin" |
| Tutorial | Always skippable | Product tour |

### Power Feature Discovery

For technical features (MCP, Knowledge config): visible but muted.

| Pattern | Implementation |
|---------|----------------|
| Visual treatment | Smaller text, "Advanced" label, collapsed by default |
| Progressive reveal | Show after user completes basics OR explicitly asks |
| Just-in-time surface | "You mentioned calendar—connect it for better context" |
| No hiding | Always discoverable; never gated behind menus |

**Reference**: Linear's approach — power features visible but don't overwhelm new users.

### Enterprise User Education

Enterprise users need "why we designed it this way" more than "how to click."

| Pattern | Rationale |
|---------|-----------|
| Design rationale tooltips | "We require approval for external shares because..." |
| Keyboard shortcut discovery | Surface shortcuts on hover: "⌘K to search" |
| Efficiency tips | After repeated manual action: "Pro tip: Select multiple with Shift+Click" |

---

## Viven Examples

### Twin Initial Setup

| Stage | Education Focus |
|-------|-----------------|
| Entry | "Your Twin represents you in meetings and conversations" |
| Persona | Template options: "Professional" / "Casual" / "Custom" with previews |
| Knowledge | "Connect sources so your Twin knows what you know" |
| Permissions | Graduated: What (read/respond/act) → Which (what scope) → Consequences (preview behavior) |
| Completion | "What happens next": Twin will analyze docs, be ready in X time |

**Key pattern**: Don't require full config before first value. Let user create basic Twin, then prompt to enhance.

### Privacy Rule Builder

| Stage | Education Focus |
|-------|-----------------|
| Entry | What: "Rules control what your Twin can and cannot do" |
| Selection | Which: Presets with explanations: "Work Only" / "Full Access" / "Custom" |
| Custom rules | Consequences: Live preview of what Twin would see/do with current rules |
| Confirmation | Reversibility: "You can adjust these anytime in Settings" |

**Critical**: Show consequences before commit. "With these rules, your Twin will not be able to access personal documents."

### MCP Connection

| Stage | Education Focus |
|-------|-----------------|
| Discovery | Just-in-time: Surface when user action would benefit from connection |
| Explanation | Why: "Connecting [service] lets your Twin [specific capability]" |
| Permission | What happens: "Your Twin will be able to read your [service] data" |
| Success | Next steps: "Now try asking your Twin about [thing from connected service]" |

**Visual treatment**: Advanced section, collapsed by default, but surfaced contextually when relevant.

---

## Retrofit Education

When you've shipped without education and need to add it later.

### Principles

| Principle | Implementation |
|-----------|----------------|
| Prioritize by support tickets | What are users asking about? Start there |
| Don't interrupt power users | Target education to users showing confusion signals |
| Changelog as education | "New: We added X to help with Y" |
| In-context, not announcements | Add tooltips at confusion points, not modal announcements |
| Measure before/after | Track completion rates, support tickets, feature adoption |

### Audit Questions

- What's generating the most support tickets?
- Where do users drop off in flows?
- What features exist but have low adoption?
- What do users ask in feedback that they could self-serve?

---

## Anti-Patterns

| Don't | Why |
|-------|-----|
| Tooltip on every element | Overwhelming; user ignores all |
| Education modal on every login | Blocks workflow; user dismisses without reading |
| "Got it" as only dismissal | No learning; user just wants to close |
| Same education for novice and expert | One overwhelmed, other frustrated |
| Force completion of optional flows | Resentment; user rushes through |
| Education without action | "Did you know..." is noise without "Try it now" |
| Reset education on every session | Annoying; user already learned this |

---

## Success Signals

| Metric | Indicates |
|--------|-----------|
| Flow completion rate | Users understand what's expected |
| Time to first value | Onboarding isn't blocking |
| Feature adoption rate | Users discover capabilities |
| Support ticket volume | Self-service is working |
| Tooltip dismiss rate | Education is hitting right users |

Weight metrics by flow: completion matters most for critical paths; adoption matters most for feature discovery.

---

## Implementation Checklist

```
□ Complex features have contextual '?' help
□ Multi-step flows show progress (Step X of Y)
□ Destructive actions name consequences
□ Reversible actions show undo availability
□ Education persists across sessions (dismissed = remembered)
□ Power features visible but muted
□ Templates available for complex configs
□ "What happens next" shown before major actions
□ Skip policy defined per flow type
```

---

## Review Questions

- "What does a first-time user see here?"
- "How does user discover this feature exists?"
- "If user is confused, where do they get help without leaving?"
- "What's the consequence of this action? Is it stated?"
- "Can user undo this? Do they know they can?"
- "What would make a user abandon this flow?"
- "Is this education necessary, or are we over-explaining?"
