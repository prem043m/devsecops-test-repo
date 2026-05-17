# devsecops-test-repo

Controlled demo fixtures for automated dependency and security scanning.

## Demo Repos

The `demo-repos/` folder contains three separate fixture repositories:

- `safe-repo` for a clean scan with no known vulnerabilities.
- `vulnerable-repo` for a deterministic vulnerable dependency demo using `lodash@4.17.15`.
- `outdated-dependencies` for older dependency versions that are intentionally not current.

Each fixture includes multiple dependency sections so the scanner can validate real package metadata:

- `dependencies`
- `devDependencies`
- `optionalDependencies`
- `peerDependencies`

## Scripted Demo Flow

Use this flow exactly during the live demo:

1. Open the VS Code extension.
2. Show the sidebar sections: `Repositories`, `Dependencies`, and `Governance`.
3. Click `Run Security Scan`.
4. Say: `This triggers backend workers through Redis and BullMQ. The scan request is queued, picked up by workers, and processed asynchronously so the UI stays responsive.`
5. Call out the queues explicitly: repository discovery, dependency analysis, and governance checks.
6. Switch between the three fixture repos to show how the scan results differ in a controlled way.

## Fixture Summary

- `safe-repo`: clean baseline with current package versions.
- `vulnerable-repo`: includes a vulnerable `lodash` version for a predictable finding.
- `outdated-dependencies`: uses older versions intentionally to demonstrate stale dependency reporting.