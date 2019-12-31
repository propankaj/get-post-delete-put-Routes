exports.send200 = function (req, resp, data) {
    resp.writeHead(200, { "Content-Type": "application/json" });
    resp.end();
};

exports.show500 = function (req, resp, data) {
    resp.writeHead(500, { "Content-Type": "application/json" });
    resp.end();
};

exports.sendJson = function (req, resp, data) {
    resp.writeHead(200, { "Content-Type": "application/json" });
    if(data) resp.write(JSON.stringify(data));
    resp.end();
};