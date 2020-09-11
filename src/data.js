const data = [
  {
    options: [
      'cavity',
      'parity',
    ],
  },

  {
    options: [
      'ability',
      'density',
      'gravity',
    ],
  },

  {
    options: [
      'quality',
      'utility',
      'activity',
    ],
  },

  {
    options: [
      'capacity',
      'facility',
      'humidity',
    ],
  },

  {
    options: [
      'insanity',
      'majority',
      'minority',
    ],
  },

  {
    options: [
      'polarity',
      'priority',
      'quantity',
    ],
  },

  {
    options: [
      'security',
      'velocity',
      'vicinity',
    ],
  },

  {
    options: [
      'ambiguity',
      'authority',
      'community',
      'integrity',
    ],
  },

  {
    options: [
      'intensity',
      'stability',
      'alkalinity',
      'capability',
    ],
  },

  {
    options: [
      'continuity',
      'disability',
      'durability',
    ],
  },

  {
    options: [
      'similarity',
      'visibility',
      'credibility',
      'electricity',
    ],
  },

  {
    options: [
      'eligibility',
      'operability',
      'opportunity',
    ],
  },

  {
    options: [
      'personality',
      'possibility',
      'probability',
      'reliability',
    ],
  },

  {
    options: [
      'accountability',
      'responsibility',
      'maintainability',
      'nonavailability',
    ],
  },
];

export const wordList = data.map(({ options }) => ({
  options,
  placeholder: options[options.length - 1],
}));
