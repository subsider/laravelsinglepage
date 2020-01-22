const mix = require('laravel-mix');
const purgecss = require('@fullhuman/postcss-purgecss')({
    content: [
        './resources/** /*.blade.php',
        './resources/** /*.vue',
    ],

    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [
        require('tailwindcss'),
        ...mix.inProduction() ? [purgecss] : [],
        require('autoprefixer')
    ]);

mix.webpackConfig({
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, 'resources/js/components'),
        }
    }
});

mix.disableSuccessNotifications();

if (mix.inProduction()) {
    mix.version();
} else {
    mix.sourceMaps();
}