/**
 * Adapted from https://github.com/reduxjs/redux/blob/master/rollup.config.js
 * Copyright (c) 2015-present Dan Abramov
 */
import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import scss from 'rollup-plugin-scss'
import includePaths from 'rollup-plugin-includepaths';
let includePathOptions = {
    include: {},
    paths: ['src'],
    external: [],
    extensions: ['.js', '.json', '.html','scss'],
   
};


let default_exports_options = {
  watch:{
    include:"src/**",
    clearScreen:true
  },
  external: ['is-dom', 'prop-types',
    'react-html5-camera-photo',
    'react','@geekagency/composite-js','@geekagency/gen-classes',
    'formik','react-input-mask','react-icons','react-icons/fa','react-icons/gi',
    'react-icons/md','react-icons/libs','react-loading','react-draggable','react-icons/lib'],
    plugins: [
      nodeResolve({
        mainFields: ['module', 'jsnext:main', 'main'],
      }),
      commonjs({
        include: 'node_modules/**',
      }),
      babel({ runtimeHelpers: true }),
      scss({
        failOnError:true,
        watch: ['src/sass/**']
      }),
      includePaths(includePathOptions)
    ]
}

export default [
  {
    input: 'src/export',
    output: {
      file: 'dist/cjs/index.js',
      format: 'cjs',
      indent: false,
      sourcemap: true,
      exports: 'named',
    },
    ...default_exports_options
  },
  {
    input: 'src/exports/gka_export',
    output: {
      file: 'dist/cjs/gka.js',
      format: 'cjs',
      indent: false,
      sourcemap: true,
      exports: 'named',
    },
    ...default_exports_options
  },
  /*, {
    input: 'src/components/Icons/index',
    output: {
      file: 'dist/cjs/icons.js',
      format: 'cjs',
      indent: false,
      sourcemap: true,
      exports: 'named',
    },
    external: ['is-dom', 'prop-types',
    'react','@geekagency/composite-js','@geekagency/gen-classes',
    'formik','react-input-mask','react-loading','react-draggable'], 
    plugins: [
      nodeResolve({
        mainFields: ['module', 'jsnext:main', 'main'],
      }),
      commonjs({
        include: 'node_modules/**',
      }),
      babel({ runtimeHelpers: true }),
      scss(),
      includePaths(includePathOptions)
    ],
  },*/
  /*,{
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
