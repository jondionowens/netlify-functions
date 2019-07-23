exports.handler = (event, content, callback) => {
  const response = {
    'hi': 'there'
  };
  callback(null, response)
}