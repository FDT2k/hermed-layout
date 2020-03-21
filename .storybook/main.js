const path = require('path');
module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-notes/register-panel'
  ],
  webpackFinal: async (config, { configType }) => {
   // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
   // You can change the configuration based on that.
   // 'PRODUCTION' is used when building the static version of storybook.

   // Make whatever fine-grained changes you need
   config.module.rules.push({
     test: /\.scss$/,
     use: ['sass-loader'],
     include: path.resolve(__dirname, '../src/sass'),
   });

   // Return the altered config
   return config;
 },
};
