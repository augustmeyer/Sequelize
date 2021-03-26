async function fetchHalls() {
  const table = document.querySelector('.table');
  
  const request = await fetch('/api/dining');
  const data = await request.json();
  const halls = [];


async function windowActions() {
    fetchHalls();
  }
  
window.onload = windowActions;