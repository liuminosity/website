
module.exports.requestHandler = function(request, response) {
  var statusCode = 200;

  var headers = defaultCorsHeaders;


  headers['Content-Type'] = "text/plain";

  response.writeHead(statusCode, headers);

  response.end("Hello, World!");
};

var defaultCorsHeaders = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10 // Seconds.
};

