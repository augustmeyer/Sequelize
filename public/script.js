async function callAPI() {
  const request = await fetch('https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json');
  const data = await request.json()
} 

window.onload = callAPI;