---
title: Cutting about USD 60k a year in warehouse costs
short: USD 60k saved
summary: Changing how tables are stored and processed, and refactoring models that rebuilt expensive things nobody needed.
org: P2P.org
period: 2025 – now
stack: [BigQuery, dbt, Airflow]
order: 2
---

## Where the money went

Warehouse bills grow quietly. Each model makes sense on the day it's written, and a few years later the platform is rebuilding large, expensive tables on every run.

## What changed

Two things, done in parallel:

- **Storage and processing.** Together with the data engineering team, we changed how tables are stored and processed.
- **The models themselves.** I optimized and refactored the models, so the architecture stopped rebuilding expensive things that weren't needed.

## Result

About USD 60k a year in data costs.

The second part is the work I like most: figuring out what can be deleted without breaking anything. 
