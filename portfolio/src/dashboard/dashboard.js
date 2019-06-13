function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
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
  $(function() {
    let $submitButton = $('#submitButton');
    let $listOfItemsID = $('#listOfItemsID');

    $submitButton.on('click', function(e) {
        e.preventDefault();
        let $userInput = $('#userInput').val();
        $(`<li>${$userInput}</li>`).appendTo($listOfItemsID);
        $('#userInput').val('');
    });

    $listOfItemsID.on('click', 'li', function() {
        let $this = $(this);
        $this.remove();
    });
});