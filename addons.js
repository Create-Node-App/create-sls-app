const { toCamelCase } = require('cna-cli/src/helpers');

const BASE_URL = 'Create-Node-App/sls-extensions';

module.exports = (options) => {
  const lang = options.typescript ? 'ts' : 'es';
  const langAddons = [];

  // initialized with base template
  let addons = [
    {
      addon: `${BASE_URL}@addon/base#type=common`,
      git: true,
    },
    {
      addon: `${BASE_URL}@addon/base#type=${lang}`,
      git: true,
    },
  ];

  langAddons.forEach((addon) => {
    if (options[toCamelCase(addon)]) {
      addons.push({ addon: `${BASE_URL}@addon/${addon}#type=common`, git: true });
      addons.push({ addon: `${BASE_URL}@addon/${addon}#type=${lang}`, git: true });
    }
  });

  if (options.extend) {
    addons.push(...options.extend.map((addon) => ({ addon, git: true })));
  }

  return addons;
};
