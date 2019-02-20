module.exports = {
  'verbose': true,
  'globals': {
    'window': true,
  },
  'testURL': 'http://localhost:9090',
  'setupFiles': ['./jest.setup.js'],
  'snapshotSerializers': ['enzyme-to-json/serializer'],
  'moduleNameMapper': {
    '^.+\\.(css|scss)$': 'identity-obj-proxy',
  },
};
