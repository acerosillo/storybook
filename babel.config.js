module.exports = {
  presets: ['@babel/preset-react', '@babel/preset-env'],
  plugins: [
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    '@babel/plugin-transform-react-jsx',
    '@babel/plugin-transform-modules-commonjs',
  ],
};
