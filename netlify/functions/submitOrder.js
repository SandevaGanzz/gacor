const fs = require('fs');
const path = require('path');
const file = path.resolve(__dirname, 'data.json');

exports.handler = async (event) => {
  const body = JSON.parse(event.body || "{}");
  const orders = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file)) : [];
  orders.push({ ...body, waktu: new Date().toISOString() });
  fs.writeFileSync(file, JSON.stringify(orders, null, 2));
  return { statusCode: 200, body: JSON.stringify({ success: true }) };
};
