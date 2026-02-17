---
name: n8n-validation-expert
description: Interpret validation errors and guide fixing.
---

# n8n Validation Expert

## Validation Levels
1. **Minimal**: Check required fields only.
2. **Runtime**: Full check with operation context (Recommended).
3. **Workflow**: Final structural check.

## Common Fixes
- **missing_required**: Check if all mandatory fields for the operation are set.
- **invalid_expression**: Verify `{{ }}` syntax and node names.
- **type_mismatch**: Ensure strings/numbers/booleans are assigned correctly.

## Auto-fix
Use `n8n_autofix_workflow` for common structural repairs.
