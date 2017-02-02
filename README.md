# Union
StyleGuide for theknot.com

# Development

<details>
<summary>
Short version
</summary>

```sh
npm install
npm run bootstrap

# Run tests
npm test

# Start dev server
npm start

# Open docs page
npm run open

# Run this when configurations or dependencies change
npm restart
```
</details>

### Install dependencies
> The first step is to install all dependencies.

```sh
npm install
```

### Bootstrap packages
> xogroup/union is a monorepo. This means that it is a repo which hosts many smaller, independently consumable packages. This step is to create a development environment where all packages which depend on each other are linked, allowing changes in one package to be reflected across the whole ecosystem.

```sh
npm run bootstrap
```

> NOTE: This step will need to be run each time a new internal dependency is established.

### Documentation Driven Development

**Start dev server + watch mode**
> The next step is to start a webpack-dev-server which will host the documentation app and a webpack process which will compile the union packages

> NOTE: This will run the processes as daemons, so it will exit immediately.

```sh
npm start
```
> At this point, you should be able to run the following command to get to the docs page

```sh
npm run open
```

**Configuration changes**
> When making configuration changes or adding packages to the ecosystem, you will need to restart the webpack processes, to do this, run:

```sh
npm restart
```

### Generators

*First step*

> This is a temporary step, likely to be removed in the future
```bash
npm run bootstrap-generators
```

These generators will help you create new modules

```bash
npm run new-component
```

This generators will try to:

- Create a new react component package
- Create a new css-module package
- Create a new documentation page
- Link everything together


You can also run

```bash
npm run new-css-module
```

This generators will try to:

- Create a new css-module package
- Create a new documentation page
- Link everything together

### Test Driven Development
> You have two options when running tests. The following command does a single run of all unit tests. NOTE: Make sure packages are bootstrapped before running tests.

```sh
npm test
npm t # Works too
```

> For something more interactive, you can run this command, which will watch your files for changes and automatically run all tests. This the best way to get immediate feedback from your changes.

```sh
npm run tdd
```

> In order to improve the test output, make sure to `focus` on the tests which you are currently working on. You do this by using [`jasmine`'s focus feature](https://jasmine.github.io/2.1/focused_specs.html).

