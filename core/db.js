var mysql      = require('mysql');
var settings = require('../setting');

exports.executeSql = function (sql, callback) {
console.log(settings);
var connection = mysql.createConnection(settings.dbConfig);
  connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }else {
      connection.query(sql,function (error, results, fields) {
        if (error) throw error;
        //console.log(fields);
        callback(results);

      });
    }
    console.log('connected as id ' + connection.threadId);
  });
}

