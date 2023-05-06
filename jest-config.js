module.exports = {
  clearMocks: true,
  moduleFileExtensions: ["js", "ts"],
  roots: ["."],
  testEnvironment: "node",
  transform: {
    "^.+\\.ts?$": [
      "ts-jest",
      {
        diagnostics: false,
      },
    ],
  },
  setupFilesAfterEnv: ["jest-extended"],
  globalSetup: "./tests/global-setup.ts",
  globalTeardown: "./tests/global-teardown.ts",
};
