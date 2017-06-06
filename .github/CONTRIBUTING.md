# How to contribute

This is how you contribute. Start [here](https://github.com/xogroup/union/blob/master/internal-docs/README.md) to learn about the project's internals.

## Before anything
Follow the instructions in the README for setting up the development environment.

## For visual changes

For visual changes, use the documentation to preview the component. The project README should help you set up the local documentation server.

## For functional changes

For functional changes, use the browser tests via the `npm run test.browser.watch` script. Make your changes to the tests and code, add new tests if none exist.

## For a new package/pattern

#### Run the pattern generator

This command will create the minimal files necessary to create a new pattern. Do make sure to review all of the code because the standard template won't apply to every use case.

```
npm run new.pattern
```

## For an existing pattern

#### Find the owner package

All union packages are in the `packages` folder.

## Logging Issues
All issues should be created using the [new issue form](https://github.com/xogroup/union/issues/new).

Clearly describe the issue including steps to reproduce if there are any.  Also, make sure to indicate the `union` version that has the issue being reported.
