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

  {
    options: [
      'telecommunication',
      'decontamination',
      'discontinuation',
      'instrumentation',
    ],
  },

  {
    options: [
      'reconfiguration',
      'standardization',
      'administration',
      'classification',
    ],
  },

  {
    options: [
      'discrimination',
      'identification',
      'implementation',
      'multiplication',
    ],
  },

  {
    options: [
      'recapitulation',
      'recommendation',
      'rehabilitation',
      'specialization',
      'transportation',
    ],
  },

  {
    options: [
      'accommodation',
      'appropriation',
      'authorization',
      'certification',
      'communication',
    ],
  },

  {
    options: [
      'concentration',
      'configuration',
      'consideration',
      'consolidation',
    ],
  },

  {
    options: [
      'contamination',
      'demonstration',
      'dissemination',
      'documentation',
    ],
  },

  {
    options: [
      'interrelation',
      'investigation',
      'participation',
      'qualification',
      'recombination',
      'specification',
      'stabilization',
    ],
  },

  {
    options: [
      'abbreviation',
      'acceleration',
      'accumulation',
      'anticipation',
      'apprehension',
      'augmentation',
    ],
  },

  {
    options: [
      'commendation',
      'compensation',
      'condensation',
      'constitution',
      'construction',
    ],
  },

  {
    options: [
      'contribution',
      'coordination',
      'distribution',
      'facilitation',
      'illustration',
    ],
  },

  {
    options: [
      'implantation',
      'installation',
      'interruption',
      'introduction',
    ],
  },

  {
    options: [
      'jurisdiction',
      'modification',
      'organization',
      'presentation',
      'preservation',
      'reproduction',
    ],
  },

  {
    options: [
      'transmission',
      'verification',
      'acquisition',
      'aggravation',
      'alternation',
      'application',
      'calculation',
    ],
  },

  {
    options: [
      'calibration',
      'circulation',
      'combination',
      'competition',
      'composition',
    ],
  },

  {
    options: [
      'compression',
      'computation',
      'conjunction',
      'correlation',
      'dereliction',
    ],
  },
];

export const wordList = data.map(({ options }) => ({
  options,
  placeholder: options[options.length - 1],
}));
