const mix = require('laravel-mix');

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
    .extract(['react', 'react-dom', 'axios']).sass('resources/sass/app.scss', 'public/css')
    .options({
        autoprefixer: {options: {browsers: ['last 6 versions',]}},
        postCss: [require('postcss-custom-properties')]
    });
if (mix.inProduction()) {
    mix.version();
} else {
    mix.browserSync('127.0.0.1:8000');
}
