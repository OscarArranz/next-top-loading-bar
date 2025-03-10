import { pluginReact } from '@rsbuild/plugin-react';
import { pluginTypedCSSModules } from '@rsbuild/plugin-typed-css-modules';
import { defineConfig } from '@rslib/core';

export default defineConfig({
  lib: [
    {
      bundle: false,
      dts: true,
      format: 'esm',
    },
  ],
  output: {
    target: 'web',
  },
  plugins: [pluginReact(), pluginTypedCSSModules()],
});
