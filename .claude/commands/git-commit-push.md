---
description: Automatically stage, commit with generated message, and push changes
allowed-tools: Bash(git add:*), Bash(git commit:*), Bash(git push:*)
---

# Git Commit and Push

Automatically execute the complete git workflow: add, commit, and push.

## Workflow

1. **Stage all changes**
   ```bash
   git add .
   ```

2. **Generate commit message**
   - Analyze the current git diff
   - Generate a meaningful commit message based on the changes
   - Follow conventional commit format: `feat: <description>`, `fix: <description>`, etc.

3. **Execute commit**
   ```bash
   git commit -m "<generated message>"
   ```

4. **Determine and execute push**
   - Check if the current branch has an upstream set
   - If this is the first push:
     ```bash
     git push --set-upstream origin <current-branch-name>
     ```
   - If upstream already exists:
     ```bash
     git push
     ```

## Usage

In Claude Code, type:
```
/git-commit-push
```

## Notes

- Stages all untracked and modified files
- Commit message is automatically generated based on actual changes
- Automatically determines whether upstream setup is needed
- Ensure you're in a valid git repository before executing