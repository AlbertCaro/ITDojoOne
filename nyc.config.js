module.exports = {
  all: true,
  extension: ['.ts', '.js', '.vue'],
  exclude: ['**/*.{spec,test}.{js,ts}'],
  include: [
    'pages/**/*.{vue,ts}',
    'layouts/**/*.{vue,ts}',
    'components/**/*.{vue,ts}',
    'module/**/*.{js|ts}',
    'mixin/**/*.{js|ts}',
    'store/**/*.{js|ts}',
  ],
}
