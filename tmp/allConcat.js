var image1 =  '<div class="card 1"> <img src="img/1.jpeg" alt="" /> </div>';
var image2 =  '<div class="card 2"> <img src="img/2.jpeg" alt="" /> </div>';
var image3 =  '<div class="card 3"> <img src="img/3.jpeg" alt="" /> </div>';
var image4 =  '<div class="card 4"> <img src="img/4.jpeg" alt="" /> </div>';
var image5 =  '<div class="card 5"> <img src="img/5.jpeg" alt="" /> </div>';

var card1 = new Card(image1);
var card2 = new Card(image2);
var card3 = new Card(image3);
var card4 = new Card(image4);
var card5 = new Card(image5);

var cards = [card1, card1, card2, card2, card3, card3, card4, card4, card5, card5];
var randomCards = [];

function Card(image, clicked){
  this.image = image;
  this.clicked = false;
}

function randomizer(){
  for(var i=0; i < 10; i++){
      randomIndex = Math.floor(Math.random() * cards.length);
      randomCards.push(cards[randomIndex]);
      cards.splice(randomIndex, 1);
  }
    return randomCards;
}


exports.Card = Card;

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
