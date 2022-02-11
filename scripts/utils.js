import fs from 'fs';
import { readFile } from 'fs/promises';
import { resolve, dirname, join } from 'path';

let targets = [];

async function getTargets() {
  const packages = fs.readdirSync('packages');
  for (const f of packages) {
    if (!fs.statSync(`packages/${f}`).isDirectory()) {
      continue;
    }
    const pkg = await readFile(
      new URL(`../packages/${f}/package.json`, import.meta.url),
      { encoding: 'utf8' },
    );
    const temp = JSON.parse(pkg);
    if (temp.private && !temp.buildOptions) {
      continue;
    }
    targets.push(f);
  }
}
await getTargets();

export { targets };

export function getPath() {
  let x = dirname(decodeURI(new URL(import.meta.url).pathname));
  return resolve(process.platform == 'win32' ? x.substr(1) : x);
}

export const setAlias = () => {
  return {
    '@one-ui/one-aria': join(getPath(), '../packages/aria/index.ts'),
    '@one-ui/one-utils': join(getPath(), '../packages/utils/index.ts'),
  };
};
