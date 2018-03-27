document.addEventListener('DOMContentLoaded', function() {
  var getKittenButton = document.querySelector('button');
  console.log(getKittenButton);
  getKittenButton.addEventListener('click', function() {
    $.ajax({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'GET',
      dataType: 'json'
    }).done(function(responseData) {
      var catBox = document.querySelectorAll('.cat-box');
      for (var i = 0; i < responseData.cats.length; i++) {
        var carElement = document.createElement("img");
        carElement.src = responseData.cats[i].photo;
        carElement.alt = 'Photo of ' + responseData.cats[i].name;
        while (catBox[i].hasChildNodes()) {
          catBox[i].removeChild(catBox[i].firstChild);
        };
        catBox[i].appendChild(carElement);
        console.log(catBox[i]);
      };
    });
  });
});
