# Workflow CA

In this assignment I was tasked with improving the quality of an existing application by providing various development workflows as well as a testing strategy.

## Configuration

- **ESLint**: Used to find and fix problems with the JavaScript code.
- **Prettier**: Code formatter that enforces a consistent style.
- **Commit hooks**: Using two tools, lint-staged and husky, that will automatically run ESLint and Prettier on all files in the repository.
- **Jest**: Unit testing to confirm that a single atom of functionality is working.
- **Cypress**: e2e testing framework that runs in the browser.

## Workflow Status Badge

[![Automated Unit Testing](https://github.com/cecsun/social-media-client/actions/workflows/unit-test.yml/badge.svg?branch=workflow)](https://github.com/cecsun/social-media-client/actions/workflows/unit-test.yml)

[![Automated E2E Testing](https://github.com/cecsun/social-media-client/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/cecsun/social-media-client/actions/workflows/e2e-test.yml)

[![Code Review](https://github.com/cecsun/social-media-client/actions/workflows/gpt.yml/badge.svg)](https://github.com/cecsun/social-media-client/actions/workflows/gpt.yml)
