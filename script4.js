let body = document.getElementsByTagName('body')[0];
let table = document.createElement('table');
let tableBody = document.createElement('tbody');

let headers = [
  {
    id: 'id',
    title: 'Id',
  },
  {
    id: 'title',
    title: 'Title',
  },
  {
    id: 'brand',
    title: 'Brand',
  },
  {
    id: 'category',
    title: 'Category',
  },
];

let createHeader = (headers) => {
  for (let i = 0; i < headers?.length; i++) {
    let header = document.createElement('th');
    //Styles
    header.style.backgroundColor = 'red';
    header.style.color = 'white';
    header.style.padding = '10px';
    table.style.width = 100 + '%';
    header.style.width = 100 / headers.length + '%';

    header.appendChild(document.createTextNode(headers[i]?.title));
    tableBody.appendChild(header);
  }
  table.appendChild(tableBody);
  body.appendChild(table);
};

createHeader(headers);

fetch('https://dummyjson.com/products')
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data?.products.length; i++) {
      let row = document.createElement('tr');
      for (let j = 0; j < headers.length; j++) {
        let cell = document.createElement('td');
        cell.appendChild(
          document.createTextNode(data?.products?.[i][headers[j]?.id.toLowerCase()]),
        );
        row.appendChild(cell);
      }
      tableBody.appendChild(row);
    }
    table.appendChild(tableBody);
    body.appendChild(table);
  });