var tokenize = require('../lib/tokenize')
var query = 'people[*name~/^R/i]'
// var tokenized = tokenize(query, true)
// console.log(tokenized)

const  util = require('util')

var jsonQuery = require('../')
var data1 = {a: [{
	"source_language": {"id": 1, "name": "English", "iso": "en"},
	"target_language": {"id": 2, "name": "Afar", "iso": "aa"}
	}, {
	"source_language": {"id": 1, "name": "English", "iso": "en"},
	"target_language": {"id": 6, "name": "Amharic", "iso": "am"}
	}, {
	"source_language": {"id": 27, "name": "Spanish", "iso": "es"},
	"target_language": {"id": 23, "name": "German", "iso": "de"}
	}, {
	"source_language": {"id": 27, "name": "Spanish", "iso": "es"},
	"target_language": {"id": 5, "name": "Amharic", "iso": "am"}
	}, {
	"source_language": {"id": 27, "name": "Spanish", "iso": "es"},
	"target_language": {"id": 8, "name": "Aymara", "iso": "ay"}
}]}

var data3 = {a: [{
	"source_language": 1,
	"target_language": 2
	}, {
	"source_language": 3,
	"target_language": 4
	}, {
	"source_language": 5,
	"target_language": 6
	}, {
	"source_language": 7,
	"target_language": 8
	}, {
	"source_language": 9,
	"target_language": 10
}]}

var data2 = {
	people : [
		{name: 'Steve', age: 20},
		{name: 'Betty', age: 30}
	]
}
// var output1 = jsonQuery('people[name=Steve & age=20]', {data: data2})
// console.log(tokenize('people[name=Steve & age=20]', true)[2].select)
// console.log(output1)
// console.log('=================================')
var output = jsonQuery('a.source_language[*id=27] & a.target_language[*id=23]', {
        data: data1
    })
console.log('===================')
console.log(util.inspect(output, false, null))


// [ { root: true },
//   { get: 'a' },
//   { get: 'source_language' },
//   { negate: false, op: '=', select: [ 'id', '27' ] },
//   { or: true },
//   { root: true },
//   { get: 'a' },
//   { get: 'target_language' },
//   { negate: false, op: '=', select: [ 'id', '5' ] } ]