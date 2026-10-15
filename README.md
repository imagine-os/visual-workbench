# Visual Workbench

Character-led visual reports grounded in verified project work, with reusable character, location, and brand packs.

**Status: early draft. License selection is pending.** This is a publicly inspectable instruction package, not yet an open-source licensed release. No image renderer adapter or platform plugin is implemented here, and installation and visual behavior have not been tested end to end.

## Included skills

- `skills/illustrate-workbench/`: plan and review workbench illustrations using genuine screenshots, stable character/location references, and evidence-backed work states
- `skills/organize-brand-assets/`: preserve canonical originals and organize approved or proposed logo, character, and environment variants with provenance and versioning

Each skill has a `SKILL.md` entrypoint. Supporting references define pack contracts, renderer capabilities, and quality gates. The example configuration uses fictional identities and proposed assets. No character sheets, customer screenshots, real brand assets, or finished demo renders are bundled.

## Getting started

Inspect the skill files first. In Codex with the built-in skill installer, a GitHub repository and skill path can be supplied to the installer; the intended repository is `imagine-os/visual-workbench` and the paths are listed above. Prefer a reviewed commit or release. The official installer supports selecting a revision with `--ref`. This repository has not yet verified that installation workflow against a released revision. Other Agent Skills clients should use their documented import method.

Installation does not provide an image service, credentials, storage, or permission to upload project data. Choose an available authorized image tool and supply approved reference packs before use. Copy the example configuration to a private workspace outside this repository, and keep real identity mappings, source evidence, screenshots, and generated outputs there. Never commit provider keys. Generation can incur provider fees.

## Skills and plugins

The two skills are usable instruction packages. A target-specific plugin can later bundle them into one installation. OpenAI's plugin architecture supports skills with optional MCP servers and optional UI; a server is not required simply to bundle skills. A shared asset-library service may be useful later if storage, search, or versioning needs warrant it.

The Agent Skills file format is portable. Tool availability, authentication, plugin manifests, and installation behavior still depend on the host. There is no universal installer or tested cross-platform compatibility claim.

## Planned demonstrations

Original neutral assets: a ceramic courier and paper-fold companion, a sunlit studio and greenhouse desk, and a fictional demo application with synthetic data. Its running interface would be captured for the device screens, with a visible DEMO label. These assets and renders are not included yet.

## Rights and license status

No open-source license is assigned at this stage. MIT is a proposed option for original instructions and code, subject to the owner's decision. Demo assets will need their own clear rights and license records. Third-party logos, fonts, likenesses, screenshots, and generated assets are not automatically covered by any eventual repository license.

## References

- [Agent Skills package specification](https://agentskills.io/specification)
- [OpenAI skill installer](https://github.com/openai/skills/blob/main/skills/.system/skill-installer/SKILL.md)
- [OpenAI skill authoring](https://learn.chatgpt.com/docs/build-skills)
- [OpenAI plugin architecture](https://developers.openai.com/plugins/concepts/plugins)
- [OpenAI plugin packaging](https://developers.openai.com/plugins/build/plugins)

Documentation checked 2026-10-15. Metadata validation passes for both included skills; behavioral and visual quality checks remain to be run.
