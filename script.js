$('.folder').each(function(){
    $(this).css({"left": Math.random() * window.outerWidth , "top": Math.random() * window.outerHeight});
});

var i;
for (i = 0; i < 3; i++) {
    var elem = document.getElementById(i);
    $(elem).click(function(){
        console.log(this);
        console.log(this.text());
        displayPoem(this);
          });
}

// $("#1").click(function(){
// displayPoem(this)
//   });

  function displayPoem(x) {
      alert($(x).text())
  };

  console.log ($("#text-1").text());