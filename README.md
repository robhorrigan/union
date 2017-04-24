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

npm run setup

# Run all tests
npm test

# Start dev server
npm start

# Open docs page
npm run open

# Run this when configurations or dependencies change
npm restart
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

Install node version >= 7.0.0 < 8.0.0.

```sh
nvm install 7.5
node -v
# v7.5.0
```

### Setup environment
> Install dependencies, build necessary packages, and link internal packages. You should need to run this once before begining development

```sh
npm run setup
```

### Install dependencies
***You do not need to run this if you just ran `npm run setup`***
> The first step is to install all dependencies.

```sh
npm install
```

### Bootstrap packages
***You do not need to run this if you just ran `npm run setup`***
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
npm run bootstrap.generators
```

##### Pattern

This generator will help you create new patterns

```bash
npm run new.pattern
```

### Test Driven Development

```sh
# There is a dependency on building the patterns before executing the tests
# otherwise the packages being tested are not yet available
npm run build.patterns
# All tests
npm test
npm t # Works too

# Patterns tests
npm run test.patterns
npm run test.patterns.chrome # Useful when using debuggers

# Build support tests
npm run test.support

# Tools tests
npm run test.tools
```

##### Patterns TDD

> For something more interactive, you can run this command, which will watch your files for changes and automatically run all tests. This the best way to get immediate feedback from your changes.

```sh
npm run test.patterns.watch
```

> In order to improve the test output, make sure to `focus` on the tests which you are currently working on. You do this by using [`jasmine`'s focus feature](https://jasmine.github.io/2.1/focused_specs.html).

# Publishing

To publish the assets use the script in `npm run publish.assets`
To publish the documentation use the script in `npm run publish.docs`
To publish the packages use the script in `npm run publish.packages`
