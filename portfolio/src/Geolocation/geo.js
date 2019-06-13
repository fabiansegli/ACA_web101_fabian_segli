function getGeo() {
    const status = document.querySelector('#status');
    const mapLink = document.querySelector('#map-link');
    mapLink.href = '';
    mapLink.textContent = '';
    
    function success(position) {
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;
        status.textContent = '';
        mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
        mapLink.innerHTML = `<iframe width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=${longitude}%2C${latitude}%2C${longitude}%2C${latitude}&amp;layer=mapnik" style="border: 1px solid black"></iframe><br/><small><a href="https://www.openstreetmap.org/#map=18/${latitude}/${longitude}">View Larger Map</a></small>
        `
    }
    function error() {
        status.innerHTML = 'Unable to retrieve your location';
    }
    if (!navigator.geolocation) {
      status.textContent = 'Geolocation is not supported by your browser';
    } else {
      status.textContent = 'Locating…';
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }

  