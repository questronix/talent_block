const nodemailer = require('nodemailer');
const Errors = require('./Errors');
const Logger = require('./Logger');

const TAG = '[MAILER]';

const cfenv = require('cfenv');
const appEnv = cfenv.getAppEnv();

const templates = {
  VERIFY_EMAIL : {
    subject: `Welcome to Talent Block $name!`,
    html: (name, token) => {
      return fs.readFileSync('../../../views/resetPassword.html').replace(/$appEnv/g, appEnv.url).replace(/$token/g, token).replace(/$name/g, name);
    }  
  },
  RESET_PASSWORD: {
    subject: `Reset your Password`,
    html: `Hello, <br>
    We’ve received a request to reset your password. <br>
    If you didn’t make the request, just ignore this message. Otherwise, you can reset your password using this <a href="${appEnv.url}/reset/password/$token">link</a>. <br>
    <br>
    Thanks, <br>
    The Talent Block Team
    `
  }
};

function sendEmail(to, template, data){
  const ACTION = '[sendEmail]';
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: process.env.MAILER_USER,
           pass: process.env.MAILER_PASS
       }
   });

   let tmp = templates[template];
  
   const mailOptions = {
    from: process.env.MAILER_USER, // sender address
    to: to, // list of receivers
    subject: tmp.subject.replace(/\$name/gi, data.name), // Subject line
    html: tmp.html(data.name, data.token)// plain text body
  };
  console.log('MAILOPTIONS', mailOptions);
  Logger.log('info', `${TAG}${ACTION} - mailOptions`, mailOptions);
  return new Promise((resolve, reject)=>{
    transporter.sendMail(mailOptions, function (err, info) {
      if(err){
        Logger.log('error', `${TAG}${ACTION} - ERROR`, err);
        reject(Errors.raise('SEND_MAIL_ERROR', err)); 
      }else
        resolve(info);
    });
  });
}

module.exports.sendEmailVerification = (to, payload)=>{
  const ACTION = '[sendEmailVerification]';
  Logger.log('info', `${TAG}${ACTION} - payload`, {to, payload});
  return sendEmail(to, 'VERIFY_EMAIL', payload);
};

module.exports.sendResetPassword = (to, payload)=>{
  const ACTION = '[sendEmailVerification]';
  Logger.log('info', `${TAG}${ACTION} - payload`, {to, payload});
  return sendEmail(to, 'RESET_PASSWORD', payload);
};