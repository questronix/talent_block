const TAG = '[Category]';
const express = require('express');
const router = express.Router();
const logger = require('../Common/services/Logger');
const category   = require('./model/Category');

router.get('/', (req, res)=>{
  const ACTION = '[getAllCategory]';
  logger.log('debug', TAG + ACTION + ' request parameters', req.params);
  category.findAll()
  .then(data=>{
    res.success(data);
  })
  .catch(error=>{
    res.error(error);
  });
});

router.get('/:id', (req, res)=>{
  const ACTION = '[getCategory]';
  logger.log('debug', TAG + ACTION + ' request parameters', req.params);
  category.find(req.params.id)
  .then(data=>{
    res.success(data);
  })
  .catch(error=>{
    res.error(error);
  });
});

router.post('/', (req, res)=>{
  const ACTION = '[postCategory]';
  logger.log('debug', TAG + ACTION + ' request parameters', req.body);
  category.add(req.body)
  .then(data=>{
    res.success(data);
  })
  .catch(error=>{
    res.error(error);
  });
});

router.put('/:id', (req, res)=>{
  const ACTION = '[putUpdateCategory]';
  logger.log('debug', TAG + ACTION + ' request parameters', req.body);
  category.update(req.body, req.params.id)
  .then(data=>{
    res.success(data);
  })
  .catch(error=>{
    res.error(error);
  });
});

router.delete('/:id', (req, res)=>{
  const ACTION = '[deleteCategory]';
  logger.log('debug', TAG + ACTION + ' request parameters', req.params);
  category.remove(req.params.id)
  .then(data=>{
    res.success(data);
  })
  .catch(error=>{
    res.error(error);
  });
});

module.exports = router;