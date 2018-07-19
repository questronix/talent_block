const TAG = '[OccuBG]';
const express = require('express');
const router = express.Router();
const logger = require('../Common/services/Logger');
const occubg = require('./model/OccuBG');

//=========== querry all occupation bg
router.get('/', (req, res)=>{
  const ACTION = '[getAll]';
  logger.log('debug', TAG + ACTION + ' request parameters', req.params);
  occubg.findAll()
  .then(data=>{
    res.success(data);
  })
  .catch(error=>{
    res.error(error);
  });
});

//=========== querry occupation bg by ID
router.get('/:id', (req, res)=>{
  const ACTION = '[getOccu]';
  logger.log('debug', TAG + ACTION + ' request parameters', req.params);
  occubg.find(req.params.id)
  .then(data=>{
    res.success(data);
  })
  .catch(error=>{
    res.error(error);
  });
});

//*********** add occu bg
router.post('/', (req, res)=>{
  const ACTION = '[addOccu]';
  logger.log('debug', TAG + ACTION + ' request parameters', req.body);
  occubg.add(req.body)
  .then(data=>{
    res.success(data);
  })
  .catch(error=>{
    res.error(error);
  });
});

//*********** DELETE OCCU */
router.delete('/:id', (req, res)=>{
  const ACTION = '[deleteOccu]';
  logger.log('debug', TAG + ACTION + ' request parameters', req.params);
  occubg.remove(req.params.id)
  .then(data=>{
    res.success(data);
  })
  .catch(error=>{
    res.error(error);
  });
});

router.put('/:id', (req, res)=>{
  const ACTION = '[updateoccubg]';
  logger.log('debug', TAG + ACTION + ' request parameters', req.body);
  occubg.update(req.body, req.params.id)
  .then(data=>{
    res.success(data);
  })
  .catch(error=>{
    res.error(error);
  });
});

module.exports = router;