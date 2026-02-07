---
title: AI Interface Patterns
impact: HIGH
impactDescription: AI chat, streaming, agents, citations, context management
tags: ai, chat, streaming, agent, citations, context, trust, conversation
---

# AI Interface Patterns

> **Load when**: `ai`, `chat`, `streaming`, `agent`, `citations`, `context`, `transcription`, `conversation`

---

## AI Interaction Types

| Type | Pattern | Examples |
|------|---------|----------|
| Conversational | Chat, streaming, threads | Claude, ChatGPT |
| AI-assisted creation | Inline suggestions, accept/reject | Cursor, Notion AI |
| Transcription | Real-time captions, speaker attribution | Otter, Fireflies |
| Search/retrieval | Citations, source grounding | Perplexity, NotebookLM |

---

## Streaming

| Rule | Implementation |
|------|----------------|
| Start within 500ms | Or show "Thinking..." indicator |
| Buffer 2-3 tokens | Prevents jitter |
| Stop button | REQUIRED - user must be able to cancel |
| Auto-scroll | Only if user is at bottom |
| Error mid-stream | Show partial response + error message |

---

## Chat Interface

| Element | Required |
|---------|----------|
| User/AI distinction | YES - side, color, or avatar |
| Multi-line input | YES - Shift+Enter for newline |
| Code blocks | Syntax highlight + copy button |
| Regenerate | Button on AI messages |
| Message actions | Copy, edit visible on hover |

### Context Management

| Show | Hide |
|------|------|
| What sources AI is using | Token counts |
| When context is full | Internal model details |
| What AI doesn't have access to | Raw confidence percentages |

---

## Citations

| Element | Implementation |
|---------|----------------|
| Format | [1], [2] inline references |
| Clickable | Link to source or expand |
| Source panel | Collapsible, shows excerpt |
| Hover preview | Show snippet on hover |

**Rule**: No claim without citation OR explicit uncertainty hedge.

---

## Accept/Reject Flows (Cursor Model)

| Step | UI |
|------|-----|
| 1. Trigger | Cmd+K or automatic |
| 2. Preview | Diff view: green additions, red deletions |
| 3. Decision | Accept (Cmd+Enter) / Reject (Cmd+Backspace) |
| 4. Undo | Cmd+Z always available |

**Rule**: Nothing applied until user confirms. Selective acceptance supported.

---

## Transcription

| Element | Pattern |
|---------|---------|
| Live caption | Minimal latency stream |
| Speaker labels | Color-coded, named |
| Confidence | Low-confidence words visually distinct |
| Timestamps | Click text → jump to audio |
| Summary | TL;DR + key points + action items |

---

## Uncertainty Communication

| Instead of | Use |
|------------|-----|
| Confident wrong answer | "I'm not certain, but..." |
| Hallucinated source | "Based on [actual source]" or "No source" |
| Pretend knowledge | "This is outside what I can access" |

---

## Implementation Rules

```
□ Streaming starts within 500ms or shows thinking
□ Stop button visible during generation
□ Auto-scroll respects user scroll position
□ Citations are clickable and verified
□ Diff view shows additions/deletions clearly
□ Accept/reject has undo capability
□ Context limit warning before truncation
□ Uncertainty communicated explicitly
```

---

## Anti-Patterns

| Don't | Why |
|-------|-----|
| Confident hallucinations | Single bad answer destroys trust |
| No citation for claims | Unverifiable = untrustworthy |
| No stop button | User feels trapped |
| Context amnesia without warning | User confused by "forgetting" |
| Auto-execute irreversible actions | User loses control |
| No undo for AI changes | Risk aversion prevents adoption |

---

## Review Questions

- "What does user think AI knows right now?"
- "If AI is wrong, how does user discover and recover?"
- "What's the irreversible action? Is there a gate?"
- "How does user verify AI did what they expected?"
- "What's the trust-building vs trust-destroying moment?"
