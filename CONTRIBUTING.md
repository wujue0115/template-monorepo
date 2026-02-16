# Contributing Guide

This repository follows a trunk-based workflow with optional release branches.

## Branching Model

- `main`: always releasable, protected, no direct pushes.
- `feat/<scope>-<topic>`: feature work.
- `fix/<scope>-<topic>`: bug fixes.
- `chore/<topic>`: maintenance and tooling updates.
- `release/<major.minor>`: optional stabilization branch for active minor lines.
- `hotfix/<scope>-<topic>`: urgent production fixes.

## Development Flow

1. Create a short-lived branch from `main`.
2. Make focused changes and add tests.
3. Run checks locally:

```bash
pnpm test:ci
```

4. Open a PR to `main` with a conventional commit title.
5. Squash or rebase merge after review and passing checks.

## Commit Message Convention

Use Conventional Commits with package scope where possible.

- `feat(core): add X`
- `fix(utils): handle Y`
- `chore(repo): update CI`

## Release Flow

1. Tag from `main` for normal releases (`v1.2.3`).
2. If a minor line needs patch-only maintenance, branch `release/1.2`.
3. For urgent fixes, create `hotfix/...` from `main`, merge it to `main`, and cherry-pick to maintained `release/*` branches if needed.

## Pull Request Checklist

- [ ] Changes are scoped and documented.
- [ ] Tests added/updated when behavior changed.
- [ ] `pnpm test:ci` passes locally.
- [ ] Commit/PR title follows Conventional Commits.
