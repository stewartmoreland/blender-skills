import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const skillCategories = [
  {
    id: 'orchestration',
    title: 'Orchestration',
    description: 'Pipeline planning, skill routing, and production briefs. Always start here for complex tasks.',
    skills: [
      {
        name: 'blender-director',
        desc: 'Analyzes your request, selects the right specialists, outputs a production brief, and orchestrates the full pipeline.',
        tags: ['routing', 'planning', 'orchestration'],
      },
    ],
  },
  {
    id: 'modeling',
    title: 'Modeling Disciplines',
    description: 'Specialist modelers for every asset type — props, environments, characters, and creatures.',
    skills: [
      {
        name: 'blender-modeler',
        desc: 'General modeling, Edit Mode workflows, modifiers, scene organization, and blockouts.',
        tags: ['edit-mode', 'modifiers', 'blockout'],
      },
      {
        name: 'hard-surface',
        desc: 'Sci-fi props, weapons, vehicles, and mechanical assets. Boolean/bevel workflows, panel lines, greebles.',
        tags: ['sci-fi', 'weapons', 'vehicles', 'booleans'],
      },
      {
        name: 'environment-artist',
        desc: 'Modular kits, terrain, architecture, and game-optimized environment pipelines with 2m grid snapping.',
        tags: ['modular', 'terrain', 'architecture'],
      },
      {
        name: 'character-artist',
        desc: 'Human anatomy, facial topology, clothing, hair, and animation-ready character meshes.',
        tags: ['character', 'anatomy', 'facial'],
      },
      {
        name: 'creature-artist',
        desc: 'Monsters, fantasy creatures, aliens, and organic design with believable anatomy and movement.',
        tags: ['creature', 'organic', 'fantasy'],
      },
    ],
  },
  {
    id: 'workflow',
    title: 'Production Workflow',
    description: 'The sculpt → retopo → UV → materials → textures pipeline. Used after high-poly modeling.',
    skills: [
      {
        name: 'sculpting',
        desc: 'High-frequency surface detail using Dyntopo, multiresolution, brushes, alphas, wrinkles, and damage.',
        tags: ['dyntopo', 'multires', 'alphas'],
      },
      {
        name: 'retopology',
        desc: 'Animation-ready, quad-dominant meshes with proper edge loops and efficient polygon flow.',
        tags: ['quads', 'edge-loops', 'animation-ready'],
      },
      {
        name: 'uv-workflow',
        desc: 'Seam placement, UV packing, texel density, UDIM, lightmap UVs, and modular UV layouts.',
        tags: ['uvs', 'texel-density', 'udim'],
      },
      {
        name: 'materials',
        desc: 'PBR and stylized materials for metal, wood, concrete, fabric, glass, and procedural shaders.',
        tags: ['pbr', 'procedural', 'shaders'],
      },
      {
        name: 'texture-workflow',
        desc: 'Baking AO, curvature, normals, ORM packing, atlases, decals, and texture memory optimization.',
        tags: ['baking', 'normals', 'atlases'],
      },
    ],
  },
  {
    id: 'technical',
    title: 'Technical Skills',
    description: 'Procedural systems, lighting, rendering, animation, and rigging.',
    skills: [
      {
        name: 'geometry-nodes',
        desc: 'Scatter systems, procedural vegetation, buildings, pipes, cables, and reusable node groups.',
        tags: ['procedural', 'scatter', 'node-groups'],
      },
      {
        name: 'lighting',
        desc: 'Three-point lighting, HDRI, horror lighting, volumetrics, rim lighting, and mood-driven illumination.',
        tags: ['hdri', 'volumetrics', 'cinematic'],
      },
      {
        name: 'rendering',
        desc: 'Cycles and Eevee — sampling, denoising, camera setup, render passes, and color management.',
        tags: ['cycles', 'eevee', 'denoising'],
      },
      {
        name: 'animation',
        desc: 'Walk/run/idle cycles, combat, mechanical animation, Graph Editor, and NLA workflows.',
        tags: ['locomotion', 'nla', 'graph-editor'],
      },
      {
        name: 'rigging',
        desc: 'Armatures, IK/FK, constraints, weight painting, mechanical rigs, facial rigs, and drivers.',
        tags: ['ik-fk', 'weight-paint', 'drivers'],
      },
    ],
  },
  {
    id: 'pipeline',
    title: 'Pipeline',
    description: 'Procedural asset creation, optimization gate, and multi-format export. Use before every delivery.',
    skills: [
      {
        name: 'procedural-modeling',
        desc: 'Rocks, buildings, vegetation, roads, terrain, pipes, and cables using Geometry Nodes and modifier stacks.',
        tags: ['procedural', 'rocks', 'vegetation'],
      },
      {
        name: 'asset-optimization',
        desc: 'Validates polycount, topology, UV efficiency, material count, naming, and game-ready performance.',
        tags: ['validation', 'polycount', 'lod'],
      },
      {
        name: 'export-pipeline',
        desc: 'Production export to FBX, GLTF, OBJ, USD, and Alembic with scale, pivot, and normals verification.',
        tags: ['fbx', 'gltf', 'usd'],
      },
    ],
  },
  {
    id: 'style',
    title: 'Style Specialists',
    description: 'Art direction skills that define the visual language of your project before modeling begins.',
    skills: [
      {
        name: 'horror-style',
        desc: 'Psychological horror inspired by Silent Hill, Resident Evil, and Iron Lung. Sparse industrial environments, analog aesthetics.',
        tags: ['horror', 'silent-hill', 'atmospheric'],
      },
      {
        name: 'lowpoly-style',
        desc: 'PS1/PS2 aesthetic inspired by Lethal Company and Mouthwashing. Minimal polygons, strong silhouettes.',
        tags: ['lowpoly', 'ps1', 'retro'],
      },
      {
        name: 'stylized-style',
        desc: 'NPR rendering, hand-painted assets, shape exaggeration, and color harmony for non-photorealistic projects.',
        tags: ['npr', 'hand-painted', 'cartoon'],
      },
      {
        name: 'realistic-style',
        desc: 'Photorealistic AAA PBR, photogrammetry cleanup, real-world scale, and high-poly workflows.',
        tags: ['aaa', 'photogrammetry', 'cinematic'],
      },
    ],
  },
]

const workflows = [
  {
    title: 'Hero Hard Surface Prop',
    pipeline: ['blender-director', 'hard-surface', 'uv-workflow', 'materials', 'asset-optimization', 'export-pipeline'],
  },
  {
    title: 'Game Character',
    pipeline: ['blender-director', 'character-artist', 'sculpting', 'retopology', 'uv-workflow', 'texture-workflow', 'rigging', 'animation', 'export-pipeline'],
  },
  {
    title: 'Horror Environment',
    pipeline: ['blender-director', 'horror-style', 'environment-artist', 'lighting', 'lowpoly-style', 'asset-optimization', 'export-pipeline'],
  },
  {
    title: 'Modular Kit',
    pipeline: ['blender-director', 'environment-artist', 'geometry-nodes', 'uv-workflow', 'texture-workflow', 'asset-optimization', 'export-pipeline'],
  },
  {
    title: 'Procedural Scatter',
    pipeline: ['blender-director', 'geometry-nodes', 'procedural-modeling', 'asset-optimization'],
  },
  {
    title: 'Reference Image Match',
    pipeline: ['blender-director', 'reference-image-match', 'Camera match', 'Geometry tiers', 'Materials', 'Screenshot loop', 'visual-match-checklist'],
  },
]

const namingRef = [
  { type: 'Collections', prefix: 'COL_' },
  { type: 'Meshes', prefix: 'SM_' },
  { type: 'Materials', prefix: 'MAT_' },
  { type: 'Textures', prefix: 'T_' },
  { type: 'Animations', prefix: 'AN_' },
  { type: 'Armatures', prefix: 'ARM_' },
  { type: 'Geo Node Groups', prefix: 'GN_' },
  { type: 'Cameras', prefix: 'CAM_' },
  { type: 'Lights', prefix: 'LGT_' },
]

export default function SkillsPage() {
  return (
    <div className="max-w-4xl space-y-16 pb-16">
      {/* Header */}
      <div className="space-y-3">
        <Badge>Skills Guide</Badge>
        <h1 className="text-4xl font-bold tracking-tight">Skills Guide</h1>
        <p className="text-lg text-muted-foreground">
          Decision trees, workflow combinations, and the full skill index for the Blender Skills pack.
          Start any production task with <strong>blender-director</strong>.
        </p>
      </div>

      {/* Decision Tree */}
      <section className="space-y-5" id="decision-tree">
        <h2 className="text-2xl font-bold tracking-tight border-b pb-2">Decision Trees</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">What are you making?</CardTitle>
            </CardHeader>
            <CardContent className="pt-0 space-y-1 text-xs font-mono text-muted-foreground">
              <p>Hard surface prop → <span className="text-primary">hard-surface</span></p>
              <p>Environment/level → <span className="text-primary">environment-artist</span></p>
              <p>Human character → <span className="text-primary">character-artist</span></p>
              <p>Creature/monster → <span className="text-primary">creature-artist</span></p>
              <p>Procedural → <span className="text-primary">geometry-nodes</span></p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">What style?</CardTitle>
            </CardHeader>
            <CardContent className="pt-0 space-y-1 text-xs font-mono text-muted-foreground">
              <p>Horror → <span className="text-primary">horror-style</span></p>
              <p>Retro/low poly → <span className="text-primary">lowpoly-style</span></p>
              <p>Cartoon/NPR → <span className="text-primary">stylized-style</span></p>
              <p>Photoreal → <span className="text-primary">realistic-style</span></p>
              <p>Unspecified → <span className="text-primary">blender-director</span></p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Pipeline stage?</CardTitle>
            </CardHeader>
            <CardContent className="pt-0 space-y-1 text-xs font-mono text-muted-foreground">
              <p>Starting fresh → <span className="text-primary">blender-director</span></p>
              <p>Sculpt done → <span className="text-primary">retopology</span></p>
              <p>Topo done → <span className="text-primary">uv-workflow</span></p>
              <p>Look dev → <span className="text-primary">lighting → rendering</span></p>
              <p>Ready to ship → <span className="text-primary">asset-optimization</span></p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Workflows */}
      <section className="space-y-5" id="workflows">
        <h2 className="text-2xl font-bold tracking-tight border-b pb-2">Workflow Pipelines</h2>
        <div className="space-y-3">
          {workflows.map((wf) => (
            <div key={wf.title} className="rounded-lg border p-4">
              <p className="font-semibold text-sm mb-3">{wf.title}</p>
              <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono">
                {wf.pipeline.map((step, i) => (
                  <span key={i} className="flex items-center gap-1.5">
                    <span className="bg-muted rounded px-2 py-1 text-muted-foreground">{step}</span>
                    {i < wf.pipeline.length - 1 && (
                      <span className="text-muted-foreground/40">→</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skill Index */}
      <section className="space-y-10">
        <h2 className="text-2xl font-bold tracking-tight border-b pb-2">Skill Index</h2>
        {skillCategories.map((category) => (
          <div key={category.id} id={category.id} className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">{category.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{category.description}</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {category.skills.map((skill) => (
                <Card key={skill.name} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-mono text-primary">{skill.name}</CardTitle>
                    <CardDescription className="text-xs">{skill.desc}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-1">
                      {skill.tags.map((tag) => (
                        <Badge key={tag} variant="muted" className="text-[10px]">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Naming Conventions */}
      <section className="space-y-4" id="naming">
        <h2 className="text-2xl font-bold tracking-tight border-b pb-2">Naming Conventions</h2>
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="text-left px-4 py-2.5 font-medium">Asset Type</th>
                <th className="text-left px-4 py-2.5 font-medium">Prefix</th>
                <th className="text-left px-4 py-2.5 font-medium">Example</th>
              </tr>
            </thead>
            <tbody>
              {namingRef.map((row, i) => (
                <tr key={row.type} className={i % 2 === 0 ? 'border-t' : 'border-t bg-muted/30'}>
                  <td className="px-4 py-2.5 text-muted-foreground">{row.type}</td>
                  <td className="px-4 py-2.5 font-mono text-primary font-medium">{row.prefix}</td>
                  <td className="px-4 py-2.5 font-mono text-xs text-muted-foreground">
                    {row.prefix}Weapon_Rifle_A
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Anti-patterns */}
      <section className="space-y-4" id="antipatterns">
        <h2 className="text-2xl font-bold tracking-tight border-b pb-2">Anti-Patterns</h2>
        <div className="space-y-2">
          {[
            '"How do I use Blender?" — Skills assume production context, not tutorials.',
            'Attaching a reference image without asking the agent to analyze and match it.',
            'Skipping blender-director on complex multi-step tasks.',
            'Adding greebles before establishing silhouette and panel-break depth.',
            'Keyframing emission on shared hull materials (causes white blowout in export).',
            'Manual UI steps when Blender MCP is connected.',
            'Exporting without running asset-optimization validation.',
            'Declaring done on reference tasks without screenshot comparison.',
          ].map((item) => (
            <div key={item} className="flex gap-2.5 text-sm">
              <span className="text-destructive font-bold shrink-0 mt-0.5">✕</span>
              <span className="text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
