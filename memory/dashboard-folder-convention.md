---
name: dashboard-folder-convention
description: How dashboard pages, page-local components, and reusable features are organized in this React app
metadata:
  type: project
---

Folder conventions for this doctors-appointment app (enforced 2026-06-04):

- Each dashboard page lives in its own folder under `src/pages/dashboard/<page>/` with an `index.jsx` holding the page's main composition, plus a `components/` subfolder for that page's sub-components (e.g. `appointments/components/` has `appointment-toolbar.jsx`, `appointment-modal.jsx`, `columns.jsx`, `group-header.jsx`).
- `src/features/` is ONLY for components reused across the whole site (e.g. `panel`, `stat-card`, `status-pill`, `bar-chart`, `data-table`, `doctor-card` — used by both home and dashboard, `app-sidebar`, `dashboard-topbar`). A component used by a single page belongs in that page's `components/`, not here.
- Inline sub-components (like `ScheduleItem`, `DepartmentBar`, `DistributionRow`) should be extracted into the page's `components/` folder, not left defined inside `index.jsx`.

**Why:** The user wants a consistent per-page structure and a clean separation between page-local and site-wide reusable pieces.

**How to apply:** When adding a dashboard page, scaffold `<page>/index.jsx` + `<page>/components/`. Before putting something in `features/`, confirm it's used by 2+ areas of the site.

Tables use TanStack Table via the reusable `@/features/data-table` `DataTable` ({columns, data}); column defs (headers) live in each page's `components/columns.jsx`, separate from the data. See [[appointments-status-pill-quirk]].
