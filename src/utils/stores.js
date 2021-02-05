import { writable } from 'svelte/store';

export const themeSettings = writable('auto');
export const themeValue = writable('dark');

export const mobileMenuOpen = writable(false);