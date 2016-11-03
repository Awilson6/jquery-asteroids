var url = "https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=LJJGFjN32CHcHkl6CNyssAmzm1OLYRSJ4dcMBCdQ";

$.ajax({
  url: url,
  success: function(results) {
    $ ("#count").html(results.element_count)
    //Below is another way to, but loner and ungainly.
    //document.getElementsByClassName("count").innerHTML = results.element_count;
    }
});
