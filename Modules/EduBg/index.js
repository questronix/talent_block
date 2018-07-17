const TAG = '[EduBg]';
const express = require('express');
const router = express.Router();
const logger = require('../Common/services/Logger');
const eduBg   = require('./model/EduBg');

router.get('/', (req, res)=>{
  const ACTION = '[getAllEduBg]';
  logger.log('debug', TAG + ACTION + ' request parameters', req.params);
  eduBg.findAll()
  .then(data=>{
    res.success(data);
  })
  .catch(error=>{
    res.error(error);
  });
});

router.get('/:id', (req, res)=>{
  const ACTION = '[getEduBg]';
  logger.log('debug', TAG + ACTION + ' request parameters', req.params);
  eduBg.find(req.params.id)
  .then(data=>{
    res.success(data);
  })
  .catch(error=>{
    res.error(error);
  });
});

router.post('/', (req, res)=>{
  const ACTION = '[postEduBg]';
  logger.log('debug', TAG + ACTION + ' request parameters', req.body);
  eduBg.add(req.body)
  .then(data=>{
    res.success(data);
  })
  .catch(error=>{
    res.error(error);
  });
});

router.put('/:id', (req, res)=>{
  const ACTION = '[putUpdateEduBg]';
  logger.log('debug', TAG + ACTION + ' request parameters', req.body);
  eduBg.update(req.body, req.params.id)
  .then(data=>{
    res.success(data);
  })
  .catch(error=>{
    res.error(error);
  });
});

router.delete('/:id', (req, res)=>{
  const ACTION = '[deleteEduBg]';
  logger.log('debug', TAG + ACTION + ' request parameters', req.params);
  eduBg.remove(req.params.id)
  .then(data=>{
    res.success(data);
  })
  .catch(error=>{
    res.error(error);
  });
});

module.exports = router;