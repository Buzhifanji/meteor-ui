const fs = require('fs-extra')
const path = require('path')
const chalk = require('chalk')
const execa = require('execa')

const { targets: allTargets } = require('./utils')
const { isConstructorDeclaration } = require('typescript')

// minimist 一个做参数解析的工具包
const args = require('minimist')(process.argv.slice(2))

const targets = args._
const formats = args.formats || args.f
const devOnly = args.devOnly || args.d
const prodOnly = !devOnly && (args.prodOnly || args.p)
const sourceMap = args.sourcemap || args.s
const isRelease = args.release
const buildTypes = args.t || args.types || isRelease
const buildAllMatching = args.all || args.a
const commit = execa.sync('git', ['rev-parse', 'HEAD']).stdout.slice(0, 7)

run()

async function run() {
    if (!targets.length) {
        console.log('allTargets, ', allTargets)
        await buildAll(allTargets)
    }
}

async function buildAll(targets) {
    await runParallel(require('os').cpus().length, targets, build)
}

async function runParallel(maxConcurrency, source, iteratorFn) {
    console.log('maxConcurrency, ', maxConcurrency)
    const ret = []
    const executing = []
    for (const item of source) {
        const p = Promise.resolve().then(() => iteratorFn(item, source))
        ret.push(p)
        if (maxConcurrency <= source.length) {
            const e = p.then(() => executing.splice(executing.indexOf(e), 1))
            executing.push(e)
            if (executing.length >= maxConcurrency) {
                await Promise.race(executing)
            }
        }
    }
    return Promise.all(ret)
}

async function build(target) {
    const pkgDir = path.resolve(`packages/${target}`)
    console.log('pkgDir', pkgDir)
    const pkg = require(`${pkgDir}/package.json`)

    // if this is a full build (no specific targets), ignore private packages
    if ((isRelease || !targets.length) && pkg.private) {
        return
    }

    // if building a specific format, do not remove dist.
    if (!formats) {
        await fs.remove(`${pkgDir}/dist`)
    }

    const env =
        (pkg.buildOptions && pkg.buildOptions.env) ||
        (devOnly ? 'development' : 'production')
    await execa('rollup', [
        '-c',
        '--environment',
        [
            `TARGET:${target}`,
            `NODE_ENV:${env}`,
        ],
    ])
}
