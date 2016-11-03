var url = "https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=LJJGFjN32CHcHkl6CNyssAmzm1OLYRSJ4dcMBCdQ";

$.ajax({
  url: url,
  success: function(results) {
    $ ("#count").html(results.element_count)
    //Below is another way to, but loner and ungainly.
    //document.getElementsByClassName("count").innerHTML = results.element_count;

    var asteroids = results.near_earth_objects["2015-09-08"];
    var asteroid;
    var currentRow;
    for(var i = 0; i < asteroids.length; i ++) {

      if (i % 3 === 0) {
         currentRow = $("<div></div>").addClass("row");
         $(".container").append(currentRow);
      }
      makeName(asteroids[i], currentRow);

      // asteroid = $("<h3></h3>").html(asteroids[i].name);
      // $(".container").append(asteroid);
    }
  }
});
//funciton creates a colunm containing the asteroids name.
function makeName(asteroid, row){
  var colunm = $("<div></div>").addClass("col-md-4");
  var name = $("<h3></h3>").html(asteroid.name);

  $(colunm).append(name);
  $(row).append(colunm);

}
