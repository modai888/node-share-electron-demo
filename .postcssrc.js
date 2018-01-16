const pkg = require( './package' );

module.exports = {
    plugins: {
        'postcss-import': {},
        'postcss-url': {},
        'postcss-base64': {
            extension: [ '.svg' ]
        },
        'postcss-cssnext': {
            browsers: pkg.browserslist
        },
        'postcss-nesting': {}
    }

}