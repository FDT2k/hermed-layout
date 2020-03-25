/**
 * Adapted from https://github.com/reduxjs/redux/blob/master/rollup.config.js
 * Copyright (c) 2015-present Dan Abramov
 */

import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import scss from 'rollup-plugin-scss'
export default [
  {
    input: 'src/components/export',
    output: {
      file: 'dist/cjs/index.js',
      format: 'cjs',
      indent: false,
      sourcemap: true,
      exports: 'named',
    },
    external: ['is-dom', 'prop-types',
    'react','@geekagency/composite-js','@geekagency/gen-classes','formik','react-input-mask','react-icons','react-icons/fa','react-icons/md','react-icons/libs'],
    plugins: [
      nodeResolve({
        mainFields: ['module', 'jsnext:main', 'main'],
      }),
      commonjs({
        include: 'node_modules/**',
      }),
      babel({ runtimeHelpers: true }),
      scss()
    ],
  }/*,{
    input:'src/sass/style.scss',
    output: {
      file: 'dist/cjs/style'
    },
    plugins: [
      scss() // will output compiled styles to bundle.css
    ]
  }*//*,
  {
    input: 'src/index.js',
    output: {
      file: 'dist/es/react-inspector.js',
      format: 'es',
      indent: false,
      sourcemap: true,
      exports: 'named',
    },
    external: ['is-dom', 'prop-types', 'react'],
    plugins: [
      nodeResolve({
        mainFields: ['module', 'jsnext:main', 'main'],
      }),
      commonjs({
        include: 'node_modules/**',
      }),
      babel({ runtimeHelpers: true }),
    ],
  },
  {
    input: 'src/index.js',
    output: {
      file: 'dist/umd/react-inspector.js',
      format: 'umd',
      name: 'ReactInspector',
      indent: false,
      exports: 'named',
      sourcemap: true,
    },
    plugins: [
      nodeResolve({
        mainFields: ['module', 'jsnext:main', 'main'],
      }),
      babel({
        runtimeHelpers: true,
        exclude: 'node_modules/**',
      }),
      commonjs({
        namedExports: {
          'node_modules/react/index.js': [
            'useContext',
            'useLayoutEffect',
            'useCallback',
            'useState',
            'useMemo',
            'createContext',
            'memo',
            'Children',
          ],
        },
      }),
    ],
  },*/
];
