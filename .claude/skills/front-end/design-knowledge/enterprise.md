---
title: Enterprise & Document Patterns
impact: HIGH
impactDescription: Enterprise-grade UI, data tables, navigation, collaboration
tags: enterprise, table, navigation, density, permissions, document, sync, collaboration
---

# Enterprise & Document Patterns

> **Load when**: `enterprise`, `table`, `navigation`, `density`, `permissions`, `document`, `sync`, `collaboration`, `version`

---

## Navigation Decisions

| Pattern | Use When | Avoid When |
|---------|----------|------------|
| Sidebar nav | Primary navigation, >7 sections | Mobile-only apps |
| Command palette (Cmd+K) | Power users, keyboard-first | Novice-only audience |
| Breadcrumbs | Depth >2 levels | Flat hierarchy |
| Top nav | ≤7 top-level items | Growing feature set |

**Source**: GitHub, Atlassian 2025, Slack, GCP

---

## Data Tables

| Element | Required | Implementation |
|---------|----------|----------------|
| Frozen header | YES | `position: sticky` |
| Row hover | YES | Background change |
| Sort indicator | YES | Arrow + highlight on active column |
| Default sort | YES | Most recent/urgent first |
| Pagination | Default 25-50 | Options: 10, 25, 50, 100 |
| Filter chips | YES | Always visible when active |
| Bulk select | YES | Checkbox column + count display |

### Pagination vs Infinite Scroll

| Pagination | Infinite Scroll |
|------------|-----------------|
| Data tables, reference | Feeds, timelines |
| Position matters | Position irrelevant |
| Use for >25 rows | Never for analytical data |

---

## Document Collaboration

| Feature | Pattern |
|---------|---------|
| Presence | Avatars + colored cursors + labels |
| Conflict resolution | Auto-merge (CRDT/OT) or side-by-side diff |
| Version history | Timeline sidebar, visual diff, restore action |
| Offline | Banner indicator, sync queue, conflict warning on reconnect |

### Conflict Severity Handling

| Severity | UI |
|----------|-----|
| Auto-resolved | No notification |
| Minor | Toast, one-click resolve |
| Major | Modal with options |
| Offline sync | Full review workflow |

---

## Permissions UI

| Pattern | When |
|---------|------|
| Hide unavailable | Reduces noise (default) |
| Show disabled + tooltip | User learns feature exists |
| Upgrade prompt | Monetization opportunity |
| Request access | Enterprise collaboration |

---

## Progressive Disclosure

| Layer | Trigger | Content |
|-------|---------|---------|
| L1 | Always | Primary data, main actions |
| L2 | Hover | Secondary actions |
| L3 | Click | Expanded details |
| L4 | Modal | Complex workflows |

---

## Implementation Rules

```
□ Tables use semantic HTML (<table>, <thead>, <tbody>)
□ Frozen header on scroll
□ Sort icon shows direction (asc/desc)
□ Filter chips visible when active
□ Bulk select shows count
□ Presence indicators for collaboration
□ Version history accessible
□ Offline state with sync indicator
```

---

## Anti-Patterns

| Don't | Why |
|-------|-----|
| Top nav for 10+ sections | No room to grow |
| Infinite scroll for data tables | Users lose position |
| Auto-save without feedback | User unsure what's saved |
| Conflict resolution hidden | Silent data loss |
| Filter reset on pagination | Frustrating |

---

## Review Questions

- "What happens with 10x the data?"
- "How does new user discover this?"
- "What does power user need that we're hiding?"
- "What if two people edit same content?"
- "Can user work offline? What happens on reconnect?"
