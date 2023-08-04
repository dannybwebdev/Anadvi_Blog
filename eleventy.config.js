const yaml = require("js-yaml");

module.exports = function(eleventyConfig) {

  eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));

  eleventyConfig.addPassthroughCopy({
    "./src/admin/config.yml": "./admin/config.yml",
  });

    // Return your Object options:
    return {
      dir: {
        input: "src",
        output: "dist",
        includes: "_includes"
      }
    }
  };