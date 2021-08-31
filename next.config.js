module.exports = {
  basePath: `/react-object-table-viewer`,
  assetPrefix: `/react-object-table-viewer/`,
  compress: false,
  poweredByHeader: false,
  pageExtension: ['tsx', 'js'],
  env: {
    PHASE: process.env.PHASE,
    VERSION: `${require('./package.json').version}`,
    BUILD_DATE: new Date().getTime(),
  },
};
