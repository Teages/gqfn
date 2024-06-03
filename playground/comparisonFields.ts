// const sdl = readFileSync('./playground/schema.graphql', 'utf8')
const comparisonFields = gqp(
  'fragment comparisonFields',
  'on Character',
  [
    'name',
    'appearsIn',
    {
      friends: $ => $(['name'], true),
    },
  ]
);
