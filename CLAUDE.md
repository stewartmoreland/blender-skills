# Blender Skills Project

Blender Skills Pack for Cursor, Claude Code, and the Vercel skills CLI (skills.sh) with Blender MCP integration.

## Project Structure

```
skills/                  # 94 self-contained specialist skills (single source of truth)
skills.sh.json           # skills.sh page groupings (Vercel skills CLI)
.claude-plugin/          # plugin.json + marketplace.json (point at ./skills/)
.claude/skills           # Symlink -> skills/ (in-repo Claude Code sessions)
.cursor/mcp.json         # Blender MCP (Cursor)
.mcp.json                # Blender MCP (Claude Code)
docs/BLENDER_MCP_SETUP.md
docs/references/         # Canonical shared standards (copied into skills that use them)
```

## Agent Instructions

1. For Blender asset tasks, read **blender-director** first for complex work
2. **If user attaches a reference image:** read `docs/references/reference-image-match.md` and complete Reference Analysis before MCP execution
3. **Check Blender MCP** — if connected, execute via MCP; never narrate UI steps
4. Read MCP tool schemas before calling (see `docs/references/mcp-tools.md`)
5. Follow universal pipeline in `docs/references/asset-pipeline.md`
6. Validate before export using `docs/references/validation-checklist.md`
7. For reference tasks, also run `docs/references/visual-match-checklist.md`
8. Use naming conventions from `docs/references/naming-conventions.md`

## Maintaining Skills

- Each skill in `skills/<name>/` must be **self-contained**: SKILL.md may only link files inside its own directory (`references/...`), never `../` paths — the skills CLI installs skill directories individually.
- Canonical copies of shared standards live in `docs/references/`; when editing one, sync the copies inside skills that embed it (`grep -rl <filename> skills/*/references`).
- New skills must be added to a grouping in `skills.sh.json`.

## MCP Setup

Blender must be running with the BlenderMCP addon connected. See `docs/BLENDER_MCP_SETUP.md`.

## Key Files

- `QUICKSTART.md` — Installation
- `SKILLS_GUIDE.md` — Decision trees and workflows
- `README.md` — Overview
