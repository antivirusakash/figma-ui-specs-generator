---
title: Error Handling Rules
impact: MEDIUM
impactDescription: Error display and recovery patterns
tags: rules, errors, exception, fallback, retry
---

# Error Handling Rules

> Load when: `error`, `exception`, `catch`, `boundary`, `fallback`, `retry`

---

## Error Patterns by Type

| Error Type | Pattern |
|------------|---------|
| Field validation | Inline (red text + border) |
| Form submission | Inline + toast |
| Cross-field validation | Inline on relevant field + form summary |
| API recoverable | Toast + retry |
| API blocking | Inline fallback + retry |
| Auth | Redirect to login |
| Offline | Persistent banner |
| Component crash | Error boundary |

---

## Core Principle

**MUST show errors next to where the action happens.**

For cross-field validation (e.g., password confirmation), use both inline and form summary.

---

## Toast Durations

| Type | Duration |
|------|----------|
| Success | 3s |
| Error | 5s |
| Warning | 4s |
| Info | 3s |

Position: Bottom center
