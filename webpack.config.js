const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const postcssNormalize = require('postcss-normalize');

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

module.exports = function (env, argv) {
  const isProduction = argv.mode === 'production';
  let webpackPlugins = [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: isProduction ? '[name].[hash].css' : '[name].css',
      chunkFilename: isProduction ? '[id].[hash].css' : '[id].css'
    })
  ];

  if (isProduction) {
    webpackPlugins.push(
      new UglifyJsPlugin({
        uglifyOptions: {
          output: {
            comments: false
          }
        }
      }),
      new CompressionPlugin(),
      new BundleAnalyzerPlugin({
        analyzerMode: 'disabled'
      })
    );
  }

  return {
    mode: isProduction ? 'production' : 'development',
    devtool: 'source-map',
    entry: './src/index.tsx',
    output: {
      path: __dirname + '/build',
      filename: 'index.js',
      publicPath: isProduction ? './' : '/'
    },
    devServer: {
      inline: true,
      contentBase: './public',
      port: 3000,
      historyApiFallback: true
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.svg'],
      alias: {
        brandIcons: path.resolve(__dirname, 'lib/sprinter/brand-icons/'),
        components: path.resolve(__dirname, 'src/app/components/'),
        pages: path.resolve(__dirname, 'src/app/pages/index'),
        app: path.resolve(__dirname, 'src/app/'),
        src: path.resolve(__dirname, 'src/'),
        lib: path.resolve(__dirname, 'lib/')
      }
    },
    module: {
      rules: [
        { test: /\.(png|jpe?g|gif)$/i, use: ['file-loader'], exclude: /node_modules/ },
        { test: /\.(jpg|png|gif|svg)$/, use: ['image-webpack-loader'], enforce: 'pre', exclude: /node_modules/ },
        { test: /\.svg$/, use: ['@svgr/webpack', 'url-loader'], exclude: /node_modules/ },
        { test: /\.(ts|js)x?$/, use: ['babel-loader'], exclude: /node_modules/ },
        { test: /\.js$/, use: ['source-map-loader'], enforce: 'pre', exclude: /node_modules/ },
        {
          test: cssRegex,
          exclude: cssModuleRegex,
          use: getStyleLoaders(isProduction, { sourceMap: !isProduction }),
          sideEffects: true,
        },
        {
          test: cssModuleRegex,
          use: getStyleLoaders(
            isProduction,
            {
              importLoaders: 1,
              sourceMap: !isProduction,
              modules: true
            }
          ),
        },
        {
          test: sassRegex,
          exclude: sassModuleRegex,
          use: getStyleLoaders(
            isProduction,
            {
              sourceMap: !isProduction
            },
            'sass-loader',
            {
              loader: 'sass-resources-loader',
              options: {
                resources: [path.resolve(__dirname, 'lib/sprinter/themes/default/_variables.scss')]
              }
            }
          ),
          sideEffects: true,
        },
        {
          test: sassModuleRegex,
          use: getStyleLoaders(
            isProduction,
            {
              sourceMap: !isProduction,
              modules: true
            },
            'sass-loader',
            {
              loader: 'sass-resources-loader',
              options: {
                resources: [path.resolve(__dirname, 'lib/sprinter/themes/default/_variables.scss')]
              }
            }
          )
        }
      ]
    },
    plugins: webpackPlugins
  }
};

function getStyleLoaders(isProduction, cssOptions, preProcessor, extraLoader) {
  const loaders = [
    isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
    {
      loader: require.resolve('css-loader'),
      options: cssOptions,
    }
  ].filter(Boolean);
  if (preProcessor) {
    loaders.push(
      {
        loader: require.resolve('resolve-url-loader'),
        options: {
          sourceMap: !isProduction,
        },
      },
      {
        loader: require.resolve(preProcessor),
        options: {
          sourceMap: true,
        },
      }
    );
  }

  if (extraLoader) loaders.push(extraLoader);

  // imported after preProcessor to allow @import "normalize.css";
  loaders.push({
    loader: require.resolve('postcss-loader'),
    options: {
      ident: 'postcss',
      plugins: () => [
        require('postcss-flexbugs-fixes'),
        require('postcss-preset-env')({
          autoprefixer: {
            flexbox: 'no-2009',
          },
          stage: 3,
        }),
        postcssNormalize(),
      ],
      sourceMap: !isProduction,
    },
  });
  return loaders;
};