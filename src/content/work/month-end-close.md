---
title: Month-end close, from a week to under a day
short: Month-end close
summary: Two rounds of changes to finance reporting at a crypto staking company. The first got close down to two days, the second to less than one.
org: P2P.org
period: 2025 – now
stack: [BigQuery, dbt, Airflow, GitHub, Superset]
order: 1
---

## The problem

When I joined P2P.org, closing the month took the finance team about a week.

## First round

In my first quarter I worked on the models behind month-end close and got it down to two days.

## Second round

Two days was better, but not the end of it. Together with the finance team, I wrote a target architecture for financial reporting, from source data to the final numbers, and started rolling it out in phases. The first phase moved the finance mart to production.

With the new architecture, month-end close now takes less than one day.

## What I own

About 10 gold and 30+ silver and bronze dbt models, including the ones behind month-end close, referral revenue share and rebates.
