# Demo Repositories

These fixture repositories are intended for controlled dependency and security scanning demos.

- `safe-repo`: clean baseline with current dependency versions.
- `vulnerable-repo`: includes `lodash@4.17.15` to produce a predictable vulnerability finding.
- `outdated-dependencies`: uses intentionally older versions to demonstrate stale dependency reporting.

Each repo includes multiple dependency sections so scanners can validate `dependencies`, `devDependencies`, `optionalDependencies`, and `peerDependencies`.
