# template-monorepo

A pnpm monorepo starter focused on TypeScript library packages.

## Includes

- `pnpm` workspace with `catalogs`
- 2 library packages: `@template/core`, `@template/utils`
- 1 demo app: `apps/playground` (Vite + TypeScript)
- Shared lint/typecheck/test/build setup
- GitHub Actions CI + release workflow skeleton

## Quick Start

```bash
pnpm install
pnpm prepare
pnpm dev
```

## Common Commands

```bash
pnpm build
pnpm test
pnpm typecheck
pnpm lint
pnpm test:ci
```

## Workspace Layout

```text
packages/
  core/
  utils/
apps/
  playground/
scripts/
.github/workflows/
```

## Notes

- Rename package scope (`@template/*`) before using in production.
- Adjust `release.yml` for your npm org and publishing policy.
- See `CONTRIBUTING.md` for branch strategy and contribution flow.
- See `.github/BRANCH_PROTECTION.md` for recommended GitHub protection rules.
