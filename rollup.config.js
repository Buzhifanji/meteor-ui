import path from 'path'
const fs = require('fs-extra')
import nodeResolve from 'rollup-plugin-node-resolve' // 依赖引用插件
import commonjs from 'rollup-plugin-commonjs' // commonjs模块转换插件
import { eslint } from 'rollup-plugin-eslint' // eslint插件
import ts from 'rollup-plugin-typescript2'

if (!process.env.TARGET) {
    throw new Error('TARGET package must be specified via --environment flag.')
}

const version = require('./package.json').version
const tsconfig = path.resolve(__dirname, 'tsconfig.json')

// process.env.TARGET 由 execa 传递过来，确定具体包名
const packagesDir = path.resolve(__dirname, 'packages')
const packageDir = path.resolve(packagesDir, process.env.TARGET)
const resolve = p => path.resolve(packageDir, p)
const pkg = require(resolve(`package.json`))
const packageOptions = pkg.buildOptions || {}
const name = packageOptions.filename || path.basename(packageDir)

const extensions = ['.js', '.ts']

// ts
const tsPlugin = ts({
    tsconfig, // 导入本地ts配置
    extensions
})


// eslint
const esPlugin = eslint({
    throwOnError: true,
    include: ['src/**/*.ts'],
    exclude: ['node_modules/**', 'lib/**']
})

// 基础配置
const commonConf = {
    input: resolve('src/index.ts'),
    plugins: [
        nodeResolve(extensions),
        commonjs(),
        esPlugin,
        tsPlugin,
    ],
    output: {
        name,
        file: resolve(`dist/${name}.esm-bundler.js`),
        format: 'es'
    }
}
// 需要导出的模块类型
const outputMap = [
    {
        file: path.resolve(__dirname, `dist/${name}.js`), // 通用模块
        format: 'umd',
    },
    {
        file: path.resolve(__dirname, `dist/${name}.esm.js`), // es6模块
        format: 'es',
    }
]


const buildConf = options => Object.assign({}, commonConf, options)

export default outputMap.map(output => buildConf({ output: { name, ...output } }))
