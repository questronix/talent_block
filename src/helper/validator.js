const RULES = {
  TYPE: (schema, value)=>{
    if(typeof value !== schema){
      return `Invalid data type expecting '${schema}' but got '${typeof value}'.`
    }
    return null;
  },
  MIN: (schema, value)=>{
    if(value.length < value){
      return `Minimum length should be ${value}.
      value.length : ${value.length}
      value.count ${value.count()}
      schema : ${schema}`
    }
    return null;
  },
  MAX: (schema, value)=>{
    if(value.length > value){
      return 
        `Maximum length should be ${value}
        value.length : ${value.length}
        value.count ${value.count()}
        schema : ${schema}`
    }
    return null;
  },
  REGEX: (schema, value)=>{
    if(!schema.test(value)){
      return `invalid format`;
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
              let err = {};
              err[key] = {
                value: column_value,
                msg: `'${key}' is not included in schema `
              };
            
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


module.exports = validate;