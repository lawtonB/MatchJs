$(document).ready(function() {
  $('.newgame').click(function() {
    randomizer();
    $(".board").empty();
    randomCards.forEach(function(card){
       $(".board").append(card.image);
    });
    var selectedCards = [];
    $(".card").click(function(){
      selectedCards.push(this);
      this.clicked === true;
      console.log($(this).attr('class'));
      $(this).css('background', 'transparent');
      $("img", this).show();
    });
  });
});
