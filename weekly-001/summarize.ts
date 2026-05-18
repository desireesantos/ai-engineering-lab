/**
 * Day 001 — AI-assisted PR Review
 *
 * This experiment simulates how AI could assist
 * engineering teams during pull request reviews.
 *
 * Goals:
 * - summarize changes
 * - identify risks
 * - suggest validation points
 */

import fs from "fs";

const prContent = fs.readFileSync("./sample-pr.txt", "utf-8");

function summarizePR(content: string) {
  return `
# AI PR Review Summary

## Main Changes
- PlantIoT integration
- loading state improvements
- validation updates
- transaction service changes

## Potential Risks
- timeout handling
- edge cases for humidate
- transaction synchronization issues

## Suggested Validation
- test plantIoT failures
- validate concurrent requests
- confirm consistency
- verify loading state behavior

## Engineering Notes
This feature introduces Plant IoT integration flow changes and should be monitored carefully in production.
`;
}

const output = summarizePR(prContent);

console.log(output);