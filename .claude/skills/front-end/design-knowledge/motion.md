---
title: Animation & Motion Knowledge
impact: MEDIUM
impactDescription: When animation adds or subtracts value
tags: knowledge, motion, animation, feedback, transition
---

# Animation & Motion Knowledge

> **Pairs with**: [Rules/motion.md](../Rules/motion.md)
> **Load when**: `animation`, `motion`, `transition`, `loading`, `feedback`

---

## When Animation Adds Value

- Confirming action completion (checkmark, success feedback)
- Showing spatial relationships (where did this come from?)
- Maintaining context during state changes
- Reducing perceived wait time

---

## When Animation Subtracts Value

- Delaying task completion (waiting for animation)
- Drawing attention without purpose (bouncing, pulsing, decorative)
- Repeating on every interaction (gets annoying by day 30)
- Blocking user input during animation

---

## Loading Transitions

| Requirement | Detail |
|-------------|--------|
| No layout shift | Skeleton matches final layout exactly |
| Content-shaped skeletons | Text skeleton looks like text, images like images |
| Progressive reveal | Load critical content first |

---

## Animation Decision Framework

Ask in order:

1. **Does this help the user understand what happened?** → Yes = consider animation
2. **Will this get annoying after 100 uses?** → Yes = remove or make subtle
3. **Does this block the user from continuing?** → Yes = make it faster or remove
4. **Can the user disable this?** → Respect `prefers-reduced-motion`

---

## Speed Perception

| Duration | Feels Like |
|----------|------------|
| < 100ms | Instant |
| 100-300ms | Fast, responsive |
| 300-500ms | Noticeable but acceptable |
| > 500ms | Slow, potentially frustrating |
