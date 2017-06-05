# Union
The Knot's Design System and Pattern Library

# Development

<details>
<summary>
Short version
</summary>


Install packages for project union and run the tests.
```sh
# Test your node version
node -v | grep -e '^v7' && echo "You are good to go"

yarn run setup

# Run all tests
yarn test

# Start dev server
yarn start

# Open docs page
yarn run open

# Run this when configurations or dependencies change
yarn restart
```
</details>

### Install Node
Install node version manager [nvm](https://github.com/creationix/nvm#install-script)
```sh
# With brew (recommended in osx)
brew install nvm

# With curl
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
```
If you run into any issues with installing NVM on your platform follow the [instructions](https://github.com/creationix/nvm#install-script) on the NVM install page.

Install node version >= 8.0.0

```sh
nvm install
node -v
# v8.0.0
```

### Install yarn

> This is an optional tool but it significantly improves the development experience

```sh
brew install yarn
```

### Setup environment
> Install dependencies, build necessary packages, and link internal packages. You should need to run this once before begining development

```sh
yarn run setup
```

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

> NOTE: This step will need to be run each time a new internal dependency is established.

### Documentation Driven Development

**Start dev server + watch mode**
> The next step is to start a webpack-dev-server which will host the documentation app and a webpack process which will compile the union packages

> NOTE: This will run the processes as daemons, so it will exit immediately.

```sh
yarn start
```
> At this point, you should be able to run the following command to get to the docs page

```sh
yarn run open
```

**Configuration changes**
> When making configuration changes or adding packages to the ecosystem, you will need to restart the webpack processes, to do this, run:

```sh
yarn restart
```

### Generators

*First step*

> This is a temporary step, likely to be removed in the future
```bash
yarn run bootstrap.generators
```

##### Pattern

This generator will help you create new patterns

```bash
yarn run new.pattern
```

### Test Driven Development

```sh
# There is a dependency on building the patterns before executing the tests
# otherwise the packages being tested are not yet available
yarn run build.patterns
# All tests
yarn test

# Browser tests
yarn run test.browser
yarn run test.browser.chrome # Useful when using debuggers

# Node tests
yarn run test.node

# Tools tests
yarn run test.tools
```

##### Browser TDD

> For something more interactive, you can run this command, which will watch your files for changes and automatically run all tests. This the best way to get immediate feedback from your changes.

```sh
yarn run test.browser.watch
```

> In order to improve the test output, make sure to `focus` on the tests which you are currently working on. You do this by using [`jasmine`'s focus feature](https://jasmine.github.io/2.1/focused_specs.html).

# Publishing

To publish the assets use the script in `yarn run publish.assets`
To publish the documentation use the script in `yarn run publish.docs`
To publish the packages use the script in `yarn run publish.packages`
