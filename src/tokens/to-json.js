const flat = require('flat');

const flatten = (obj, prefix) => {
  const flatTokens = flat(obj, { delimiter: '-' });

  return Object.keys(flatTokens).reduce((acc, curr) => ({ ...acc, [`${prefix}${curr}`]: flatTokens[curr] }), {});
};

const toJSON = ({ customMedia = {}, customProperties = {}, customSelectors = {}, environmentVariables = {} }) => {
  return {
    customMedia: flatten(customMedia, '--'),
    customProperties: flatten(customProperties, '--'),
    customSelectors: flatten(customSelectors, ':--'),
    environmentVariables: flatten(environmentVariables, '--'),
  };
};

module.exports = toJSON;
