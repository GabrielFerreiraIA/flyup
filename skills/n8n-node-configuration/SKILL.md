---
name: n8n-node-configuration
description: Operation-aware node configuration guidance.
---

# n8n Node Configuration

## Property Dependencies
Properties often depend on the selected **Resource** and **Operation**.
- Example: `sendBody` must be true to show `contentType` in HTTP Request.

## get_node Usage
Always run `get_node` with the specific `nodeType` to see available operations and parameters.

## Mode Selection
- **Run Once for All Items**: Best for aggregations.
- **Run Once for Each Item**: Best for individual transforms.
