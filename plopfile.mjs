export default function (plop) {
    // create your generators here
    plop.setGenerator('compontent', {
        description: 'create a web component',
        prompts: [ // 命令行交互问题
            {
                type: 'input',
                name: 'name',
                message: 'web component name',
                validate(val) {
                    if (val) {
                        return true
                    } else {
                        return false
                    }
                }
            }
        ],
        actions: [
            { // readme
                type: 'add',
                path: 'packages/{{name}}/REDEAM.md',
                templateFile: 'templates/README.hbs'
            },
            { // LICENSE
                type: 'add',
                path: 'packages/{{name}}/LICENSE',
                templateFile: 'templates/LICENSE.hbs'
            },
            { // package.json
                type: 'add',
                path: 'packages/{{name}}/package.json',
                templateFile: 'templates/package.json.hbs'
            },
            { // test
                type: 'add',
                path: 'packages/{{name}}/test/{{name}}.test.ts',
                templateFile: 'templates/test/test.ts.hbs'
            },
            { //template.ts
                type: 'add',
                path: 'packages/{{name}}/src/template.ts',
                templateFile: 'templates/src/template.ts.hbs'
            },
            { // web component
                type: 'add',
                path: 'packages/{{name}}/src/{{name}}.ts',
                templateFile: 'templates/src/name.ts.hbs'
            },
            { // index.ts
                type: 'add',
                path: 'packages/{{name}}/src/index.ts',
                templateFile: 'templates/src/index.ts.hbs'
            },
        ]
    });
};