# AI Interaction Guidelines — Portfolio

## Communication
- Be concise and direct
- Explain non-obvious decisions briefly
- Ask before large refactors or structural changes
- Don't add features not in project-overview.md
- Never delete files without clarification

## Workflow
This is the workflow for every feature/fix:

1. **Document** — Document the feature in @context/current-feature.md
2. **Branch** — Create new branch for feature or fix
3. **Implement** — Implement what is documented in current-feature.md
4. **Test** — Verify it works in the browser. Run `npm run build` and fix any errors
5. **Iterate** — Make changes if needed
6. **Commit** — Only after build passes and everything works
7. **Merge** — Merge to main
8. **Delete Branch** — Delete branch after merge
9. **Review** — Review AI-generated code periodically
10. Mark as completed in @context/current-feature.md and add to history

Do NOT commit without permission and until the build passes.

## Branching
- New branch for every feature or fix
- Naming: `feature/[feature]` or `fix/[fix]`
- Ask to delete branch once merged

## Commits
- Ask before committing — no auto-commits
- Use conventional commit messages: `feat:`, `fix:`, `chore:`
- Keep commits focused — one feature per commit
- Never put "Generated with OpenCode" in commit messages

## When Stuck
- If something isn't working after 2-3 attempts, stop and explain
- Don't keep trying random fixes
- Ask for clarification if requirements are unclear

## Code Changes
- Minimal changes to accomplish the task
- Don't refactor unrelated code unless asked
- Don't add unrequested features
- Preserve existing patterns in the codebase