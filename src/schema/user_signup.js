module.exports = {
	'id': {
		'type': 'number',
        'max': 11,
        'regex':new RegExp(/^[0-9]{11}/gi)
	},
	'username': {
		'type': 'string',
		'min' : 6,
    'max' : 30,
		'regex': new RegExp(/^[A-Za-z][A-Za-z0-9_]{5,}/gi)
  },
  'email': {
		'type': 'string',
		'regex': new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/gi)
  }
}
