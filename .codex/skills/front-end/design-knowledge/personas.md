---
title: User Personas
impact: HIGH
impactDescription: Archetypes for design decisions—derived from actual prospect data
tags: personas, users, archetypes, research
source: Pattern analysis of 500+ demo requests (pros.txt)
---

# User Personas

> **Load when**: persona, user type, designing for, who is this for

---

## Persona Overview

| Persona | Core Need | Volume in Data |
|---------|-----------|----------------|
| Overwhelmed Executive | Scale presence | ~40% of requests |
| Knowledge Guardian | Preserve institutional knowledge | ~20% of requests |
| Context Juggler | Manage multi-project complexity | ~15% of requests |
| Solo Operator | Digital teammate | ~15% of requests |
| Efficiency Leader | Automate repetitive work | ~10% of requests |

---

## 1. The Overwhelmed Executive

### Profile
| Attribute | Detail |
|-----------|--------|
| Role | CEO, Founder, CTO, C-suite |
| Company | Startup to mid-market (10-500 employees) |
| Stage | Growth phase, post-funding, scaling |

### Situation
- Pulled in every direction—strategic, tactical, team, customers
- Global/distributed team expects availability across time zones
- Calendar is the enemy; back-to-back meetings leave no thinking time
- Org has grown but leadership bandwidth hasn't

### Goals
| Goal | Why It Matters |
|------|----------------|
| Be "available" without being present | Unblock team, maintain culture |
| Make faster decisions | Speed is competitive advantage |
| Preserve strategic context | Team needs access to "how I think" |

### Frustrations
| Frustration | Quote Pattern |
|-------------|---------------|
| Bottleneck anxiety | "things held up without my presence" |
| FOMO on meetings | "needed around the clock" |
| Repetitive explanation | "train every new joiner, every time" |

### Behavior
- First to request "meeting proxy" feature
- Wants twin to answer questions "like I would"
- Values speed over perfection
- Will delegate if trust is established

### Design Implications
| Implication | How to Address |
|-------------|----------------|
| Quick wins matter | Show value in first session, not after setup |
| Kill switch essential | Control reduces anxiety about delegation |
| Decision audit trail | Needs to verify twin acted correctly |

### Verbatim
> "Having a founder for my team to talk with rather than it needing to be the physical version all the time."

> "I'd like myself to be available for my team across the globe 24/7."

---

## 2. The Knowledge Guardian

### Profile
| Attribute | Detail |
|-----------|--------|
| Role | HR Leader, CTO, Chief of Staff |
| Company | Mid-market to Enterprise (100+ employees) |
| Focus | Talent, retention, institutional memory |

### Situation
- Watched critical knowledge walk out the door with departures
- "Bus factor" keeps them up at night
- Onboarding new hires is painful—takes months to ramp
- Tribal knowledge trapped in Slack DMs, undocumented

### Goals
| Goal | Why It Matters |
|------|----------------|
| Capture knowledge before people leave | Continuity, risk mitigation |
| Accelerate onboarding | Time-to-productivity is expensive |
| Make expertise searchable | Reduce dependency on individuals |

### Frustrations
| Frustration | Quote Pattern |
|-------------|---------------|
| Key-person dependency | "over-reliant on couple of key staff" |
| Knowledge loss on attrition | "worried about attrition and capability loss" |
| Documentation debt | "deep technical knowledge needed throughout" |

### Behavior
- Thinks organizationally, not individually
- Wants to create twins of *other* people, not just themselves
- Interested in offboarding use case as much as onboarding
- Evaluates ROI in terms of risk reduction

### Design Implications
| Implication | How to Address |
|-------------|----------------|
| Multi-twin management | UI for creating/managing team's twins |
| Knowledge capture flows | Make it easy to extract expertise |
| Audit/compliance friendly | Enterprise needs governance |

### Verbatim
> "Driving enterprise tribal knowledge to something collective."

> "Have information available when people are on leave."

> "We want to see how this digital twin tech can help us when a resource we deployed suddenly quits."

---

## 3. The Context Juggler

### Profile
| Attribute | Detail |
|-----------|--------|
| Role | Product Manager, VP, Multi-vertical Leader |
| Company | Any size |
| Workstyle | Managing multiple projects, initiatives, teams |

### Situation
- Context switching is their daily reality
- Deep in Project A, then yanked into Project B meeting
- Information scattered across 8 tools
- Can't remember what was decided 3 weeks ago

### Goals
| Goal | Why It Matters |
|------|----------------|
| Instant context recall | Reduce ramp-up time when switching |
| Unified memory across tools | One place for "what happened" |
| Surface relevant info proactively | Don't make me search |

### Frustrations
| Frustration | Quote Pattern |
|-------------|---------------|
| Context loss | "context isn't there when you need it" |
| Tool sprawl | "meetings, docs, code, interactions" |
| Mental load | "lot of context switch" |

### Behavior
- Wants the twin to "brief" them before meetings
- Values recall over action—"remind me what we decided"
- Power user of search
- Needs integrations with existing tools

### Design Implications
| Implication | How to Address |
|-------------|----------------|
| Pre-meeting briefings | Surface relevant context automatically |
| Cross-tool synthesis | Integrate with where context lives |
| Proactive surfacing | Don't wait for user to ask |

### Verbatim
> "I have a lot of context switch, for which this seems to be a great partner to help me regain context."

> "Global teams work across time zones; context isn't there when you need it."

> "I want to be able to ask my AI about all my meetings, docs, code, interactions."

---

## 4. The Solo Operator

### Profile
| Attribute | Detail |
|-----------|--------|
| Role | Solo Consultant, One-person Consultancy, Solo Founder |
| Company | 1-5 people (often just 1) |
| Reality | Doing everything themselves |

### Situation
- Wears every hat: sales, delivery, ops, admin
- Can't afford to hire but needs leverage
- Expertise is their product—but capacity is capped
- Works with distributed contractors

### Goals
| Goal | Why It Matters |
|------|----------------|
| Digital teammate | Handle volume without hiring |
| Clone expertise | Serve more clients |
| Delay hiring | Extend runway, stay lean |

### Frustrations
| Frustration | Quote Pattern |
|-------------|---------------|
| Capacity ceiling | "one-person consultancy" |
| Hiring cost | "delay the need to hire... indefinitely?" |
| Time poverty | "need all the bandwidth I can get" |

### Behavior
- Self-serve oriented—won't wait for enterprise sales
- Price sensitive but will pay for clear ROI
- Wants immediate value, not future promise
- May use twin for client-facing work

### Design Implications
| Implication | How to Address |
|-------------|----------------|
| Fast time-to-value | No lengthy onboarding |
| Clear pricing | Self-serve purchase path |
| Client-facing use cases | Twin that can represent them externally |

### Verbatim
> "I'm running a one-person consultancy and could really do with a digital twin to keep track of all the context."

> "Delay the need to hire... indefinitely?"

> "I'm a solo founder looking for a personalized trained teammate."

---

## 5. The Efficiency Leader

### Profile
| Attribute | Detail |
|-----------|--------|
| Role | Operations Manager, Team Lead, Director |
| Company | Mid-market+ |
| Focus | Process, scale, repeatability |

### Situation
- Answers the same questions repeatedly
- Team asks "how do I..." when they could ask documentation
- Scaling means process, not heroics
- Measures success in time saved

### Goals
| Goal | Why It Matters |
|------|----------------|
| Automate repetitive responses | Free up time for high-value work |
| Self-service for team | Reduce interruption load |
| Faster staff responses | Team productivity |

### Frustrations
| Frustration | Quote Pattern |
|-------------|---------------|
| Repetitive questions | "usually have repeatable answers" |
| Interruption cost | "faster responses to staff requests" |
| Knowledge not searchable | "responder for basic and repetitive issues" |

### Behavior
- Thinks in workflows and processes
- Wants to define "if X, then Y" rules
- Measures ROI in hours saved
- Will invest in setup if payoff is clear

### Design Implications
| Implication | How to Address |
|-------------|----------------|
| Rule/workflow builder | Let them define repeatable responses |
| Analytics on time saved | Prove ROI |
| Team access controls | Multiple people querying one twin |

### Verbatim
> "I am needed around the clock and usually have repeatable answers."

> "Responder for basic and repetitive issues."

> "Faster responses to staff requests."

---

## Persona Gaps & Validation Needs

| Gap | What We Don't Know |
|-----|-------------------|
| Persona prioritization | Which persona has highest LTV? |
| Activation patterns | What does first-week success look like per persona? |
| Churn risk | Which persona is most likely to churn and why? |
| Feature mapping | Which features matter most per persona? |
| Willingness to pay | Price sensitivity per persona? |

---

## Cross-Persona Patterns

### Universal Needs
| Need | Why Universal |
|------|---------------|
| Trust before delegation | All personas need to verify before fully delegating |
| Quick value demonstration | No one will wait weeks to see benefit |
| Control/kill switch | Every persona wants the ability to stop |

### Differentiators
| Dimension | Executive | Guardian | Juggler | Solo | Efficiency |
|-----------|-----------|----------|---------|------|------------|
| Primary use | Meetings | Knowledge capture | Context recall | Expertise clone | FAQ automation |
| Buying trigger | Bandwidth crisis | Attrition event | Tool fatigue | Capacity limit | Support ticket volume |
| Success metric | Meetings covered | Knowledge preserved | Context found | Clients served | Queries automated |

---

## Design Prioritization Matrix

| Feature | Executive | Guardian | Juggler | Solo | Efficiency |
|---------|:---------:|:--------:|:-------:|:----:|:----------:|
| Meeting proxy | +++ | + | ++ | + | + |
| Knowledge capture | + | +++ | ++ | + | ++ |
| Context briefing | ++ | + | +++ | + | + |
| Multi-twin mgmt | + | +++ | + | - | ++ |
| Self-serve setup | ++ | + | + | +++ | + |
| Workflow rules | + | + | + | + | +++ |

`+++` = Critical | `++` = Important | `+` = Nice to have | `-` = Less relevant
