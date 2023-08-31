module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@components': './src/components',
            '@screens': './src/screens',
            '@service': './src/service',
            '@utils': './src/utils',
            '@contexts': './src/contexts',
            '@hooks': './src/hooks',
          }
        }
      ]
    ]
  };
};