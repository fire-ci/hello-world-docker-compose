// const knexConfig = require('./db/knexfile');

// const environments = [];

// environments['local'] = {
//   name: 'local',
//   db: {
//     rds: knexConfig.development.connection,
//   },
//   auth: {
//     audience: 'https://api-dev.fire.ci',
//     domain: "fireci.auth0.com",
//     clientId: "CWjSWn6EU9iBewuQyVfbJG7m4OnMpubk",
//     clientSecret: "U_nJPcjuzF-weyk3MBMWAN1tXAKIvDQ-Pxk4S1iFwxGZsj53qQwR_42yMxBG0Ty8",
//   },
//   app: {
//     apiUrl: 'http://localhost:8000',
//     dashboardUrl: 'http://localhost:5000',
//   },
//   github: {
//     appId: "7934",
//     appNameForUserAgent: "Fire CI Dev",
//     clientId: "Iv1.78c20fd2bb19c6dc",
//     clientSecret: "060597f0665685b92ae97194dc039305b1b4f8fc",
//     secretToken: "bfd31e56dfeded334363bb76aed4365009bb7b4b",
//   },
//   braintree: {
//     env: 'sandbox',
//     merchantId: 'g4276v7gdc9nkzys',
//     publicKey: '24bkd3hnbx8y8wty',
//     privateKey: '50f3b355434686ac90f536dadc2cccc7',
//   }
// };

// environments['prod'] = {
//   name: 'prod',
//   db: {
//     rds: {
//       host: process.env.FIRECI_DB || knexConfig.production.connection.host,
//       user: knexConfig.production.connection.user,
//       password: knexConfig.production.connection.password,
//     }
//   },
//   auth: {
//     audience: 'https://api.fire.ci',
//     domain: "fireci.auth0.com",
//     clientId: "CWjSWn6EU9iBewuQyVfbJG7m4OnMpubk",
//     clientSecret: "U_nJPcjuzF-weyk3MBMWAN1tXAKIvDQ-Pxk4S1iFwxGZsj53qQwR_42yMxBG0Ty8",
//   },
//   app: {
//     apiUrl: 'http://api.fire.ci',
//     dashboardUrl: 'https://app.fire.ci',
//   },
//   github: {
//     appId: "20198",
//     appNameForUserAgent: "Fire CI",
//     clientId: "Iv1.4dac62e1ab3591ef",
//     clientSecret: "9c0ca5c8816d55b271af2fa86f3fa294f112940b",
//     secretToken: "bfd31e56dfeded334363bb76aed4365009bb7b4b",
//   },
//   braintree: {
//     env: 'sandbox',
//     merchantId: 'g4276v7gdc9nkzys',
//     publicKey: '24bkd3hnbx8y8wty',
//     privateKey: '50f3b355434686ac90f536dadc2cccc7',
//   }
// };

// module.exports = db: {
//   host: process.env.FIRECI_DB || knexConfig.production.connection.host,
//   user: knexConfig.production.connection.user,
//   password: knexConfig.production.connection.password,
// },;