# Plugin Stress + Sanity TODO

Last run: 2026-02-14

## Configuration Consolidation
- [x] Keep all stress-tuning numeric knobs in one file: `src/plugin/limits.ts`
- [x] Move complexity thresholds and tier runtime budgets into `src/plugin/limits.ts`
- [x] Keep `src/plugin/helpers/complexity.ts` logic-only (no hardcoded tuning numbers)
- [x] Confirm property/two-way caps read through `getLimit(...)` for runtime scaling

## Functional Safety
- [x] Full Handoff keeps visual anatomy mode (no tabular-only output)
- [x] Quick Check keeps visual anatomy mode
- [x] Artwork skip only when `data && agentReadyData && aiCompactMode`
- [x] Runtime limit overrides always cleaned up via `finally` in generation/copy flows

## Stress Tests
- [x] Add unit tests for complexity tier detection (`tests/unit/complexity.test.ts`)
- [x] Add unit stress tests for large anatomy truncation vs enterprise override (`tests/unit/stress-runtime-limits.test.ts`)
- [x] Validate runtime budget metadata appears in payload summary (`summary.runtime_budget`)

## Sanity Checks (Executed)
- [x] `npm run typecheck`
- [x] `npm run test:unit` (289/289 passed)
- [x] `npm run test:ui` (19/19 passed)
- [x] `npm run build`

## Exit Criteria
- [x] No failing checks in plugin pipeline
- [x] Single-page configuration requirement satisfied
- [x] README + AGENTS updated with new stress architecture
