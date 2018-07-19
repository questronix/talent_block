const TAG = '[Schedule]';
const express = require('express');
const router = express.Router();
const logger = require('../Common/services/Logger');
const Schedule = require('./model/Schedule');

router.get('/', (req, res)=>{
  const ACTION = '[getAllSchedule]';
  logger.log('debug', TAG + ACTION + ' request parameters', req.params);
  Schedule.findAll()
  .then(data=>{
    res.success(data);
  })
  .catch(error=>{
    res.error(error);
  });
});

router.get('/:id', (req, res)=>{
  const ACTION = '[getSchedule]';
  logger.log('debug', TAG + ACTION + ' request parameters', req.params);
  Schedule.find(req.params.id)
  .then(data=>{
    res.success(data);
  })
  .catch(error=>{
    res.error(error);
  });
});

router.post('/', (req, res)=>{
  const ACTION = '[postSchedule]';
  logger.log('debug', TAG + ACTION + ' request parameters', req.body);
  Schedule.add(req.body)
  .then(data=>{
    res.success(data);
  })
  .catch(error=>{
    res.error(error);
  });
});

router.put('/:id', (req, res)=>{
  const ACTION = '[updateSchedule]';
  logger.log('debug', TAG + ACTION + ' request parameters', req.body);
  Schedule.update(req.body, req.params.id)
  .then(data=>{
    res.success(data);
  })
  .catch(error=>{
    res.error(error);
  });
});

router.delete('/:id', (req, res)=>{
  const ACTION = '[deleteSchedule]';
  logger.log('debug', TAG + ACTION + ' request parameters', req.params);
  Schedule.remove(req.params.id)
  .then(data=>{
    res.success(data);
  })
  .catch(error=>{
    res.error(error);
  });
});

module.exports = router;