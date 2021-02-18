const mix = require('laravel-mix');
const postCssCustomProperties = require('postcss-custom-properties');

const hmr = 'native'; // native || browsersync
// const hmr = 'browsersync'; // native || browsersync

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
  .js('resources/js/app.jsx', 'public/js')
// .js('resources/js/auth.jsx', 'public/js')
  .react()
  .options({
    autoprefixer: {
      options: {
        browsers: ['last 6 versions'],
      },
    },
    postCss: [postCssCustomProperties],
  });
if (mix.inProduction()) {
  mix
    .extract(['react', 'react-dom', 'axios']).sass('resources/sass/app.scss', 'public/css');
  // .version();
} else {
  if (hmr === 'native') {
    mix
      .options({
        hmr: true,
        hmrOptions: {
          host: 'localhost',
          port: 8001,
          ws: true,
        },
      })
      .webpackConfig({
        mode: 'development',
        devtool: 'inline-source-map',
        devServer: {
          hot: true,
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
          host: '0.0.0.0',
          port: 8001,
        },
      });
  }
  if (hmr === 'browsersync') {
    mix
      .browserSync({
        proxy: '127.0.0.1:8000',
        files: [
          'resources/**/*',
          'public/js/**/*.js',
          'public/css/**/*.css',
          'public/css/**/*.css',
        ],
      });
  }
}
