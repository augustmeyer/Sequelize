async function fetchAPI() {
  const diningTable = document.querySelector('.table');
  
  const request = await fetch('/api/dining');
  const data = await request.json();
  const array = [];

  const request2 = await fectch('/api/meals');
  const mealData = await request2.json();

  array.push(data['data']);

  function createDiningTable () {
    const columns = ` <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Location</th>
            <tbody>
            <tr>
                <th>${array[0][0]['hall_id']}</th>
                <td>${array[0][0]['hall_name']}</td>
                <td>${array[0][0]['hall_address']}</td>
            </tr>

            <tr>
                <th>${array[0][1]['hall_id']}</th>
                <td>${array[0][1]['hall_name']}</td>
                <td>${array[0][1]['hall_address']}</td>
            </tr>

            <tr>
                <th>${array[0][2]['hall_id']}</th>
                <td>${array[0][2]['hall_name']}</td>
                <td>${array[0][2]['hall_address']}</td>
        </tr>
            </thead>`;
    diningTable.innerHTML = columns;
  }
  createDiningTable();
}

async function windowOnload() {
  fetchAPI();
} 

window.onload = windowOnload;