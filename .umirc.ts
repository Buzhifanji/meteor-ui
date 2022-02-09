import { defineConfig } from 'dumi';
import { join } from 'path';

import fs from 'fs';

const alias = {};
fs.readdirSync('packages').forEach(async (f) => {
  if (fs.statSync(`packages/${f}`).isDirectory()) {
    alias[`@one-ui/${f}`] = join(__dirname, `out-lib/${f}.js`);
  }
});

console.log('alias', alias);

export default defineConfig({
  title: 'One UI',
  mode: 'site',
  hash: true, //加hash配置，清除缓存
  exportStatic: {}, // 对每隔路由输出html
  resolve: {
    includes: ['./docs'],
  },
  alias,
});
