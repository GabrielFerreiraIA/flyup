---
name: n8n-mcp-tools-expert
description: Expert guide for using n8n-mcp MCP server tools effectively.
---

# n8n MCP Tools Expert

Expert guide for using n8n-mcp MCP tools effectively.

## Critical: Connection Syntax
The `addConnection` operation requires **four separate string parameters**.
- ✅ CORRECT:
```json
{
  "type": "addConnection",
  "source": "node-1",
  "target": "node-2",
  "sourcePort": "main",
  "targetPort": "main"
}
```

## Critical: IF Node Routing
Use the `branch` parameter for IF nodes:
- `branch: "true"` for success path.
- `branch: "false"` for failure path.

## Tool Selection
- `search_nodes`: Find node types.
- `get_node`: Get configuration schema.
- `validate_node`: Check config before building.
- `n8n_update_partial_workflow`: Batch multiple changes.
- `validate_workflow`: Final check.

## Node Types
- Core nodes: `n8n-nodes-base.<name>`
- LangChain/AI: `@n8n/n8n-nodes-langchain.<name>`
