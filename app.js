let http = require("http");

http.createServer((req,res) =>{
    res.write("Hi Node");
    res.end();
}).listen(8080);

async function getData() {
  return Promise.resolve('data');
}

async function getMoreData(data) {
  return Promise.resolve(data + 'more data');
}

async function getAll() {
  const data = await getData();
  const moreData = await getMoreData(data);
  return `All the data: ${data}, ${moreData}`;
}

getAll().then((all) => {
  console.log('all the data')
})