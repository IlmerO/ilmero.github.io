---
title: A source of truth for master data, built in-house
short: Master data, in-house
summary: Small AppSheets tools on top of the warehouse that replaced a manual process of over a month and a paid software subscription.
org: P2P.org
period: 2025 – now
stack: [AppSheets, BigQuery, dbt]
order: 3
---

## The problem

Client reporting depended on master data that was maintained by hand, in a process that took over a month, plus a paid software subscription.

## What we built

In-house tools on AppSheets where the business team maintains the master data themselves, connected to the warehouse. The model behind it keeps full change history (slowly changing dimensions), so any report can be traced back to what the data said at the time.

It started with client reporting. Once it proved itself there, we extended it to finance reporting.

## Result

- A manual process of over a month now runs in minutes.
- We dropped a paid software subscription.
- Client and finance reporting now start from the same source of truth.
