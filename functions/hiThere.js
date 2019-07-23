exports.handler = (event, content, callback) => {
  callback(null, {
    statusCode: 200,
    body: {
      'hello': 'there'
    }
  });
}