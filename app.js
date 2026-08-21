/**
 * app.js — Interactions simples du portfolio
 * - Menu mobile burger
 * - Gestion du placeholder de photo de profil
 */

(function () {
  'use strict';

  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  const navLinks = document.querySelectorAll('.nav-link');
  const portraitImg = document.querySelector('.portrait-img');

  function toggleMenu() {
    const isOpen = mainNav.classList.toggle('is-open');
    menuToggle.classList.toggle('is-active', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  }

  function closeMenu() {
    mainNav.classList.remove('is-open');
    menuToggle.classList.remove('is-active');
    menuToggle.setAttribute('aria-expanded', 'false');
  }

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', toggleMenu);
  }

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (mainNav.classList.contains('is-open')) {
        closeMenu();
      }
    });
  });

  // Fermer le menu si on redimensionne la fenêtre vers desktop
  window.addEventListener('resize', function () {
    if (window.innerWidth > 720 && mainNav.classList.contains('is-open')) {
      closeMenu();
    }
  });

  // Photo de profil : afficher l'image si elle se charge, sinon garder le placeholder
  if (portraitImg) {
    if (portraitImg.complete && portraitImg.naturalWidth > 0) {
      portraitImg.classList.add('is-loaded');
    } else {
      portraitImg.addEventListener('load', function () {
        portraitImg.classList.add('is-loaded');
      });
      portraitImg.addEventListener('error', function () {
        // Garde le placeholder visible
        portraitImg.classList.remove('is-loaded');
      });
    }
  }
})();
