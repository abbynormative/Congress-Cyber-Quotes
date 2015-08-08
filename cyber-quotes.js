var query_params = { apikey: 'f6ab5f2e4f69444b9f2c0a44d9a5223d',
    phrase: 'cyber',
    sort: 'date desc'
    };
$.ajax({
  dataType: "json",
  url: "http://capitolwords.org/api/text.json",
  data: query_params,
  success: function assign(response) {
    newquote();
    function newquote(){
    var random = Math.floor(Math.random() * 41);
    legislator = response.results[random].speaker_first + " " + response.results[random].speaker_last;
    date = response.results[random].date;
    quote = response.results[random].speaking;
    console.log(legislator);
    console.log(date);
    if(legislator.indexOf("null")!=-1){
        newquote();
      }
      
    else{   
        $('#legis').append('<center>' + legislator + ", " + date + ":" + '</center>');    
        $('#quote').append(" \"" + quote + " \"" + "<br/>" + "<br/>");
        function highlight(text) {
            document.getElementById("quote").innerHTML =      document.getElementById("quote").innerHTML.replace(
            new RegExp(text + '(?!([^<]+)?>)', 'gi'),
           '<b style="background-color:#ff0;font-size:100%">$&</b>'
           );
}
highlight('cyber');
highlight('Cyber');
    }
    }
   $(".button").on( "click", function() {
     $("#legis").empty();
     $("#quote").empty();
     newquote();
});
}
   
});