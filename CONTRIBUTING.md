# Contributing to Access Layer Client

Thanks for contributing to the frontend for Access Layer, a Stellar-native creator keys marketplace.

## Before you start

- Read the [README](./README.md) for product context.
- Review the scoped backlog in [docs/open-source/issue-backlog.md](./docs/open-source/issue-backlog.md).
- Prefer one issue per pull request.
- Open a discussion issue first if your change is large or changes architecture.

## Local setup

1. Install Node.js 20+ and `pnpm`.
2. Copy `.env.example` to `.env` and add any local values you need.
3. Install dependencies:

```bash
pnpm install
```

4. Start the dev server:

```bash
pnpm dev
```

## Verification commands

Run these before opening a pull request:

```bash
pnpm lint
pnpm build
```

The repository also uses Husky plus `lint-staged` to run lightweight checks on staged files before commit.

## Issue and PR rules

- Keep issue scopes concrete and implementation-ready.
- Reference the issue or backlog item in your pull request.
- Include screenshots for UI changes when possible.
- Avoid unrelated refactors in issue-scoped PRs.
- Update docs when setup, commands, or workflows change.

## Frontend conventions

- Preserve the product direction: Stellar-native creator keys marketplace.
- Keep copy concise and product-specific.
- Do not reintroduce old template-era pages or branding.
- Prefer accessible, keyboard-friendly UI behavior.
- Keep new routes focused and incremental until the main marketplace flows land.

### Folder structure

- `pages/`: Route-level components (each file maps to a route)
- `components/`: Reusable UI components and shared component logic
  - `components/common/`: Application-specific reusable components
  - `components/ui/`: Low-level UI primitives (from shadcn/ui or similar)
  - `components/home/`: Home/landing-page specific components
- `hooks/`: Custom React hooks
- `utils/` or `lib/`: Pure helper functions and utilities
- `constants/`: Application constants
- `contracts/`: Web3 contract ABIs and related logic
- `assets/`: Static assets (images, icons, etc.)

### Naming conventions

- **Components**: PascalCase (e.g., `CreatorCard.tsx`, `ConnectWalletButton.tsx`)
- **Hooks**: camelCase, prefixed with `use` (e.g., `useCopySuccessAnnouncement.ts`, `useNetworkMismatch.ts`)
- **Utilities/helpers**: camelCase (e.g., `formatNumber.ts`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `MAX_KEY_SUPPLY`)

### Components vs pages: decision guide

Use `pages/` when:
- The component is a top-level route or page entry point
- It represents a distinct URL path in the application

Use `components/` when:
- The component is reusable across multiple pages or routes
- It's a self-contained UI piece with a single responsibility
- It can be tested independently of route context

Keep components co-located in a page file only when:
- They are used exclusively within that single page
- They are small, helper components that don't make sense outside the page context
- Extracting them would add unnecessary indirection

## Good first issue guidance

Issues labeled `good first issue` should:

- have a narrow file scope
- include acceptance criteria
- avoid blockchain integration blockers
- be completable without hidden product context

## Questions

If something is unclear, open a documentation issue or ask in the repo before starting implementation.
