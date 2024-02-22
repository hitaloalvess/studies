# Configure Jest with Typescript

## Initial project

```bash
npm init -y
```

## Install typescript

```bash
npm i -D typescript ts-jest ts-node @types/jest
```

## Initial typescript config

```bash
npx tsc --init
```

## Install dependencies

```bash
npm i -D jest
```

## Initial jest config
```bash
npx jest --init
```

## Add configurations in `jest.config.ts`

```json
{
  "preset": "ts-jest",
  "modulePaths": ["<rootDir>"],
  "testEnvironment": "node",
  "moduleFileExtensions": ["js", "json", "ts"],
  "rootDir": "src",
  "testRegex": ".*\\.spec\\.ts$",
  "transform": {
    "^.+\\.(t|j)s$": "ts-jest",
  },
  "collectCoverageFrom": ["**/*.(t|j)s"],
  "coverageDirectory": "../coverage",
}
```

- `preset`: 'ts-jest': This is a preset that configures Jest to work with TypeScript using ts-jest. It is responsible for compiling your TypeScript files to JavaScript before running your tests.

- `modulePaths`: ["`<rootDir>`"]: This sets the base path for the modules. <rootDir> is a variable that represents the project root directory.

- `testEnvironment`: 'node': This configures the test environment to be Node.js. This means that tests will run in a Node.js-like environment, allowing access to Node.js APIs during testing.

- `moduleFileExtensions`: ['js', 'json', 'ts']: Defines the file extensions that Jest will consider when running tests. Here, it considers JavaScript, JSON, and TypeScript files.

- `rootDir`: 'src': Defines the root directory where Jest will look for test files and modules.

- `testRegex`: '.*\.spec\.ts$': This defines a regular expression to find test files. It looks for files ending with .spec.ts, which is a common convention for test files in TypeScript.

- `transform`: {'^.+\.(t|j)s$': 'ts-jest'}: This configuration like Jest will transform the files. It uses a regular expression to match files that end with .ts or .js and uses ts-jest to transform them.

- `collectCoverageFrom`: ['/*.(t|j)s']**: Defines the files from which code coverage will be collected. Again, it uses a regular expression to match TypeScript or JavaScript files.

- `coverageDirectory`: '../coverage': Defines the directory where code coverage reports will be stored. Here they will be stored in a directory called coverage in the parent directory of the src directory.

### Final file should look like this

```typescript
const config: Config = {
  "preset": "ts-jest",
  modul"ePaths: ["<rootDir>"],
  clear"Mocks: true,
  cove"rageProvider: "v8",
  testEnvironment: "node",
  "moduleFileExtensions": ["js", "ts"],
  "rootDir": "src",
  "testRegex": ".*\\.spec\\.ts$",
  "transform": {
    "^.+\\.(t|j)s$": "ts-jest",
  },
  "collectCoverageFrom": ["**/*.(t|j)s"],
  "coverageDirectory": "../coverage",
};
```

## Add scripts in `package.json`

```json

"scripts": {
    "test": "jest --config jest.config.ts",
    "test:watch": "jest --config jest.config.ts --watch",
    "test:cov": "jest --config jest.config.ts --coverage",
    "test:debug": "node --inspect-brk -r tsconfig-paths/register -r ts-node/register node_modules/.bin/jest --runInBand"
  }
```

- `test`: Used to run tests

- `test:watch`: Used to run the tests and then watch for possible changes to the test files. If anything happens, the changed test is run again, thus validating the changes.

- `test:cov`: Used to run tests and generate project coverage metrics

- `test:debug`: Run tests with debug mode activated.

## Add test file to test execution

Create a test file inside src -> src/test.spec.ts

```typescript
  
function sum(a: number, b: number) {
  return a + b;
}

describe('Sum', () => {
  it('should be able to sum two numbers', () => {
    const result = sum(2, 3);

    expect(result).toBe(5);
  })
})
```

Run the `npm run test` script to run the created test