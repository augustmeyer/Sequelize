async function fetchAPI() {
  const diningTable = document.querySelector('.table');
  const request = await fetch('/api/dining');
  const data = await request.json();
  const array = [];

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

async function meals() {
  const request2 = await fetch('/api/meals');
  const mealData = await request2.json();
  return mealData;
}

async function macros() {
  const request3 = await fetch('/api/macros');
  const macrosData = await request3.json();
  return macrosData;
}

const chart = new CanvasJS.Chart("chartContainer", {
  animationEnabled: true,
  title:{
    text: 'Meals and Macros'
  },
  axisX: {
    valueFormatString: 'DDD'
  },
  axisY: {
    prefix: '$'
  },
  toolTip: {
    shared: true
  },
  legend:{
    cursor: 'pointer',
    itemclick: toggleDataSeries
  },
  data: [{
    type: 'stackedBar',
    name: 'Meals',
    showInLegend: 'true',
    xValueFormatString: 'DD, MMM',
    yValueFormatString: '$#,##0',
    dataPoints: [
      { x: new Date(2017, 0, 30), y: 56 },
      { x: new Date(2017, 0, 31), y: 45 },
      { x: new Date(2017, 1, 1), y: 71 },
      { x: new Date(2017, 1, 2), y: 41 },
      { x: new Date(2017, 1, 3), y: 60 },
      { x: new Date(2017, 1, 4), y: 75 },
      { x: new Date(2017, 1, 5), y: 98 }
    ]
  },
  {
    type: 'stackedBar',
    name: 'Snacks',
    showInLegend: 'true',
    xValueFormatString: 'DD, MMM',
    yValueFormatString: '$#,##0',
    dataPoints: [
      { x: new Date(2017, 0, 30), y: 86 },
      { x: new Date(2017, 0, 31), y: 95 },
      { x: new Date(2017, 1, 1), y: 71 },
      { x: new Date(2017, 1, 2), y: 58 },
      { x: new Date(2017, 1, 3), y: 60 },
      { x: new Date(2017, 1, 4), y: 65 },
      { x: new Date(2017, 1, 5), y: 89 }
    ]
  },
  {
    type: 'stackedBar',
    name: 'Drinks',
    showInLegend: 'true',
    xValueFormatString: 'DD, MMM',
    yValueFormatString: '$#,##0',
    dataPoints: [
      { x: new Date(2017, 0, 30), y: 48 },
      { x: new Date(2017, 0, 31), y: 45 },
      { x: new Date(2017, 1, 1), y: 41 },
      { x: new Date(2017, 1, 2), y: 55 },
      { x: new Date(2017, 1, 3), y: 80 },
      { x: new Date(2017, 1, 4), y: 85 },
      { x: new Date(2017, 1, 5), y: 83 }
    ]
  },
  {
    type: 'stackedBar',
    name: 'Dessert',
    showInLegend: 'true',
    xValueFormatString: 'DD, MMM',
    yValueFormatString: '$#,##0',
    dataPoints: [
      { x: new Date(2017, 0, 30), y: 61 },
      { x: new Date(2017, 0, 31), y: 55 },
      { x: new Date(2017, 1, 1), y: 61 },
      { x: new Date(2017, 1, 2), y: 75 },
      { x: new Date(2017, 1, 3), y: 80 },
      { x: new Date(2017, 1, 4), y: 85 },
      { x: new Date(2017, 1, 5), y: 105 }
    ]
  },
  {
    type: 'stackedBar',
    name: 'Takeaway',
    showInLegend: 'true',
    xValueFormatString: 'DD, MMM',
    yValueFormatString: '$#,##0',
    dataPoints: [
      { x: new Date(2017, 0, 30), y: 52 },
      { x: new Date(2017, 0, 31), y: 55 },
      { x: new Date(2017, 1, 1), y: 20 },
      { x: new Date(2017, 1, 2), y: 35 },
      { x: new Date(2017, 1, 3), y: 30 },
      { x: new Date(2017, 1, 4), y: 45 },
      { x: new Date(2017, 1, 5), y: 25 }
    ]
  }]
});
chart.render();

function toggleDataSeries(e) {
  if (typeof (e.dataSeries.visible) === 'undefined' || e.dataSeries.visible) {
    e.dataSeries.visible = false;
  }
  else {
    e.dataSeries.visible = true;
  }
  chart.render();
}
async function windowOnload() {
  fetchAPI();
  meals();
  macros();
} 

window.onload = windowOnload;