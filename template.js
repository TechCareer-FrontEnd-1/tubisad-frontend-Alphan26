const counters = document.querySelectorAll('.num');
const speed = 200; // The lower the slower

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-val');
		const count = +counter.innerText;

		// Lower inc to slow and higher to slow
		const inc = target / speed;

		// console.log(inc);
		// console.log(count);

		// Check if target is reached
		if (count < target) {
			// Add inc to count and output in counter
			counter.innerText = Math.ceil(count + inc);
			// Call function every ms
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};

	updateCount();
});


var mybutton = document.getElementById("back_top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


/* autocomplete */
$(function () {
  var availableTags = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme"
  ];
  $("#tags").autocomplete({
    source: availableTags
  });
});



let date = () => {
  //alert("deneme")

  document.getElementById("date_id").innerHTML = new Date();
  //$('#date_id').html( `tarih: ${new Date()}`);

  //document.getElementById("date_id").innerText=new Date();
  //$('#date_id').text(new Date());

  //document.getElementById("date_id").style.backgroundColor="blue";
  //document.getElementById("date_id").style.color="white";
  // $("#date_id").css("background-color","blue").css("color","white")

  const cssObject = {
    "color": "red",
    "background-color": "black",
    "box-shadow": "1px 1px 3px 1px rgba(255,255,255,.8)",
    "margin-bottom": "3rem"
  }
  $("#date_id").css(cssObject);
  //autocomplete 
  //backtotop
}


/* login value and validation*/
$(function () {
  $("#btnSubmit").click(function () {
    let email, password;
    email = jQuery.trim($("#user_email").val());
    password = jQuery.trim($("#user_password").val());


    //validation  email
    if (email == "") {
      $("#validation_email").html("Email boş geçilemez...")
    } else if (regexEmail(email) == false) {
      $("#validation_email").html("Uygun formatta email girilmedi exam: deneme@gmail.com")
    }

    //regex email
    function regexEmail(email) {
      let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regex.test(email);
    }

    //validation  password
    if (password == "") {
      $("#validation_password").html("password boş geçilemez...")
    } else if (regexPassword(password) == false) {
      $("#validation_password").html("Uygun formatta  şifre girilmedi exam: en az 8 karakter")
    }

    //regex email
    function regexPassword(password) {
      let regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;;
      return regex.test(password);
    }
  })//onclick close
}); //document ready close


/* login value and validation*/
$(function () {
  $("#registerSubmit").click(function () {
    let email, password;
    email = jQuery.trim($("#reg_email").val());
    password = jQuery.trim($("#reg_password").val());


    //validation  email
    if (email == "") {
      $("#reg_validation_email").html("Email boş geçilemez...")
    } else if (regexEmail(email) == false) {
      $("#reg_validation_email").html("Uygun formatta email girilmedi exam: deneme@gmail.com")
    }

    //regex email
    function regexEmail(email) {
      let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regex.test(email);
    }

    //validation  password
    if (password == "") {
      $("#reg_validation_password").html("password boş geçilemez...")
    } else if (regexPassword(password) == false) {
      $("#reg_validation_password").html("Uygun formatta  şifre girilmedi exam: en az 8 karakter")
    }

    //regex email
    function regexPassword(password) {
      let regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;;
      return regex.test(password);
    }
  })//onclick close
}); //document ready close



