// import Transport from 'winston-transport';

// module.exports = class CustomTransport extends Transport {
//   constructor(opts) {
//     super(opts);

//     //
//     // Consume any custom options here. e.g.:
//     // - Connection information for databases
//     // - Authentication information for APIs (e.g. loggly, papertrail,
//     //   logentries, etc.).
//     //
//   }

//   log(info, callback) {
//     setImmediate(() => {
//       this.emit("logged", info);
//     });

//     // Perform the writing to the remote service

//     callback();
//   }
// };
