const fs = require('fs');
const path = require('path');
exports.handler = async () => {
  const file = path.resolve(__dirname, 'data.json');
  const orders = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file)) : [];
  return { statusCode: 200, body: JSON.stringify(orders) };
};
