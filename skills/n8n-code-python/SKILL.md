---
name: n8n-code-python
description: Write Python code in n8n Code nodes with proper limitations awareness.
---

# n8n Code Python

## ⚠️ Important
Use JavaScript for 95% of use cases. Python is best for complex data manipulation or statistical analysis.

## Limitations
- **No External Libraries**: You cannot `import requests` or `import pandas`.
- **Standard Library Only**: `json`, `datetime`, `re`, `math` are available.

## Data Structure
Access via `_input.all()`. Return format must match JS: `[{ "json": { ... } }]`.
