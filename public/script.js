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

async function makeChart() {
  const randomNumberArray = [];
  while (randomNumberArray.length < 10) {
    const r = Math.floor(Math.random() * 45) + 1;
    if (randomNumberArray.indexOf(r) === -1) randomNumberArray.push(r);
  }
  const mealArray = [];
  const macrosArray = [];

  const request2 = await fetch('/api/meals');
  const data = await request2.json();

  mealArray.push(data);

  const request3 = await fetch('/api/macros');
  const data2 = await request3.json();

  macrosArray.push(data2);

  console.log( mealArray[0][randomNumberArray[0]]['meal_name']);

  const chart = new CanvasJS.Chart('chartContainer', {
    animationEnabled: true,
    title: {
      text: 'Meals and Macros'
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
      name: 'Calories',
      showInLegend: 'true',
      dataPoints: [
        { label: mealArray[0][randomNumberArray[0]]['meal_name'], y: macrosArray[0][randomNumberArray[0]]['calories'] },
        { label: mealArray[0][randomNumberArray[1]]['meal_name'], y: macrosArray[0][randomNumberArray[1]]['calories'] },
        { label: mealArray[0][randomNumberArray[2]]['meal_name'], y: macrosArray[0][randomNumberArray[2]]['calories'] },
        { label: mealArray[0][randomNumberArray[3]]['meal_name'], y: macrosArray[0][randomNumberArray[3]]['calories'] },
        { label: mealArray[0][randomNumberArray[4]]['meal_name'], y: macrosArray[0][randomNumberArray[4]]['calories'] },
        { label: mealArray[0][randomNumberArray[5]]['meal_name'], y: macrosArray[0][randomNumberArray[5]]['calories'] },
        { label: mealArray[0][randomNumberArray[6]]['meal_name'], y: macrosArray[0][randomNumberArray[6]]['calories'] },
        { label: mealArray[0][randomNumberArray[7]]['meal_name'], y: macrosArray[0][randomNumberArray[7]]['calories'] },
        { label: mealArray[0][randomNumberArray[8]]['meal_name'], y: macrosArray[0][randomNumberArray[8]]['calories'] },
        { label: mealArray[0][randomNumberArray[9]]['meal_name'], y: macrosArray[0][randomNumberArray[9]]['calories'] }
      ]
    },
    {
      type: 'stackedBar',
      name: 'Serving Size',
      showInLegend: 'true',
      dataPoints: [
        { label: mealArray[0][randomNumberArray[0]]['meal_name'], y: macrosArray[0][randomNumberArray[0]]['serving_size'] },
        { label: mealArray[0][randomNumberArray[1]]['meal_name'], y: macrosArray[0][randomNumberArray[1]]['serving_size'] },
        { label: mealArray[0][randomNumberArray[2]]['meal_name'], y: macrosArray[0][randomNumberArray[2]]['serving_size'] },
        { label: mealArray[0][randomNumberArray[3]]['meal_name'], y: macrosArray[0][randomNumberArray[3]]['serving_size'] },
        { label: mealArray[0][randomNumberArray[4]]['meal_name'], y: macrosArray[0][randomNumberArray[4]]['serving_size'] },
        { label: mealArray[0][randomNumberArray[5]]['meal_name'], y: macrosArray[0][randomNumberArray[5]]['serving_size'] },
        { label: mealArray[0][randomNumberArray[6]]['meal_name'], y: macrosArray[0][randomNumberArray[6]]['serving_size'] },
        { label: mealArray[0][randomNumberArray[7]]['meal_name'], y: macrosArray[0][randomNumberArray[7]]['serving_size'] },
        { label: mealArray[0][randomNumberArray[8]]['meal_name'], y: macrosArray[0][randomNumberArray[8]]['serving_size'] },
        { label: mealArray[0][randomNumberArray[9]]['meal_name'], y: macrosArray[0][randomNumberArray[9]]['serving_size'] }
      ]
    },
    {
      type: 'stackedBar',
      name: 'Cholesterol',
      showInLegend: 'true',
      dataPoints: [
        { label: mealArray[0][randomNumberArray[0]]['meal_name'], y: macrosArray[0][randomNumberArray[0]]['cholesterol'] },
        { label: mealArray[0][randomNumberArray[1]]['meal_name'], y: macrosArray[0][randomNumberArray[1]]['cholesterol'] },
        { label: mealArray[0][randomNumberArray[2]]['meal_name'], y: macrosArray[0][randomNumberArray[2]]['cholesterol'] },
        { label: mealArray[0][randomNumberArray[3]]['meal_name'], y: macrosArray[0][randomNumberArray[3]]['cholesterol'] },
        { label: mealArray[0][randomNumberArray[4]]['meal_name'], y: macrosArray[0][randomNumberArray[4]]['cholesterol'] },
        { label: mealArray[0][randomNumberArray[5]]['meal_name'], y: macrosArray[0][randomNumberArray[5]]['cholesterol'] },
        { label: mealArray[0][randomNumberArray[6]]['meal_name'], y: macrosArray[0][randomNumberArray[6]]['cholesterol'] },
        { label: mealArray[0][randomNumberArray[7]]['meal_name'], y: macrosArray[0][randomNumberArray[7]]['cholesterol'] },
        { label: mealArray[0][randomNumberArray[8]]['meal_name'], y: macrosArray[0][randomNumberArray[8]]['cholesterol'] },
        { label: mealArray[0][randomNumberArray[9]]['meal_name'], y: macrosArray[0][randomNumberArray[9]]['cholesterol'] }
      ]
    },
    {
      type: 'stackedBar',
      name: 'Sodium',
      showInLegend: 'true',
      dataPoints: [
        { label: mealArray[0][randomNumberArray[0]]['meal_name'], y: macrosArray[0][randomNumberArray[0]]['sodium'] },
        { label: mealArray[0][randomNumberArray[1]]['meal_name'], y: macrosArray[0][randomNumberArray[1]]['sodium'] },
        { label: mealArray[0][randomNumberArray[2]]['meal_name'], y: macrosArray[0][randomNumberArray[2]]['sodium'] },
        { label: mealArray[0][randomNumberArray[3]]['meal_name'], y: macrosArray[0][randomNumberArray[3]]['sodium'] },
        { label: mealArray[0][randomNumberArray[4]]['meal_name'], y: macrosArray[0][randomNumberArray[4]]['sodium'] },
        { label: mealArray[0][randomNumberArray[5]]['meal_name'], y: macrosArray[0][randomNumberArray[5]]['sodium'] },
        { label: mealArray[0][randomNumberArray[6]]['meal_name'], y: macrosArray[0][randomNumberArray[6]]['sodium'] },
        { label: mealArray[0][randomNumberArray[7]]['meal_name'], y: macrosArray[0][randomNumberArray[7]]['sodium'] },
        { label: mealArray[0][randomNumberArray[8]]['meal_name'], y: macrosArray[0][randomNumberArray[8]]['sodium'] },
        { label: mealArray[0][randomNumberArray[9]]['meal_name'], y: macrosArray[0][randomNumberArray[9]]['sodium'] }
      ]
    },
    {
      type: 'stackedBar',
      name: 'Carbs',
      showInLegend: 'true',
      dataPoints: [
        { label: mealArray[0][randomNumberArray[0]]['meal_name'], y: macrosArray[0][randomNumberArray[0]]['carbs'] },
        { label: mealArray[0][randomNumberArray[1]]['meal_name'], y: macrosArray[0][randomNumberArray[1]]['carbs'] },
        { label: mealArray[0][randomNumberArray[2]]['meal_name'], y: macrosArray[0][randomNumberArray[2]]['carbs'] },
        { label: mealArray[0][randomNumberArray[3]]['meal_name'], y: macrosArray[0][randomNumberArray[3]]['carbs'] },
        { label: mealArray[0][randomNumberArray[4]]['meal_name'], y: macrosArray[0][randomNumberArray[4]]['carbs'] },
        { label: mealArray[0][randomNumberArray[5]]['meal_name'], y: macrosArray[0][randomNumberArray[5]]['carbs'] },
        { label: mealArray[0][randomNumberArray[6]]['meal_name'], y: macrosArray[0][randomNumberArray[6]]['carbs'] },
        { label: mealArray[0][randomNumberArray[7]]['meal_name'], y: macrosArray[0][randomNumberArray[7]]['carbs'] },
        { label: mealArray[0][randomNumberArray[8]]['meal_name'], y: macrosArray[0][randomNumberArray[8]]['carbs'] },
        { label: mealArray[0][randomNumberArray[9]]['meal_name'], y: macrosArray[0][randomNumberArray[9]]['carbs'] }
      ]
    }, 
    {
      type: 'stackedBar',
      name: 'Protein',
      showInLegend: 'true',
      dataPoints: [
        { label: mealArray[0][randomNumberArray[0]]['meal_name'], y: macrosArray[0][randomNumberArray[0]]['protein'] },
        { label: mealArray[0][randomNumberArray[1]]['meal_name'], y: macrosArray[0][randomNumberArray[1]]['protein'] },
        { label: mealArray[0][randomNumberArray[2]]['meal_name'], y: macrosArray[0][randomNumberArray[2]]['protein'] },
        { label: mealArray[0][randomNumberArray[3]]['meal_name'], y: macrosArray[0][randomNumberArray[3]]['protein'] },
        { label: mealArray[0][randomNumberArray[4]]['meal_name'], y: macrosArray[0][randomNumberArray[4]]['protein'] },
        { label: mealArray[0][randomNumberArray[5]]['meal_name'], y: macrosArray[0][randomNumberArray[5]]['protein'] },
        { label: mealArray[0][randomNumberArray[6]]['meal_name'], y: macrosArray[0][randomNumberArray[6]]['protein'] },
        { label: mealArray[0][randomNumberArray[7]]['meal_name'], y: macrosArray[0][randomNumberArray[7]]['protein'] },
        { label: mealArray[0][randomNumberArray[8]]['meal_name'], y: macrosArray[0][randomNumberArray[8]]['protein'] },
        { label: mealArray[0][randomNumberArray[9]]['meal_name'], y: macrosArray[0][randomNumberArray[9]]['protein'] }
      ]
    },
    {
      type: 'stackedBar',
      name: 'Fats',
      showInLegend: 'true',
      dataPoints: [
        { label: mealArray[0][randomNumberArray[0]]['meal_name'], y: macrosArray[0][randomNumberArray[0]]['fat'] },
        { label: mealArray[0][randomNumberArray[1]]['meal_name'], y: macrosArray[0][randomNumberArray[1]]['fat'] },
        { label: mealArray[0][randomNumberArray[2]]['meal_name'], y: macrosArray[0][randomNumberArray[2]]['fat'] },
        { label: mealArray[0][randomNumberArray[3]]['meal_name'], y: macrosArray[0][randomNumberArray[3]]['fat'] },
        { label: mealArray[0][randomNumberArray[4]]['meal_name'], y: macrosArray[0][randomNumberArray[4]]['fat'] },
        { label: mealArray[0][randomNumberArray[5]]['meal_name'], y: macrosArray[0][randomNumberArray[5]]['fat'] },
        { label: mealArray[0][randomNumberArray[6]]['meal_name'], y: macrosArray[0][randomNumberArray[6]]['fat'] },
        { label: mealArray[0][randomNumberArray[7]]['meal_name'], y: macrosArray[0][randomNumberArray[7]]['fat'] },
        { label: mealArray[0][randomNumberArray[8]]['meal_name'], y: macrosArray[0][randomNumberArray[8]]['fat'] },
        { label: mealArray[0][randomNumberArray[9]]['meal_name'], y: macrosArray[0][randomNumberArray[9]]['fat'] }
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
  
}
async function windowOnload() {
  fetchAPI();
  makeChart();
} 

window.onload = windowOnload;