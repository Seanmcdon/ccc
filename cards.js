//format for the cards --

/*
      <li>
        <a href="#">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/25480/numbers-01.jpg" alt="">
          <p>Student #1</p>
        </a>
      </li>
*/

var cards = "";

for(var i = 0; i < students.length; i++){
  
  var card = `<li>
        <a href="#">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/25480/numbers-01.jpg" alt="">
          <p>Student #1</p>
        </a>
      </li>`;
 

   cards += card;

}

var list = document.getElementById("gallery");

list.innerHTML = cards;

