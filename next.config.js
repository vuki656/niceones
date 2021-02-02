const ghPages = process.env.DEPLOY_TARGET === 'gh-pages';

module.exports = {
    assetPrefix: ghPages ? '/vuki656.github.io/' : ''   // customize this value
};
