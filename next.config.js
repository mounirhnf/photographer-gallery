//------------------------------------------------------------------------------
// In this file you can configure your next app to suite your development needs
// - The async headers function is used to sed security headers for your app
// - The webback function is a way to change or add custom webpack configuration
//------------------------------------------------------------------------------

const host = process.env.NEXT_PUBLIC_HOST;
const IsInProduction = process.env.NODE_ENV === 'production';

//------------------------------------------------------------------------------

module.exports = {
  // Standard nextjs config (refer to the nextjs documentation to learn more
  // about these properties)
  assetPrefix: IsInProduction ? host : '',
  reactStrictMode: true,
  distDir: 'build',
  poweredByHeader: false,
  generateEtags: false,

  // Security headers configuration
  async headers() {
    // Only apply security headers in the production envirement
    if (IsInProduction) {
      return [
        {
          source: '/',
          headers: [
            {
              key: 'Strict-Transport-Security',
              value: 'max-age=63072000; preload',
            },
            {
              key: 'X-XSS-Protection',
              value: '1; mode=block',
            },
            {
              key: 'X-Frame-Options',
              value: 'deny',
            },
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff',
            },
            {
              key: 'Referrer-Policy',
              value: 'origin-when-cross-origin',
            },
          ],
        }
      ];
    } else {
      return [];
    }
  },

  // Custom webpack configuration (this next block of code's purpose is to
  // customize scss modules class naming and hashing)
  webpack: (config) => {
    // Get the pre config webpack module rules
    const rules = config.module.rules;

    // Get the styling rules object
    // NOTE: The index of the rule object deferes between next versions, so be
    // sure to check if you have acuired the correct rule to proceed
    const targetRule = rules[3];

    // Loop through the nested rules to get to the loaders
    targetRule.oneOf.forEach((rule) => {
      // Check if the loader entries is an array
      if (rule.use instanceof Array) {
        // Loop through the loaders
        rule.use.forEach(({loader, options}) => {
          // Check if the loader is endeed the css loader and not a postcss
          // loader
          if (
            loader.includes('css-loader') &&
            !loader.includes('postcss-loader')
          ) {
            // Remove the original ident name configured by nextjs
            const {getLocalIdent, ...modules} = options.modules;

            options.modules = {
              ...modules,
              // Add your custom localIdentName for development and production
              // envirements
              localIdentName: !IsInProduction
                ? '[folder]_[local]__[hash:base64:4]' // for development
                : '[hash:base64:5]', // for production
            };
          }
        });
      }
    });

    // NOTE: don't forget to return the customized config
    return config;
  },
}
