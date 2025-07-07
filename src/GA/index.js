// src/ga/index.js
import ReactGA from 'react-ga4';

export const initGA = () => {
  ReactGA.initialize('G-3S90XC7BY7'); // replace with your Measurement ID
};

export const trackPageView = (url) => {
  ReactGA.send({ hitType: "pageview", page: url });
};

export const trackEvent = (action, category, label) => {
  ReactGA.event({
    action,
    category,
    label,
  });
};
