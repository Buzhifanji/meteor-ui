export default function (plop) {
  // create your generators here
  plop.setGenerator('compontent', {
    description: 'create a web component',
    prompts: [
      // 命令行交互问题
      {
        type: 'input',
        name: 'name',
        message: 'web component name',
        validate(val) {
          if (val) {
            return true;
          } else {
            return false;
          }
        },
      },
    ],
    actions: [
      {
        // readme
        type: 'add',
        path: 'packages/{{name}}/REDEAM.md',
        templateFile: 'templates/README.hbs',
      },
      {
        // LICENSE
        type: 'add',
        path: 'packages/{{name}}/LICENSE',
        templateFile: 'templates/LICENSE.hbs',
      },
      {
        // package.json
        type: 'add',
        path: 'packages/{{name}}/package.json',
        templateFile: 'templates/package.json.hbs',
      },
      {
        // index.ts
        type: 'add',
        path: 'packages/{{name}}/index.ts',
        templateFile: 'templates/index.ts.hbs',
      },
      {
        // test
        type: 'add',
        path: 'packages/{{name}}/test/{{name}}.test.ts',
        templateFile: 'templates/test/test.ts.hbs',
      },
      {
        // demo
        type: 'add',
        path: 'packages/{{name}}/demo/index.html',
        templateFile: 'templates/demo/index.html.hbs',
      },
      {
        // log
        type: 'add',
        path: 'packages/{{name}}/log/index.md',
        templateFile: 'templates/log/index.md.hbs',
      },
      {
        // src/svelte
        type: 'add',
        path: 'packages/{{name}}/src/{{name}}.svelte',
        templateFile: 'templates/src/svelte.hbs',
      },
      {
        // src/interface
        type: 'add',
        path: 'packages/{{name}}/src/{{name}}.interface.ts',
        templateFile: 'templates/src/interface.ts.hbs',
      },
    ],
  });
}
