import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import json from '@rollup/plugin-json';

const plugins = [
  nodeResolve({}),
  commonjs(),
  typescript(),
  json(),
  babel({
    exclude: 'node_modules/**',
  }),
];

export default [
  {
    input: 'src/lightalarm-card.ts',
    output: {
      dir: '/config/www',
      format: 'es',
    },
    plugins: [...plugins],
  },
];
