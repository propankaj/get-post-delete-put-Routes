var db = require('../core/db');
var httpMsgs = require('../core/httpMsgs');
var util = require("util");


exports.getList = function (req, resp) {

db.executeSql("SELECT * FROM converting", function (data, err) {
    if (err) {
        resp.writeHead(500, { "Content-Type": "application/json" });
        resp.end();
    }
    else {
        resp.writeHead(200, { "Content-Type": "application/json" });
        if(data) resp.write(JSON.stringify(data));
        resp.end();
    }
})
};

exports.getListByID = function (req, resp, id=2) {

    db.executeSql("SELECT * FROM converting where id =" + id, function (data, err) {
        if (err) {
            resp.writeHead(500, { "Content-Type": "application/json" });
            resp.end();
        }
        else {
            resp.writeHead(200, { "Content-Type": "application/json" });
            if(data) resp.write(JSON.stringify(data));
            resp.end();
        }
    })
    };



exports.addUserToList = function (req, resp, reqBody) {
        console.log(reqBody,'=>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
    //let nvar=JSON.parse(reqBody)
    reqBody = JSON.parse(reqBody);
        if(!util.isObject(reqBody)) {
            resp.writeHead(500, { "Content-Type": "text/html" });
            resp.write('internal server error');
            resp.end();
        }else
         {        
       var sql = "INSERT INTO converting (name, country, value, rate) VALUES ";
       sql += util.format("('%s', '%s', %d , %d)", reqBody.name, reqBody.country, reqBody.value, reqBody.rate);

       console.log(sql);

        db.executeSql(sql, function (data, err) {
            if (err) {
                resp.writeHead(500, { "Content-Type": "application/json" });
                resp.end();
            }
            else {
                resp.writeHead(200, { "Content-Type": "application/json" });
                if(data) resp.write(JSON.stringify(data));
                resp.end();
            }
        })
    }
        
};

//delete user from list

exports.del = function(req, resp, reqBody) {

    if(!reqBody) throw new error("Input not valid");
    var data =JSON.parse(reqBody);
    if(data){

        if(!data.id) throw new Error("User id not Provided");

        var sql = "DELETE FROM converting";
        sql += " WHERE id = " + data.id;

        db.executeSql(sql, function (reqBody, err){
            if(err){
                resp.writeHead(500, { "Content-Type": "application/json" });
                resp.end();
            }
            else{
                resp.writeHead(200, { "Content-Type": "application/json" });
                if(data) resp.write(JSON.stringify(data));
                resp.end();
            }
        });
    }
    else{
        throw new Error("Input not valid");
    }
    
};

//update user data

exports.update = function(req, resp, reqBody) {

    if(!reqBody) throw new error("Input not valid");
    var data =JSON.parse(reqBody);
    if(data){

        if(!data.id) throw new Error("User id not Provided");

        var sql = "UPDATE converting SET";
        var isDataProvided = false;

        if(data.name){
            sql += " name =  '" + data.name + "',";
            isDataProvided = true;
        }

        if(data.name){
            sql += " country =  '" + data.country + "',";
            isDataProvided = true;
        }

        if(data.name){
            sql += " value =  '" + data.value + "',";
            isDataProvided = true;
        }

        if(data.name){
            sql += " rate =  '" + data.rate + "',";
            isDataProvided = true;
        }

        sql = sql.slice(0, -1);
        sql += "WHERE id = " + data.id;

        db.executeSql(sql, function (reqBody, err){
            if(err){
                resp.writeHead(500, { "Content-Type": "application/json" });
                resp.end();
            }
            else{
                resp.writeHead(200, { "Content-Type": "application/json" });
                if(data) resp.write(JSON.stringify(data));
                resp.end();
            }
        });
    }
    else{
        throw new Error("Input not valid");
    }
    
};

