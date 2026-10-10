/**
 * app.js — Portfolio interactions and language switching
 * - Mobile burger menu
 * - Profile photo placeholder
 * - French/English content
 */

(function () {
  'use strict';

  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  const navLinks = document.querySelectorAll('.nav-link');
  const portraitImg = document.querySelector('.portrait-img');
  const languageToggle = document.querySelector('.language-toggle');
  const cvLink = document.querySelector('[data-cv-link]');

  const translations = {
    fr: {
      role: 'Futur Ingénieur en Génie Maritime et Côtier',
      navAbout: 'À propos',
      navDocuments: 'Documents',
      navContact: 'Contact',
      discoverProfile: 'Découvrir mon profil',
      viewReports: 'Voir mes rapports',
      profile: 'Profil',
      aboutTitle: 'À propos de moi',
      portraitPlaceholder: 'Photo de profil',
      aboutLead: "Passionné par la mer, j'étudie à l'école d'ingénieur Seatech à Toulon en spécialité Génie Maritime. Je souhaite mettre mes compétences au service de projets innovants dans le domaine maritime, côtier et naval.",
      aboutText: "Originaire du Mans, j'ai fait ma CPGE au lycée Montesquieu au Mans, puis j'ai intégré l'école d'ingénieur Seatech à Toulon. Je suis actuellement en 3ème année, spécialisé en Génie Maritime et Côtier. J'ai eu l'opportunité de réaliser un stage dans une voilerie en première année ainsi qu'à l'institut d'hydraulique IHCantabria en Espagne en deuxième année. Bien qu'étant dans une fillière de l'ingéniere maritime, j'aime aussi découvrir d'autres domaines, notamment l'informatique et la programmation, ainsi que la mécanique et l'électronique. Je suis également passionné par les sports nautiques, notamment la voile et le windsurf.",
      technicalSkills: 'Compétences techniques',
      skillFluids: 'Mécaniques des fluides',
      skillHydrodynamics: 'Hydrodynamique',
      skillSimulation: 'Simulation numérique',
      skillMatlab: 'Analyse de données et programmation Matlab',
      skillCoastal: 'Hydraulique et hydrodynamique côtière',
      softSkills: 'Compétences transversales',
      skillEnglish: 'Anglais technique (905 TOEIC)',
      skillSpanish: 'Espagnol débutant',
      skillCommunication: 'Communication et vulgarisation scientifique',
      skillTeamwork: 'Travail en équipe pluridisciplinaire',
      skillProject: 'Gestion de projet et planification',
      downloadCv: 'Télécharger mon CV',
      reportsProjects: 'Rapports et Projets',
      documentsTitle: 'Mes documents et rapports',
      documentsIntro: 'Retrouvez ci-dessous une sélection de mes rapports de stage et projets techniques.',
      abstractDescription: "Co-rédaction d'un abstract pour promouvoir mes travaux réalisés lors de mon stage de 2ème année sur l'adaptation des équations EurOtop pour les brises vagues en construction. Le sujet doit être défendu par mon maître de stage lors du congrès ICE breakwater 2027.",
      downloadPdf: 'Télécharger le PDF',
      internship2Title: 'Rapport de stage 2ème année - IHCantabria',
      internship2Description: "Stage de 4 mois dans un institut d'hydraulique à Santander en Espagne. L'objectif était de corriger les équations EurOtop servant au dimensionnement des brises vagues. La modification portait sur la prise en compte des brises vagues en cours de construction. A l'aide d'un logiciel de CFD dévellopé par IHCantabria, j'ai pu proposer une correction d'une équation EurOtop accompagnée de sa méthodologie permettant de prévoir les risques d'Overtopping en fonction de l'état de construction de la structure.",
      surfProjectTitle: "Rapport de projet 2ème année - Etude de l'influence du déferlement sur la génération des vagues.",
      surfProjectDescription: 'Etude de "l\'instinct des surfeurs", l\'objectif de ce projet était de quantifier ce qu\'évaluent les surfeurs pour savoir si les vagues sont bonnes et quelle vague ils vont surfer. Il est apparu que le paramètre le plus important à étudier est la distance déferlement. Celle-ci est facilement observable par le surfeur et reflète l\'énergie de la vague',
      internship1Title: 'Rapport de stage 1ère année - Incidences Sails Méditéranée',
      internship1Description: 'Stage ouvrier de 1 mois dans la plus importante voilerie française. Découverte du métier, apprentissage des techniques de construction et de réparation des voiles. Gestion du montage des voiles sur le voilier des clients.',
      subseaTitle: 'Rapport de projet 1ère année— En collaboration avec SubSea7',
      subseaDescription: "Etude de la faisabilité d'un parc hybride éolien/solaire offshore en mer de Chine pour alimenter une plateforme offshore. Etude de la bathymétrie, de son rendement théorique planification du coût que représenterait une telle exploitation. Première expérience dans la gestion de projet dans une équipe de 10 étudiants.",
      footerPortfolio: 'Portfolio de Quentin Lhommeau',
      copyright: '© 2026 Quentin Lhommeau. Tous droits réservés.'
    },
    en: {
      role: 'Future Maritime and Coastal Engineer',
      navAbout: 'About',
      navDocuments: 'Documents',
      navContact: 'Contact',
      discoverProfile: 'Discover my profile',
      viewReports: 'View my reports',
      profile: 'Profile',
      aboutTitle: 'About me',
      portraitPlaceholder: 'Profile photo',
      aboutLead: 'Passionate about the sea, I study Maritime Engineering at Seatech engineering school in Toulon. I hope to put my skills to work on innovative projects in the maritime, coastal and naval sectors.',
      aboutText: 'Originally from Le Mans, I completed my preparatory classes at Lycée Montesquieu before joining Seatech engineering school in Toulon. I am currently in my third year, specialising in Maritime and Coastal Engineering. I completed an internship at a sailmaking company in my first year, followed by an internship at the IHCantabria hydraulics institute in Spain in my second year. Although I specialise in maritime engineering, I also enjoy exploring other fields, particularly computing and programming, as well as mechanics and electronics. I am also passionate about water sports, especially sailing and windsurfing.',
      technicalSkills: 'Technical skills',
      skillFluids: 'Fluid mechanics',
      skillHydrodynamics: 'Hydrodynamics',
      skillSimulation: 'Numerical simulation',
      skillMatlab: 'Data analysis and MATLAB programming',
      skillCoastal: 'Coastal hydraulics and hydrodynamics',
      softSkills: 'Transferable skills',
      skillEnglish: 'Technical English (TOEIC: 905)',
      skillSpanish: 'Beginner Spanish',
      skillCommunication: 'Communication and science outreach',
      skillTeamwork: 'Multidisciplinary teamwork',
      skillProject: 'Project management and planning',
      downloadCv: 'Download my CV',
      reportsProjects: 'Reports and projects',
      documentsTitle: 'My documents and reports',
      documentsIntro: 'Here is a selection of my internship reports and technical projects.',
      abstractDescription: 'Co-authored an abstract presenting the work I completed during my second-year internship, adapting the EurOtop equations for breakwaters under construction. My internship supervisor will present this topic at the 2027 ICE Breakwaters conference.',
      downloadPdf: 'Download PDF',
      internship2Title: 'Second-year internship report - IHCantabria',
      internship2Description: 'A four-month internship at a hydraulics institute in Santander, Spain. The aim was to adapt the EurOtop equations used to design breakwaters, accounting for breakwaters under construction. Using CFD software developed by IHCantabria, I proposed a revised EurOtop equation and a methodology for predicting overtopping risks according to the structure’s construction stage.',
      surfProjectTitle: 'Second-year project report - The influence of wave breaking on wave generation',
      surfProjectDescription: 'This project explored surfers’ intuition by assessing the factors they use to decide whether waves are suitable for surfing and which wave to catch. The key parameter identified was the distance from the breaking point, which surfers can easily observe and which reflects the wave’s energy.',
      internship1Title: 'First-year internship report - Incidences Sails Méditerranée',
      internship1Description: 'A one-month workshop internship at one of France’s largest sailmaking companies. Discovered the profession and learned sail construction and repair techniques, as well as how to fit sails to customers’ boats.',
      subseaTitle: 'First-year project report - In collaboration with Subsea7',
      subseaDescription: 'Feasibility study of a hybrid offshore wind and solar farm in the China Sea to supply an offshore platform. The study covered bathymetry, estimated energy yield and projected operating costs. First experience managing a project within a team of ten students.',
      footerPortfolio: 'Quentin Lhommeau’s portfolio',
      copyright: '© 2026 Quentin Lhommeau. All rights reserved.'
    }
  };

  const pageMetadata = {
    fr: {
      title: 'Quentin Lhommeau — Futur Ingénieur en Génie Maritime et Côtier',
      description: 'Portfolio de Quentin Lhommeau, futur ingénieur en génie maritime et côtier. Découvrez mon profil, mes compétences et mes rapports de stage.',
      socialDescription: 'Portfolio de Quentin Lhommeau, futur ingénieur en génie maritime et côtier.',
      navLabel: 'Navigation principale',
      menuLabel: 'Ouvrir le menu',
      portraitAlt: 'Photo de profil de Quentin Lhommeau',
      languageLabel: 'Switch page language to English'
    },
    en: {
      title: 'Quentin Lhommeau — Future Maritime and Coastal Engineer',
      description: 'Quentin Lhommeau’s portfolio, a future maritime and coastal engineer. Discover my profile, skills and internship reports.',
      socialDescription: 'Quentin Lhommeau’s portfolio, a future maritime and coastal engineer.',
      navLabel: 'Main navigation',
      menuLabel: 'Open menu',
      portraitAlt: 'Quentin Lhommeau’s profile photo',
      languageLabel: 'Passer la page en français'
    }
  };

  function applyLanguage(language) {
    const languageTranslations = translations[language];
    const metadata = pageMetadata[language];

    document.documentElement.lang = language;
    document.querySelectorAll('[data-i18n]').forEach(function (element) {
      const key = element.dataset.i18n;
      element.textContent = languageTranslations[key];
    });

    document.title = metadata.title;
    document.querySelector('meta[name="description"]').content = metadata.description;
    document.querySelector('meta[property="og:title"]').content = metadata.title;
    document.querySelector('meta[property="og:description"]').content = metadata.socialDescription;
    document.querySelector('.main-nav').setAttribute('aria-label', metadata.navLabel);
    document.querySelector('.portrait-img').alt = metadata.portraitAlt;
    menuToggle.setAttribute('aria-label', metadata.menuLabel);
    languageToggle.textContent = language === 'fr' ? 'EN' : 'FR';
    languageToggle.setAttribute('aria-label', metadata.languageLabel);
    languageToggle.setAttribute('aria-pressed', String(language === 'en'));
    cvLink.href = language === 'en' ? 'CV_en.pdf' : 'CV.pdf';
  }

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

  window.addEventListener('resize', function () {
    if (window.innerWidth > 720 && mainNav.classList.contains('is-open')) {
      closeMenu();
    }
  });

  if (languageToggle && cvLink) {
    const savedLanguage = localStorage.getItem('portfolio-language');
    let currentLanguage = savedLanguage === 'en' ? 'en' : 'fr';
    applyLanguage(currentLanguage);

    languageToggle.addEventListener('click', function () {
      currentLanguage = currentLanguage === 'fr' ? 'en' : 'fr';
      localStorage.setItem('portfolio-language', currentLanguage);
      applyLanguage(currentLanguage);
    });
  }

  if (portraitImg) {
    if (portraitImg.complete && portraitImg.naturalWidth > 0) {
      portraitImg.classList.add('is-loaded');
    } else {
      portraitImg.addEventListener('load', function () {
        portraitImg.classList.add('is-loaded');
      });
      portraitImg.addEventListener('error', function () {
        portraitImg.classList.remove('is-loaded');
      });
    }
  }
})();
