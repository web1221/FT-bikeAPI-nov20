export class BikeInfo{
  async getBikesByCity(location) {
    try{

      let response = await fetch(`https://bikeindex.org:443/api/v3/search/count?location=IP&distance=10`);
      let jsonifiedResponse = await response.json();
      console.log(jsonifiedResponse);
      return jsonifiedResponse;
    } catch (error) {
      console.error("ya done messed up:" + error.message);
    }
  }
}

// export class BikeInfo{
//   async getBikesByCity(location) {
//     try{
//       let body;
//       let response = fetch(`http://bikeindex.org/api/v3/search/count?location=denver&distance=10&stolenness=proximity`);
//       response.then(() => {
//
//         console.log(response);
//       })
//     } catch (error) {
//       console.error("ya done messed up:" + error.message);
//     }
//   }
// }
