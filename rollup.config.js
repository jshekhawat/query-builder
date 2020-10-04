import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace'

export default {
    input: 'demo/index.js',
    output: {
        file: 'dist/bundle.js',
        format: 'cjs',
        sourcemap: true
    },
    plugins: [
        replace({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        resolve(),
        babel({
            exclude: 'node_modules/**'         
        }),
        commonjs(),
    ]
}