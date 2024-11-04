// @ts-expect-error https://thymikee.github.io/jest-preset-angular/docs/getting-started/test-environment
globalThis.ngJest = {
  testEnvironmentOptions: {
    errorOnUnknownElements: true,
    errorOnUnknownProperties: true,
  },
};

global.ReadableStream = global.ReadableStream || class {};

import 'jest-preset-angular/setup-jest';
import 'web-streams-polyfill/polyfill';
