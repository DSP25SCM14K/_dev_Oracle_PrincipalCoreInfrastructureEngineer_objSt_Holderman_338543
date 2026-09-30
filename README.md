# Dev Kumar — Principal Core Infrastructure Engineer portfolio

Static, responsive portfolio for the resume `_dev_Oracle_PrincipalCoreInfrastructureEngineer_objSt_Holderman_338543.docx` and Oracle job identification 338543. It is designed for GitHub Pages and needs no build step.

## Publish with GitHub Pages

The site files are at repository root. In GitHub, open **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save. The site is available at `https://dsp25scm14k.github.io/_dev_Oracle_PrincipalCoreInfrastructureEngineer_objSt_Holderman_338543/` after Pages finishes its first deployment.

## Experience / portfolio content

The experience section carries every work-experience bullet from the attached resume. Project source links follow the user-provided list; technical demos are shown only for TradeSentinel, AskMyStore, STRANGERS, and Oxide-HV, the four projects with demo URLs. There is intentionally no LinkedIn link or footer. Animated diagrams are native SVG and CSS; the ambient technical background is drawn locally, without external image dependencies.

## Role and product research notes

The supplied posting is Oracle's **Principal Core Infrastructure Engineer (OCI Object Storage)**, identification 338543, posted June 29, 2026. It describes an individual-contributor position centered on scalable distributed systems and large-scale object storage. The main work themes are high-throughput data paths, elasticity, reliability during in-service upgrades, replication and partition behavior, service telemetry and SLOs, fault-injection and brownout validation, incident response, multi-tenant security, compliance, and automation/change management. The portfolio emphasizes corresponding evidence from the resume: multi-tenant object storage, request volume and p99 latency, cross-fault-domain replication, erasure coding, load shedding, observability, data integrity, encryption/IAM, incident ownership, and IaC.

Oracle's public materials describe OCI Object Storage as a regional, strongly consistent, scalable service. Oracle says it targets 99.999999999% annual durability, using redundancy, failure isolation, recovery, checksum monitoring, and a combination of replication and erasure coding; the FAQ describes a 99.9% service-availability design target. These product facts informed the resilient-storage visual. The resume's 99.99% availability outcome remains explicitly presented as Dev's claimed work result, not as an Oracle service guarantee.

Primary sources:

- [Oracle Object Storage overview](https://docs.oracle.com/en-us/iaas/Content/Object/Concepts/objectstorageoverview.htm)
- [Oracle Object Storage FAQ](https://www.oracle.com/cloud/storage/object-storage/faq/)
- [Oracle: First Principles — Redundancy and Recovery in OCI Object Storage](https://blogs.oracle.com/cloud-infrastructure/first-principles-redundancy-recovery-durability)
- [Oracle Cloud regions, availability domains, and fault domains](https://docs.oracle.com/en-us/iaas/Content/General/Concepts/regions.htm)
- Job description was provided as a local DOCX by the user and is not redistributed with the portfolio.

## Contents

- `index.html` — portfolio and all resume experience bullets
- `styles.css` — responsive visual design, ambient background, motion, and diagrams
- `script.js` — animated headline, metrics, particles, and scroll reveals
