var jsonQuery = require('../')
var data = {
  grouped_people: {
    'friends': [
      {name: 'Steve', country: 'NZ'},
      {name: 'Jane', country: 'US'},
      {name: 'Mike', country: 'AU'},
      {name: 'Mary', country: 'NZ'},
    ],
    'enemies': [
      {name: 'Evil Steve', country: 'AU'},
      {name: 'Betty', country: 'NZ'},
    ]
  }
}

var result = jsonQuery('grouped_people.friends[*country=NZ]', {data: data}).value

console.log(result)