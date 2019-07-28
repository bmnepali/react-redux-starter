module.exports = {
  'verbose': true,
  'globals': {
    'window': true,
  },
  'testURL': 'http://localhost:8080',
  'setupFiles': ['./jest.setup.js'],
  'snapshotSerializers': ['enzyme-to-json/serializer'],
  'moduleNameMapper': {
    '^.+\\.(css|scss)$': 'identity-obj-proxy',
  },
};
