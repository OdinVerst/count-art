import * as sapper from '@sapper/app';
import {themeValue, themeSettings} from './utils/stores.js';

if (localStorage.getItem('theme')) {
    themeSettings.update(value => 'manual');
}

const preference_query = window.matchMedia('(prefers-color-scheme: dark)');

const checkPreference = (query) => {
    themeValue.update(value => query.matches ? "dark" : "light");
};

themeSettings.subscribe(value => {
    if (value === 'manual') {
        themeValue.update(value => localStorage.getItem('theme'));
        document.documentElement.setAttribute('data-color-mode', localStorage.getItem('theme'));
    } else {
        checkPreference(preference_query);
        preference_query.addListener(checkPreference);
        document.documentElement.setAttribute('data-color-mode', 'auto');
    }
})

sapper.start({
    target: document.querySelector('#sapper')
});