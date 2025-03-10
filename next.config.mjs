const isProduction = process.env.NODE_ENV === "production";
const repoName = "CV";

module.exports = {
  assetPrefix: isProduction ? `/${repoName}/` : "",
  basePath: isProduction ? `/${repoName}` : "",
  trailingSlash: true,
};