---
name: appointments-status-pill-quirk
description: StatusPill colors come from the `status` prop, not `tone`; patient pills render the default color
metadata:
  type: reference
---

`src/features/status-pill.jsx` picks its background via `TONES[status]`, keyed on the `status` prop (values like `confirmed`/`pending`/`canceled`). The `tone` prop only sets a `data-tone` attribute — it does NOT drive color.

Consequence (preserved on purpose during the 2026-06-04 table refactor, since the user asked to "keep everything the same"): the patients table passes `tone={statusTone}` without a `status` prop, so every patient pill falls back to `status="pending"` styling. The appointments table passes `status={...}` so its pills are correctly colored.

If asked to fix patient pill colors, pass a real `status` (or map `statusTone` → a TONES key) in `src/pages/dashboard/patients/components/columns.jsx`. See [[dashboard-folder-convention]].
