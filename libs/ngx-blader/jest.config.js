module.exports = {
  name: 'ngx-blader',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ngx-blader',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
