import fs from 'fs'
import { readFile } from 'fs/promises';
import { resolve, dirname, join } from 'path'

export const targets = fs.readdirSync('packages').filter(async f => {
    if (!fs.statSync(`packages/${f}`).isDirectory()) {
        return false
    }
    const pkg = await readFile(
        new URL(`../packages/${f}/package.json`, import.meta.url),
        { encoding: 'utf8' }
    )
    if (pkg.private && !pkg.buildOptions) {
        return false
    }
    return true
})

export function getPath() {
    let x = dirname(decodeURI(new URL(import.meta.url).pathname));
    return resolve((process.platform == "win32") ? x.substr(1) : x);
}

export const setAlias = () => {
    // let x = dirname(decodeURI(new URL(import.meta.url).pathname));
    // const getPath = () => resolve((process.platform == "win32") ? x.substr(1) : x);
    return {
        'utils': join(getPath(), '../utils'),
    }
}
