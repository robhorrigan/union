# Union
The Knot's Design System and Pattern Library

* [Getting Started](#getting-started) 
* [Development](#development) 
* [Publishing](#publishing) 

Or if you just want to consume Union Patterns, visit the [Union Pattern Library Documentation](http://docs.union.theknot.com/pattern-library/getting-started)

# Getting Started

## Guides
* [Project Internals](https://github.com/xogroup/union/blob/master/internal-docs/README.md)
* [Benchmarking](https://github.com/xogroup/union/blob/master/internal-docs/how-to/benchmarks.md)
* [Upgrading](https://github.com/xogroup/union/blob/master/internal-docs/how-to/upgrade.md)
* [Folder Structure](https://github.com/xogroup/union/blob/master/internal-docs/conventions/pods.md)
* [Private Modules](https://github.com/xogroup/union/blob/master/internal-docs/conventions/private-modules.md)
* [Shared Modules](https://github.com/xogroup/union/blob/master/internal-docs/conventions/shared-modules.md)
* [Testing](https://github.com/xogroup/union/blob/master/internal-docs/conventions/specs.md)

## Quick Setup (if you already have Node and Yarn installed)

```sh
# Verify your Node version
node -v | grep -e '^v8' && echo "You are good to go"

# Install dependencies, build necessary packages, and link internal packages
yarn run setup

# Run all tests
yarn test

# Start dev server
yarn start

# Open documentation page
yarn run open

# Run this when configurations or dependencies change
yarn restart
```

## Complete Setup Guide
### Install Node
Install Node version manager [NVM](https://github.com/creationix/nvm#install-script)
```sh
# With brew (recommended in OSX)
brew install nvm

# With curl
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
```
***If you run into any issues installing NVM on your platform follow these [instructions](https://github.com/creationix/nvm#install-script) on the NVM install page.***

Install Node version >= 8.0.0

```sh
nvm install 8
node -v
# v8.*.*
```

### Install Yarn

> Yarn is an alternative to NPM that provides some important advantages. You can read about why it was created [here](https://code.facebook.com/posts/1840075619545360/yarn-a-new-package-manager-for-javascript/) or check out the [Yarn documentation](https://yarnpkg.com/lang/en/docs/).

```sh
brew install yarn
```

### Setup local development environment
> Install dependencies, build necessary packages, and link internal packages. 

```sh
yarn run setup
```
> NOTE: You will need to run this once before beginning development.

### Install dependencies
***You do not need to run this if you just ran `yarn run setup`***
> The first step is to install all dependencies.
```sh
yarn install
```

### Bootstrap packages
***You do not need to run this if you just ran `yarn run setup`***
> xogroup/union is a monorepo. This means that it is a repo which hosts many smaller, independently consumable packages. This step is to create a development environment where all packages which depend on each other are linked, allowing changes in one package to be reflected across the whole ecosystem.

```sh
yarn run bootstrap
```

> NOTE: You will need to run this each time a new internal dependency added.

## Development
This project utilizes two development approaches: Documentation Driven Development and Test Driven Development(TDD). You can use either approach depending on the type of contribution and your preferred style.

### Documentation Driven Development

**Start the dev server and watch for changes**
> This starts a webpack-dev-server which will host the documentation app and a Webpack process which will compile the Union packages.
```sh
yarn start
```
> NOTE: This will run the processes as daemons, so it will exit immediately.

**Next, open the documentation page in your preferred browser**
```sh
yarn run open
```

**Restart on configuration or dependency changes**
> When making configuration changes or adding packages to the ecosystem, you will need to restart the Webpack processes, to do this, run:

```sh
yarn restart
```

### Test Driven Development

```sh
# Patterns must be built before executing the tests, otherwise they won't be available.
yarn run build.patterns
# Run all tests
yarn test

# Run browser tests
yarn run test.browser
yarn run test.browser.chrome # Useful when using debuggers

# Run Node tests
yarn run test.node

# Run tools tests
yarn run test.tools
```

##### Browser TDD

> For something more interactive, you can run this command, which will watch your files for changes and automatically run all tests. This the best way to get immediate feedback from your changes.

```sh
yarn run test.browser.watch
```

> NOTE: In order to improve the test output, make sure to `focus` on the tests which you are currently working on. You do this by using [`Jasmine`'s focus feature](https://jasmine.github.io/2.1/focused_specs.html).


### Generators

##### Setup Generators (required)

> This is a temporary step, likely to be removed in the future
```bash
yarn run bootstrap.generators
```

##### Pattern Generator

This generator will help you create new patterns

```bash
yarn run new.pattern
```

# Publishing
Publish assets
```sh
yarn run publish.assets
```

Publish documentation
```sh
yarn run publish.docs
```

Publish packages
```sh
yarn run publish.packages
```
