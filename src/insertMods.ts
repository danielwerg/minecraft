import { stripIndents, commaListsAnd } from 'common-tags';

import { join } from 'path';

import { insertToFile } from './utils';
import { mods } from './mods';

(async () => {
  await insertToFile({
    filePath: join(__dirname, '../readme.md'),
    sectionName: 'MODS_COUNT',
    content: mods.length.toString()
  }).catch(console.error);

  const contentMods = stripIndents`

    ---

    ${mods
      .map(
        mod =>
          // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-return
          stripIndents`
            <img src="${mod.icon}" align="left" height="144" width="144" />

            ### ${mod.name} by ${commaListsAnd`${mod.authors}`}

            ${mod.abstract}

            ${[
              mod.categories ? mod.categories.join(', ') : [],
              mod.loaders.join(', '),
              mod.environments.join(', ')
            ].join(' • ')}

            ${mod.urls.map(({ name, url }) => `[${name}](${url})`).join(' • ')}

            ${mod.note ? `> **Note**\n> ${mod.note}` : ''}`
      )
      .join('\n\n---\n\n')}

      ---`;

  await insertToFile({
    filePath: join(__dirname, '../readme.md'),
    sectionName: 'MODS',
    content: contentMods,
    prefix: '\n\n',
    suffix: '\n\n'
  }).catch(console.error);
})();
