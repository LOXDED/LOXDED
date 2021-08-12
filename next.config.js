
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['8TT6Xw1RUWi3RwgFwD1hT7'] // An array of project ids.
});
module.exports = withPlasmic({
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  // Your NextJS config.
});
  