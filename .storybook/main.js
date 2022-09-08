const path = require('path')

module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../components/**/*.stories.@(js|jsx|ts|tsx)',
    '../assets/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-scss',
    'storybook-addon-next-router'
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5'
  },
  staticDirs: ['../public'],
  features: {
    interactionsDebugger: true
  },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/components': path.resolve(__dirname, '../components'),
      '@/contexts': path.resolve(__dirname, '../contexts'),
      '@/hooks': path.resolve(__dirname, '../hooks'),
      '@/pages': path.resolve(__dirname, '../pages'),
      '@/styles': path.resolve(__dirname, '../styles'),
      '@/mocks': path.resolve(__dirname, '../mocks'),
      '@/assets': path.resolve(__dirname, '../assets'),
      '@/lib': path.resolve(__dirname, '../lib'),
      '@/types': path.resolve(__dirname, '../types')
    }

    const fallback = config.resolve.fallback || {}
    Object.assign(fallback, {
      zlib: require.resolve('browserify-zlib'),
      timers: require.resolve('timers-browserify'),
      stream: require.resolve('stream-browserify'),
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify')
    })
    config.resolve.fallback = fallback

    config.module.rules.push({
      test: /\.m?js/,
      resolve: {
        fullySpecified: false
      }
    })

    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias
        }
      }
    }
  }
}
