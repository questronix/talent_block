module.exports = {
	'usernames': {
        'type': 'string',
        'min' : 6,
        'max' : 30,
        'regex': new RegExp(/^[A-Za-z][A-Za-z0-9_]*/gi)
    },
  
    'firstname': {
        'type':'string',
        'min': 2,
        'max': 30,
        'regex': new RegExp(/^[A-Za-z][A-Za-z- ]*/gi)
    },
    'middlename':{
        'type':'string',
        'min': 2,
        'max': 15,
        'regex': new RegExp(/(^[A-Za-z][A-Za-z]*( ?([A-Za-z]))*){0,1}/gi)
    },
    'lastname':{
        'type':'string',
        'min': 2,
        'max': 15,
        'regex': new RegExp(/^[A-Za-z][A-Za-z]* ?([A-Za-z]*)/gi)
    },
    'contactnumber':{
        'type':'number',
        'min': 11,
        'max': 11,
        'regex': new RegExp(/(^09[0-9]{9}){0,1}/gi)
    },
    'address':{
        'type':'string',
        'min': 2,
        'max': 50,
        'regex': new RegExp(/(^[0-9A-Za-z#][0-9A-Za-z# -,()]){0,1}/gi)
    },
    'school':{
        'type':'string',
        'min': 2,
        'max': 50,
        'regex': new RegExp(/(^[A-Za-z][A-Za-z]*( ?([A-Za-z-0-9]))*){0,1}/gi)
    },
    'course':{
        'type':'string',
        'min': 4,
        'max': 50,
        'regex': new RegExp(/(^[A-Za-z][A-Za-z]*( ?([A-Za-z-]))*){0,1}/gi)
    },
    'gpa':{
        'type':'string',
        'min': 1,
        'max': 10,
        'regex': new RegExp(/^[1-4](.[0-9]{1,10})?/gi)
    },
    'employer':{
        'type':'string',
        'min': 3,
        'max': 30,
        'regex': new RegExp(/^[A-Za-z0-9][A-Za-z0-9 .,-]*/gi)
    },
    'position':{
        'type':'string',
        'min': 3,
        'max': 30,
        'regex': new RegExp(/^[A-Za-z][A-Za-z0-9. ,-]*/gi)
    },
    'occupation':{
        'type':'string',
        'min': 3,
        'max': 30,
        'regex': new RegExp(/^[A-Za-z][A-Za-z0-9. ,-]*/gi)
    },
    'department':{
        'type':'string',
        'min': 3,
        'max': 50,
        'regex': new RegExp(/^[A-Za-z0-9][A-Za-z0-9- ,.():]*/gi)
    },
    'duties':{
        'type':'string',
        'min': 5,
        'max': 300,
        'regex': new RegExp(/^[A-Za-z][\d\D\s\S\w\W]*/gi)
    },
    'reason':{
        'type':'string',
        'min': 5,
        'max': 300,
        'regex': new RegExp(/^[A-Za-z][\d\D\s\S\w\W]*/gi)
    },
    'idname':{
        'type':'string',
        'min': 3,
        'max': 30,
        'regex': new RegExp(/^[A-Za-z][\d\D\s\S\w\W]*/gi)
    },
    'idnumber':{
        'type':'number',
        'min':'5',
        'max':'25',
        'regex': new RegExp(/^[0-9][0-9- ]*/gi)
    }

    };