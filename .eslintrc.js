module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        'linebreak-style': [
            'error',
            // eslint-disable-next-line global-require
            require('os').EOL === '\r\n' ? 'windows' : 'unix',
        ],
    },
}
