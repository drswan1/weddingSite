// Import language files
import { en } from './en.js';
import { es } from './es.js';
import { de } from './de.js';

// Combine languages into one object
const languages = { en, es, de };

// Function to change language
window.changeLanguage = function(lang) {
    // Update content
    document.getElementById('title').textContent = languages[lang].title;
    document.getElementById('invite').textContent = languages[lang].invite;
    document.getElementById('date').textContent = languages[lang].date;
    document.getElementById('time').textContent = languages[lang].time;
    document.getElementById('location').textContent = languages[lang].location;
    document.getElementById('questions').textContent = languages[lang].questions;
    document.getElementById('schedule').textContent = languages[lang].schedule;
    document.getElementById('wishes').textContent = languages[lang].wishes;

    // Update button styles
    document.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`${lang}-btn`).classList.add('active');

    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// Set initial language
changeLanguage('en');