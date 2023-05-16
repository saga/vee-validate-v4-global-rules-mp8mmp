// For demo purposes we are adding all locales, you SHOULD NOT DO THIS IN PRODUCTION
import { configure } from 'vee-validate';
import { localize, setLocale } from '@vee-validate/i18n';
import { locales } from './constants';

(async () => {
  const imports = await Promise.all(
    locales.map((code) =>
      import(`../node_modules/@vee-validate/i18n/dist/locale/${code}.json`)
    )
  );

  const dictionary = imports.reduce((dict, curr, idx) => {
    const code = locales[idx];
    dict[code] = curr;

    return dict;
  }, {} as Record<string, any>);

  configure({
    generateMessage: localize(dictionary),
  });

  setLocale('en');
})();
