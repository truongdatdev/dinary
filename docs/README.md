<!-- markdownlint-disable MD013 MD043 -->

# Dinary documentation

The Dinary documentation does not live in this repository. It is published at
**[docs.dinary.app](https://docs.dinary.app)**. This folder only points there.

## Read

| What                            | Where                                                                                                     |
| ------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 📖 **Platform documentation**   | **[docs.dinary.app](https://docs.dinary.app)**                                                                |
| 🚀 Quick start                  | [docs.dinary.app/getting-started/quick-start](https://docs.dinary.app/getting-started/quick-start/)           |
| 🛠️ Installation                 | [docs.dinary.app/getting-started/installation](https://docs.dinary.app/getting-started/installation/)         |
| 📡 API overview                 | [docs.dinary.app/api/overview](https://docs.dinary.app/api/overview/)                                         |
| 🧪 Live API reference (Swagger) | [api.dinary.app/docs](https://api.dinary.app/docs)                                                            |
| 🚢 Deployment (Kubernetes)      | [docs.dinary.app/deployment/kubernetes](https://docs.dinary.app/deployment/kubernetes/)                       |
| 🐳 Deployment (Docker Compose)  | [docs.dinary.app/deployment/docker/docker-compose](https://docs.dinary.app/deployment/docker/docker-compose/) |
| 💻 Contributing to Dinary        | [docs.dinary.app/development/contributing](https://docs.dinary.app/development/contributing/)                 |
| 📚 Wiki                         | [github.com/truongdatdev/dinary/wiki](https://github.com/truongdatdev/dinary/wiki)                          |

## Use

| What                        | Where                                            |
| --------------------------- | ------------------------------------------------ |
| 🌐 Website                  | [dinary.app](https://dinary.app)                     |
| ⬇️ Downloads (server, apps) | [dinary.app/downloads](https://dinary.app/downloads) |
| ☁️ Dinary SaaS          | [app.dinary.app](https://app.dinary.app)             |
| 🎮 Demo (resets daily)      | [demo.dinary.app](https://demo.dinary.app)           |

## Write or fix a page

Open a pull request in the documentation repository, not here:

- the site is a [Docusaurus](https://docusaurus.io/) app in `website/`; the pages are Markdown under
  `website/docs/`, one folder per section of the sidebar;
- base the pull request on `develop` (`master` is what docs.dinary.app publishes);
- run it locally with `yarn install` then `yarn start` in `website/`.

A page that would have gone in `docs/<section>/` of this repository goes in `website/docs/<section>/` there.
Every page on docs.dinary.app has an "Edit this page" link to its source.

## Pages that used to be here

These two pages are generated from code in this repository, and a CI check fails when a page drifts from
that code, so the copy the check reads stays beside its generator under `tools/`. The published page is a
copy of it; regenerate the copy here, then copy the change to the docs repository.

| Was                                                | Published at                                                                                                                | Copy checked by CI here                                                                                                                             |
| -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `docs/dinary-platform/outbound-calls.md`           | [docs.dinary.app/dinary-platform/outbound-calls](https://docs.dinary.app/dinary-platform/outbound-calls/)                   | [`tools/dinary-platform/outbound-calls.md`](../tools/dinary-platform/outbound-calls.md) (`node tools/dinary-platform/outbound-calls.mjs --check`)   |
| `docs/platform-extensions/design-name-triage.md`   | [docs.dinary.app/platform-extensions/design-name-triage](https://docs.dinary.app/platform-extensions/design-name-triage/)   | [`tools/scripts/design-name-triage.md`](../tools/scripts/design-name-triage.md) (`node tools/scripts/design-name-triage-check.mjs`)                 |
