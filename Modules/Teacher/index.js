const TAG = '[Teacher]';
const express = require('express');
const router = express.Router();
const logger = require('../Common/services/Logger');
const teacher = require('./model/Teacher');

router.get('/', (req, res)=>{
  const ACTION = '[getAllTeacher]';
  logger.log('debug', TAG + ACTION + ' request parameters', req.params);
  teacher.findAll()
  .then(data=>{
    res.success(data);
  })
  .catch(error=>{
    res.error(error);
  });
});

router.get('/:id', (req, res)=>{
  const ACTION = '[getTeacher]';
  logger.log('debug', TAG + ACTION + ' request parameters', req.params);
  teacher.find(req.params.id)
  .then(data=>{
    res.success(data);
  })
  .catch(error=>{
    res.error(error);
  });
});

router.post('/', (req, res)=>{
  const ACTION = '[postTeacher]';
  logger.log('debug', TAG + ACTION + ' request parameters', req.body);
  teacher.add(req.body)
  .then(data=>{
    res.success(data);
  })
  .catch(error=>{
    res.error(error);
  });
});

router.put('/:id', (req, res)=>{
  const ACTION = '[updateTeacher]';
  logger.log('debug', TAG + ACTION + ' request parameters', req.body);
  teacher.update(req.body, req.params.id)
  .then(data=>{
    res.success(data);
  })
  .catch(error=>{
    res.error(error);
  });
});

router.delete('/:id', (req, res)=>{
  const ACTION = '[deleteTeacher]';
  logger.log('debug', TAG + ACTION + ' request parameters', req.params);
  teacher.remove(req.params.id)
  .then(data=>{
    res.success(data);
  })
  .catch(error=>{
    res.error(error);
  });
});

module.exports = router;