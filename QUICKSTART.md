# Quick Start

Get the Blender Skills Pack running in Cursor or Claude Code with Blender MCP.

## 1. Install Skills

### Skills CLI (Recommended — all agents)

The [skills CLI](https://skills.sh) detects your installed agents (Claude Code, Cursor, Codex, and more) and installs to the right locations:

```bash
npx skills add arjun988/blender-skills
```

Options: `--list` to browse, `-s <skill>` for specific skills, `-a claude-code -a cursor` to target agents, `-g` for a global (user-level) install.

### Claude Code (Plugin)

From your project or globally:

```bash
/plugin marketplace add arjun988/blender-skills
/plugin install blender-skills@arjun988
```

Replace `arjun988` with your GitHub username after publishing the repo.

### Manual

Skills are at `skills/`. Copy to your project:

```bash
cp -r skills /path/to/your/project/.claude/skills/    # Claude Code
cp -r skills /path/to/your/project/.agents/skills/    # Cursor / Codex
```

## 2. Connect Blender MCP

Full guide: [docs/BLENDER_MCP_SETUP.md](docs/BLENDER_MCP_SETUP.md)

**Quick version:**

1. Install [uv](https://docs.astral.sh/uv/getting-started/installation/)
2. Install BlenderMCP addon in Blender ([addon.py](https://github.com/ahujasid/blender-mcp/raw/main/addon.py))
3. In Blender sidebar (N) → **BlenderMCP** → **Connect to Claude**
4. Restart Cursor — this repo's `.cursor/mcp.json` is preconfigured

## 3. First Prompt

Start complex tasks with the director skill:

```
Plan and create a game-ready sci-fi crate for Unity — 1500 tris, realistic PBR, export to FBX
```

The agent should:
1. Activate **blender-director** → output production brief
2. Route to **hard-surface** + **realistic-style**
3. Execute via Blender MCP (not UI walkthroughs)
4. Validate with **asset-optimization** → **export-pipeline**

## 4. Skill Routing Cheat Sheet

| Task | Skills |
|------|--------|
| Any new asset | blender-director |
| Sci-fi prop / weapon | hard-surface |
| Modular environment | environment-artist + geometry-nodes |
| Character | character-artist → retopology → rigging |
| Horror scene | horror-style + lighting + lowpoly-style |
| Export to engine | asset-optimization → export-pipeline |

Full decision trees: [SKILLS_GUIDE.md](SKILLS_GUIDE.md)

## 5. Verify Setup

- [ ] Skills visible in agent context (try mentioning "blender-director")
- [ ] Blender MCP connected (green status in addon)
- [ ] Test: *"List objects in the current Blender scene"*
- [ ] Collections use `COL_` prefix, meshes use `SM_` prefix

## Documentation

| Doc | Purpose |
|-----|---------|
| [README.md](README.md) | Overview |
| [SKILLS_GUIDE.md](SKILLS_GUIDE.md) | Skill index and workflows |
| [CLAUDE.md](CLAUDE.md) | Project instructions for agents |
| [docs/BLENDER_MCP_SETUP.md](docs/BLENDER_MCP_SETUP.md) | MCP connection guide |

## Troubleshooting

**Skills not activating:** Ensure skills are in `.agents/skills/` (Cursor/Codex) or `.claude/skills/` (Claude Code) — `npx skills list` shows what's installed where.

**MCP not connecting:** See [docs/BLENDER_MCP_SETUP.md](docs/BLENDER_MCP_SETUP.md) — usually uv PATH or Blender addon not started.

**Agent describes UI instead of executing:** Remind it: *"Use Blender MCP tools"* — skills enforce MCP-first in `docs/references/mcp-integration.md`.
