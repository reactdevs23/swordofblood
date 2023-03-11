import en from './en';
import de from './de';
import fr from './fr';

const strings = {en, de, fr};
export function GetLocale(lang, appName) {
	if(strings[lang] === undefined) return strings.en(appName);
	return [Object.keys(strings), strings[lang](appName)];
}