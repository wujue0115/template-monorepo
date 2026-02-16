# Recommended Branch Protection

Apply these rules to `main` and each maintained `release/*` branch.

## Core Rules

- Require a pull request before merging.
- Require at least 1 approval.
- Dismiss stale approvals when new commits are pushed.
- Require conversation resolution before merging.
- Require branches to be up to date before merging.
- Restrict who can push directly (ideally nobody).

## Required Status Checks

Configure GitHub to require these checks from CI:

- `Build`
- `Test`
- `Typecheck`
- `Lint`

If you keep them under one workflow job, require that single job instead.

## Merge Strategy

- Enable squash merge or rebase merge.
- Disable merge commits if you want linear history.

## Tag and Release Permissions

- Restrict who can create release tags (`v*`).
- Protect npm token usage through GitHub environment or repository secrets.
