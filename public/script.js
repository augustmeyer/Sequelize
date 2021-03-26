async function fetchAPI() {
  const table = document.querySelector('.diningTable');
  
  const request = await fetch('/api/dining');
  const data = await request.json();
  const array = [];

  array.push(data['data']);
  console.log(array[0][1]['hall.id']);

  function createDiningTable () {
    const columns = `<thead>
            <tr>
              <th>Hall ID</th>
              <th>Name</th>
              <th>Loction</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <th>${halls[0][0]['hall.id']}</th>
                <td>${halls[0][0]['hall.name']}</td>
                <td>${halls[0][0]['hall.address']}</td>
            </tr>

            <tr>
                <th>${halls[0][1]['hall.id']}</th>
                <td>${halls[0][1]['hall.name']}</td>
                <td>${halls[0][1]['hall.address']}</td>
            </tr>

            <tr>
                <th>${halls[0][2]['hall.id']}</th>
                <td>${halls[0][2]['hall.name']}</td>
                <td>${halls[0][2]['hall.address']}</td>
            </tr>
          </tbody>`;
    table.innerHTML = columns;
  }
  createDiningTable();
}

window.onload = fetchAPI;