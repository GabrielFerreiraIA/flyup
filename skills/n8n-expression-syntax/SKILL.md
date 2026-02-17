---
name: n8n-expression-syntax
description: Expert guide for writing correct n8n expressions in workflows.
---

# n8n Expression Syntax

Teaches correct n8n expression syntax and common patterns.

## Core Variables
- `$json`: Access current node output.
- `$node["Node Name"]`: Reference other nodes.
- `$now`: Current timestamp.
- `$env`: Environment variables.

## Critical: Webhook Data
Webhook data is ALWAYS under `$json.body`.
- ✅ Correct: `{{ $json.body.id }}`
- ❌ Incorrect: `{{ $json.id }}`

## Common Patterns
- Nested fields: `{{ $json.body.user.email }}`
- Other nodes: `{{ $node["HTTP Request"].json.data.id }}`

## Validation Rules
1. Always use `{{ }}` wrappers.
2. Use quotes for node names with spaces.
3. Match exact node names.
4. No nested `{{ }}`.
