const http = require('http');

const dapr_url = "http://localhost:3500/v1.0/invoke/nodeapp/method/order";


// this one doesn't work, may due to the bug related to node http request to localhost
async function getData () {
  for (let i = 0; i < 10; i++) {
    http.get(dapr_url, res => {
      let data = [];
      const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
      console.log('Status Code:', res.statusCode);
      console.log('Date in Response header:', headerDate);
    
      res.on('data', chunk => {
        data.push(chunk);
      });
    
      res.on('end', () => {
        console.log('Response ended: ');
        const parsedData = JSON.parse(Buffer.concat(data).toString());

        console.log(parsedData);
      });
    }).on('error', err => {
      console.log('Error: ', err.message);
    });
  }
}




getData();