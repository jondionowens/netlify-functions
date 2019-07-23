exports.handler = (event, content, callback) => {
  callback(null, {
    statusCode: 200,
    body: "<html><body>Hello, World</body></html>"
    });
}