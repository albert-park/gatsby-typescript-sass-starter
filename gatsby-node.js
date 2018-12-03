const path = require('path')

const pathResolve = dir => path.join(__dirname, dir)

exports.onCreateWebpackConfig = ({ actions }) => {
  // console.log(JSON.stringify(config.resolve(), null, 4));

  // config.loader('tslint', {
  //   test: /\.ts$/,
  //   exclude: /node_modules/,
  // })

  // config.merge({
  actions.setWebpackConfig({
    resolve: {
      extensions: ['.js', '.jsx', 'ts', 'tsx', '.json', '.scss'],
      alias: {
        '@': pathResolve('src'),
      },
    },
  })

  return actions
}
