// filepath: c:\Users\S.D.S\Desktop\dev-pro\babel.config.cjs
module.exports = {
    presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        ['@babel/preset-react', { runtime: 'automatic' }],
    ],
};