---
title: Viven Product Patterns
impact: HIGH
impactDescription: Twin/agent management, meeting proxy, Viven-specific flows
tags: twin, agent, meeting, proxy, persona, lifecycle, async
---

# Viven Product Patterns

> **Load when**: `twin`, `agent`, `persona`, `meeting proxy`, `async meeting`, `attend for me`

---

## Twin Lifecycle

| Stage | User Need | UI Focus |
|-------|-----------|----------|
| Create | "I want an AI to represent me" | Quick start, templates |
| Configure | "It should act like this" | Persona, scope, permissions |
| Activate | "Go do this for me" | Task delegation |
| Monitor | "What is it doing?" | Activity feed, status |
| Tune | "It's not quite right" | Feedback, corrections |
| Deactivate | "Stop/pause/retire" | Control, audit trail |

---

## Twin Configuration

| Area | User Control |
|------|--------------|
| Persona | Voice, tone, style presets |
| Knowledge | Which docs/folders twin can access |
| Permissions | Read → Respond → Act → Manage |
| Guardrails | What twin must NOT do |

### Permission Levels

| Level | Scope |
|-------|-------|
| Read-only | Observe, summarize |
| Respond | Reply, draft for review |
| Act | Execute without approval |
| Manage | Create, modify, delete |

---

## Twin Status Indicators

| Status | Visual | Meaning |
|--------|--------|---------|
| Active | Green pulse | Working |
| Idle | Gray | Waiting |
| Needs review | Amber | Requires approval |
| Error | Red | Failed |
| Paused | Blue outline | User-paused |

---

## Meeting Proxy

### Participation Levels

| Level | Behavior |
|-------|----------|
| Observer | Attend, transcribe, summarize—no interaction |
| Contributor | Share pre-recorded content, answer specific questions |
| Participant | Actively engage based on user context |

### Meeting Lifecycle

| Phase | UI Focus |
|-------|----------|
| Pre-meeting | Context briefing, proxy config |
| During | Live status, intervention controls |
| Post | Summary, action items, follow-ups |

### Post-Meeting Deliverables

| Component | Content |
|-----------|---------|
| TL;DR | 2-3 sentences |
| Key Points | Bulleted highlights |
| Action Items | Owner, deadline, status |
| Mentions | "You were mentioned when..." |
| Transcript | Full text, searchable |

---

## Trust & Transparency

| Pattern | Implementation |
|---------|----------------|
| Action log | Timestamped record of all actions |
| Session replay | Review past agent sessions |
| Kill switch | Prominent, immediate stop |
| Approval gate | Confirm before irreversible actions |

### Trust-Building Progression

| Level | Behavior |
|-------|----------|
| Supervised | Every action requires approval |
| Semi-autonomous | Routine auto, complex needs approval |
| Autonomous | Full delegation within scope |

---

## Implementation Rules

```
□ Kill switch is prominent and immediate
□ Activity log records all agent actions
□ Approval required for irreversible actions
□ Status indicator always visible
□ Twin config has preview before commit
□ Meeting proxy shows live status during meeting
□ Post-meeting summary within minutes
```

---

## Anti-Patterns

| Don't | Why |
|-------|-----|
| Require full config before first use | Friction kills adoption |
| No visibility into twin actions | Black box destroys trust |
| No pause/stop control | User feels powerless |
| Same UI for novice and power user | One overwhelmed, other frustrated |
| Transcript-only meeting output | Users need structure |
| No intervention option during meeting | User locked out |

---

## Review Questions

- "What if user creates 10 twins? 50?"
- "How does user know which twin did what?"
- "If twin makes mistake, how does user find out and fix?"
- "How does user know proxy actually attended?"
- "What if proxy misses something critical?"
- "How quickly can user review a 1-hour meeting?"
