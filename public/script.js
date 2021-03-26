async function windowActions() { 
    //console.log('window loaded');

   // const form = document.querySelector('.userform');
   // const search = document.querySelector('#city')
    //const suggestions = document.querySelector('.suggestions');
    
    const request = await fetch('https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json');
    const data = await request.json()


}

window.onload = windowActions;