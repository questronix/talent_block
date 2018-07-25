let user_schema = {
	'id': {
		'type': 'number',
    'max': 11,
    'regex':new RegExp(/^[0-9]{11}/gi)
	},
	'username': {
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
  'surname':{
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

const RULES = {
  TYPE: (schema, value)=>{
    if(typeof value !== schema){
      return `Invalid data type expecting '${schema}' but got '${typeof value}'.`
    }
    return null;
  },
  MIN: (schema, value)=>{
    if(value.length < value){
      return `Minimum length should be ${value}.`
    }
    return null;
  },
  MAX: (schema, value)=>{
    if(value.length < value){
      return `Maximum length should be ${value}.`
    }
    return null;
  },
  REGEX: (schema, value)=>{
    if(!schema.test(value)){
      return `Invalid format`;
    }
    return null;
  },
};

const validate = {
  _schema: {},
  setSchema: (schema)=>{
    validate._schema = schema
    return validate;
  },
  assert: (data)=>{
    let errors = [];
    if(Object.keys(validate._schema).length > -1){
      let keys = Object.keys(data);
	
      //data keys i.e (columns)
      keys.forEach(key=>{
        //column value
        let column_value = data[key];
  
        //run through rules
        try{
          let rules = Object.keys(validate._schema[key]);
          rules.forEach(rule=>{
            let schema = validate._schema[key][rule];
            let result = RULES[rule.toUpperCase()](schema, column_value);
            if(result){
              
              errors.push({
                key: key,
                value: column_value,
                msg: result
              });
            }
          });
        }catch(e){
          errors.push({
            key: key,
            value: column_value,
            msg: `'${key}' is not included in schema `
          });
        }
      });
    }else{
      errors.push('There is no schema provided.')
    }
    return errors;
  }
};

let output = validate.setSchema(user_schema).assert({
  school: 'UPLB',
  id: 1,
  course: "B",
  username: "32KY",
  school: 'UPLB',
  username: "32KY23",
  firstname: "98Gemma"
  
});

console.log(JSON.stringify(output));

module.exports = validate;