---
name: n8n-code-javascript
description: Write effective JavaScript code in n8n Code nodes.
---

# n8n Code JavaScript

## Data Access
- `$input.all()`: Get all items.
- `$input.first()`: Get first item metadata.
- `$input.item`: Use in "Run Once for Each Item" mode.

## Data Structure
Return an array of objects with a `json` property.
- ✅ Correct: `return [{ json: { myData: 123 } }];`
- ❌ Incorrect: `return { myData: 123 };`

## Built-in Helpers
- `$helpers.httpRequest()`: Make API calls.
- `DateTime`: Luxon for date handling.
