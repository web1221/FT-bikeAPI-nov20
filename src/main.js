import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { BikeInfo } from './bikesearch.js';


$(document).ready(function(){

  $('#locEnter').click(function(){
    let location = $('#locationInput').val();
    $('#locationInput').val("");
    (async () => {
      let bikeInfo = new BikeInfo();
      const response = await bikeInfo.getBikesByCity(location);
      getElements(response);
    })();
    function getElements(response) {
      console.log(response);
      $('.showStolenBikes').text(`There were ${response.proximity} stolen bikes in this location.`);

    }
  });
});

// let request = new XMLHttpRequest();
// const url = `http://bikeindex.org/api/v3/search/`;
//
// request.onreadystatechange = function() {
//   if (this.readyState === 4 && this.status === 200) {
//     const response = JSON.parse(this.responseText);
//     getElements(response);
//   }
// }
//
// request.open("GET", url, true);
// request.send();
//
// const getElements = function(response) {
//   console.log(response);
//   $('.showStolenBikes').text(`There were ${response.bikes[0].date_stolen} stolen bikes in this location.`);
// }
