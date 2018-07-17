const TAG = '[Student]';
const express = require('express');
const router = express.Router();
const logger = require('../Common/services/Logger');
const student   = require('./model/Student');

router.get('/', (req, res)=>{
  const ACTION = '[getAllStudent]';
  logger.log('debug', TAG + ACTION + ' request parameters', req.params);
  student.findAll()
  .then(data=>{
    res.success(data);
  })
  .catch(error=>{
    res.error(error);
  });
});

router.get('/:id', (req, res)=>{
  const ACTION = '[getStudent]';
  logger.log('debug', TAG + ACTION + ' request parameters', req.params);
  student.find(req.params.id)
  .then(data=>{
    res.success(data);
  })
  .catch(error=>{
    res.error(error);
  });
});

router.post('/', (req, res)=>{
  const ACTION = '[postStudent]';
  logger.log('debug', TAG + ACTION + ' request parameters', req.body);
  student.add(req.body)
  .then(data=>{
    res.success(data);
  })
  .catch(error=>{
    res.error(error);
  });
});

router.put('/:id', (req, res)=>{
  const ACTION = '[putUpdateStudent]';
  logger.log('debug', TAG + ACTION + ' request parameters', req.body);
  student.update(req.body, req.params.id)
  .then(data=>{
    res.success(data);
  })
  .catch(error=>{
    res.error(error);
  });
});

router.delete('/:id', (req, res)=>{
  const ACTION = '[deleteStudent]';
  logger.log('debug', TAG + ACTION + ' request parameters', req.params);
  student.remove(req.params.id)
  .then(data=>{
    res.success(data);
  })
  .catch(error=>{
    res.error(error);
  });
});

module.exports = router;