const TAG = '[Student]';
const express = require('express');
const router = express.Router();
const logger = require('../Common/services/Logger');
const err = require('../Common/services/Errors');
const mw = require('../Common/middleware/Authentication');

const student   = require('./model/Student');
const famBg = require('./model/FamilyBg');
const idBg = require('./model/IdBg');

/* get all students */
router.get('/', mw.isAuthenticated, (req, res)=>{
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

/* get one student */
router.get('/:id', (req, res)=>{
  const ACTION = '[getStudent]';
  logger.log('debug', TAG + ACTION + ' request parameters', req.params);
  student.getProfile(req.params.id)
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

router.put('/:id', mw.isAuthenticated, (req, res)=>{
  const ACTION = '[putUpdateStudent]';
  logger.log('debug', TAG + ACTION + ' request parameters', req.body);
  if(req.params.id === req.user.id){
    student.update(req.body, req.params.id)
    .then(data=>{
      res.success(data);
    })
    .catch(error=>{
      res.error(error);
    });
  }else{
    let error = err.raise('UNAUTHORIZED');
    logger.log('error', TAG + ACTION, error);
    res.error(error);
  }
});

router.delete('/:id', mw.isAuthenticated, (req, res)=>{
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

router.get('/:id/family-background', (req, res, next) => {
  const ACTION = '[getFamilyBackground]';
  logger.log('debug', TAG + ACTION, ' request parameters ', req.params);

  famBg.view(req.params.id)
  .then(data=>{
      res.success(data);
  })
  .catch(error=>{
      res.error(error);
  })
});

router.post('/:id/family-background', mw.isAuthenticated, (req, res, next) => {
  const ACTION = '[postFamilyBackground]';
  logger.log('debug', TAG + ACTION + ' request parameters', req.params);
  logger.log('debug', TAG + ACTION + ' request body', req.body);

  if(parseInt(req.params.id) === req.user.id){
    famBg.add(req.body)
    .then(data=>{
      res.success(data);
    })
    .catch(error=>{
      res.error(error);
    })
  }else{
    let error = err.raise('UNAUTHORIZED');
    logger.log('error', TAG + ACTION, error);
    res.error(error);
  }
});

router.put('/:id/family-background', mw.isAuthenticated, (req, res, next) => {
  const ACTION = '[putFamilyBackground]';
  logger.log('debug', TAG + ACTION, ' request parameters ', req.params);
  logger.log('debug', TAG + ACTION, ' request body ', req.body);

  if(parseInt(req.params.id) === req.user.id){
    famBg.update(req.body, req.user.id)
    .then(data=>{
      res.success(data);
    })
    .catch(error=>{
      res.error(error);
    })
  }else{
    let error = err.raise('UNAUTHORIZED');
    logger.log('error', TAG + ACTION, error);
    res.error(error);
  }
});

router.delete('/:id/family-background', mw.isAuthenticated, (req, res, next) => {
  const ACTION = '[deleteFamilyBackground]';
  logger.log('debug', TAG + ACTION, ' request parameters ', req.params);
  logger.log('debug', TAG + ACTION + ' request body', req.body);

  if(parseInt(req.params.id) === req.user.id){
    famBg.delete(req.user.id, req.body.id)
    .then(data=>{
      res.success(data);
    })
    .catch(error=>{
      res.error(error);
    })
  }else{
    let error = err.raise('UNAUTHORIZED');
    logger.log('error', TAG + ACTION, error);
    res.error(error);
  }
});

router.get('/:id/id-bg', (req, res, next) => {
  const ACTION = '[getIdBackground]';
  logger.log('debug', TAG + ACTION, ' request parameters ', req.params);

  idBg.viewUserIds(req.params.id)
  .then(data=>{
    res.success(data);
  })
  .catch(error=>{
    res.error(error);
  })
});

router.post('/:id/id-bg', mw.isAuthenticated, (req, res, next) => {
  const ACTION = '[postId]';
  logger.log('debug', TAG + ACTION, ' request body ', req.body);

  if(parseInt(req.params.id) === req.user.id){
    req.body.user_id = req.user.id;
    idBg.addAsync(req.body)
    .then(data=>{
      res.success(data);
    })
    .catch(error=>{
      res.error(error);
    })
  }else{
    let error = err.raise('UNAUTHORIZED');
    logger.log('error', TAG + ACTION, error);
    res.error(error);
  }
});

router.put('/:id/id-bg', mw.isAuthenticated, (req, res, next) => {
  const ACTION = '[putId]';
  logger.log('debug', TAG + ACTION, ' request parameters ', req.params);
  logger.log('debug', TAG + ACTION, ' request body ', req.body);

  if(parseInt(req.params.id) === req.user.id){
    idBg.update(req.body, req.user.id)
    .then(data=>{
      res.success(data);
    })
    .catch(error=>{
      res.error(error);
    })
  }else{
    let error = err.raise('UNAUTHORIZED');
    logger.log('error', TAG + ACTION, error);
    res.error(error);
  }
});

router.delete('/:id/id-bg', mw.isAuthenticated, (req, res, next) => {
  const ACTION = '[deleteId]';
  logger.log('debug', TAG + ACTION, ' request parameters ', req.params);
  logger.log('debug', TAG + ACTION, ' request body ', req.body);

  if(parseInt(req.params.id) === req.user.id){
    idBg.delete(req.user.id, req.body.id)
    .then(data=>{
      res.success(data);
    })
    .catch(error=>{
      res.error(error);
    })
  }else{
    let error = err.raise('UNAUTHORIZED');
    logger.log('error', TAG + ACTION, error);
    res.error(error);
  }
});

module.exports = router;