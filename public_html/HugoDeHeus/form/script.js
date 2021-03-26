const form = document.getElementById('form');
const aanhef = document.getElementById('aanhef');
const voornaam = document.getElementById('voornaam');
const achternaam = document.getElementById('achternaam');
const straat = document.getElementById('straat');
const nummer = document.getElementById('nummer');
const bedrijf = document.getElementById('bedrijf');
const post = document.getElementById('post');
const plaats = document.getElementById('plaats');
const land = document.getElementById('land');
const email = document.getElementById('email');
const telenum = document.getElementById('telenum');
const agv = document.getElementById('agv');

const aanhef2 = document.getElementById('aanhef2');
const voornaam2 = document.getElementById('voornaam2');
const achternaam2 = document.getElementById('achternaam2');
const straatnaam2 = document.getElementById('straat2');
const huisnummer2 = document.getElementById('nummer2');
const bedrijf2 = document.getElementById('bedrijf2');
const post2 = document.getElementById('post2');
const plaats2 = document.getElementById('plaats2');
const land2 = document.getElementById('land2');

let x = 0

form.addEventListener('submit', e => {
	e.preventDefault();
	
	
	checkInputs();

});

function checkInputs() {
	const aanhefValue = aanhef.value.trim();
	const voornaamValue = voornaam.value.trim();
	const achternaamValue = achternaam.value.trim();
	const straatValue = straat.value.trim();
	const nummerValue = nummer.value.trim();
	const bedrijfValue = bedrijf.value.trim();
	const postValue = post.value.trim();
	const plaatsValue = plaats.value.trim();
	const landValue = land.value.trim();
	const emailValue = email.value.trim();
	const telenumValue = telenum.value.trim();
	const agvValue = agv.value.trim();

	const aanhef2Value = aanhef2.value.trim();
	const voornaam2Value = voornaam2.value.trim();
	const achternaam2Value = achternaam2.value.trim();
	const straat2Value = straatnaam2.value.trim();
	const nummer2Value = nummer2.value.trim();
	const bedrijf2Value = bedrijf2.value.trim();
	const post2Value = post2.value.trim();
	const plaats2Value = plaats2.value.trim();
	const land2Value = land2.value.trim();

	let x = 0

	if(aanhefValue === '') {
		setErrorFor (aanhef, 'Aanhef kan niet leeg zijn.');
		x++
		console.log(`x:${x}`)
    } else {
		setSuccessFor (aanhef);
		localStorage.setItem('Aanhef', aanhefValue);
	}

	if(voornaamValue === '') {
		setErrorFor(voornaam, 'Voornaam kan niet leeg zijn.');
		x++
		console.log(`x:${x}`)
	} else {
		setSuccessFor(voornaam);
		localStorage.setItem('Voornaam', voornaamValue);
	}

	if(achternaamValue === '') {
		setErrorFor(achternaam, 'Achternaam kan niet leeg zijn.');
		x++
		console.log(`x:${x}`)
	} else {
		setSuccessFor(achternaam);
		localStorage.setItem('Achternaam', achternaamValue);
	}

	if(straatValue === '') {
		setErrorFor(straat, 'Straatnaam kan niet leeg zijn.');
		x++
		console.log(`x:${x}`)
	} else {
		setSuccessFor(straat);
		localStorage.setItem('Straatnaam', straatValue);
	}
	
	if(nummerValue === '') {
		setErrorFor(nummer, 'Huisnummer kan niet leeg zijn.');
		x++
		console.log(`x:${x}`)
	} else {
		setSuccessFor(nummer);
		localStorage.setItem('Huisnummer', nummerValue);
	}

	if(bedrijfValue !== '') {
		localStorage.setItem('Bedrijf', bedrijfValue)
	}

	if(postValue === '') {
		setErrorFor(post, 'Postcode kan niet leeg zijn.');
		x++
		console.log(`x:${x}`)
	} else {
		setSuccessFor(post);
		localStorage.setItem('Postcode', postValue);
	}

	if(plaatsValue === '') {
		setErrorFor(plaats, 'Plaats kan niet leeg zijn.');
		x++
		console.log(`x:${x}`)
	} else {
		setSuccessFor(plaats);
		localStorage.setItem('Plaatsnaam', plaatsValue);
	}

	if(landValue === '') {
		setErrorFor(land, 'Land kan niet leeg zijn.');
		x++
		console.log(`x:${x}`)
	} else {
		setSuccessFor(land);
		localStorage.setItem('Land', landValue);
	}

	if(emailValue === '') {
		setErrorFor(email, 'Email kan niet leeg zijn.');
		x++
		console.log(`x:${x}`)
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Dat is geen bestaande email.');
		x++
		console.log(`x:${x}`)
	} else {
		setSuccessFor(email);
		localStorage.setItem('Email', emailValue);
	}

	if(telenumValue === '') {
		setErrorFor(telenum, 'Telefoonnummer kan niet leeg zijn.');
		x++
		console.log(`x:${x}`)
	} else {
		setSuccessFor(telenum);
		localStorage.setItem('Telefoonnummer', telenumValue);
	}

	if(agvValue === '') {
		setErrorFor (agv, 'Je moet de algemeene voorwaarden accepteren.');
		x++
		console.log(`x:${x}`)
    } else {
		setSuccessFor (agv);
    }

	if(aanhef2Value === '') {
		setErrorFor (aanhef2, 'Aanhef kan niet leeg zijn.');
		x++
		console.log(`x:${x}`)
	} else {
		setSuccessFor (aanhef2);
		localStorage.setItem('Ander factuur aanhef', aanhef2Value);
	}

	if(voornaam2Value === '') {
		setErrorFor(voornaam2, 'Voornaam kan niet leeg zijn.');
		x++
		console.log(`x:${x}`)
	} else {
		setSuccessFor(voornaam2);
		localStorage.setItem('Ander factuur voornaam', voornaam2Value);
	}

	if(achternaam2Value === '') {
		setErrorFor(achternaam2, 'Achternaam kan niet leeg zijn.');
		x++
		console.log(`x:${x}`)
	} else {
		setSuccessFor(achternaam2);
		localStorage.setItem('Ander factuur achternaam', achternaam2Value);
	}

	if(straat2Value === '') {
		setErrorFor(straat2, 'Straatnaam kan niet leeg zijn!');
		x++
		console.log(`x:${x}`)
	} else {
		setSuccessFor(straat2);
		localStorage.setItem('Ander factuur straatnaam', straat2Value);
	}
	
	if(nummer2Value === '') {
		setErrorFor(nummer2, 'Huisnummer kan niet leeg zijn!');
		x++
		console.log(`x:${x}`)
	} else {
		setSuccessFor(nummer2);
		localStorage.setItem('Ander factuur huisnummer', nummer2Value);
	}

	if(bedrijf2Value !== '') {
		localStorage.setItem('Ander factuur bedrijf', bedrijf2Value)
	}

	if(post2Value === '') {
		setErrorFor(post2, 'Postcode kan niet leeg zijn!');
		x++
		console.log(`x:${x}`)
	} else {
		setSuccessFor(post2);
		localStorage.setItem('Ander factuur postcode', post2Value);
	}

	if(plaats2Value === '') {
		setErrorFor(plaats2, 'Plaats kan niet leeg zijn!');
		x++
		console.log(`x:${x}`)
	} else {
		setSuccessFor(plaats2);
		localStorage.setItem('Ander factuur plaatsnaam', plaats2Value);
	}

	if(land2Value === '') {
		setErrorFor(land2, 'Land kan niet leeg zijn!');
		x++
		console.log(`x:${x}`)
	} else {
		setSuccessFor(land2);
		localStorage.setItem('Ander factuur land', land2Value);
	} 

	if(x === 0) {
		window.location.replace("gegevens.html");
		console.log("Versturen");
    } else {
		console.log("Niet Versturen");
	}
}

function copyTextValue(bf) {
	var text1 = bf.checked ? document.getElementById("aanhef").value : '';
	document.getElementById("aanhef2").value = text1;

	var text1 = bf.checked ? document.getElementById("voornaam").value : '';
	document.getElementById("voornaam2").value = text1;

	var text1 = bf.checked ? document.getElementById("achternaam").value : '';
	document.getElementById("achternaam2").value = text1;

	var text1 = bf.checked ? document.getElementById("straat").value : '';
	document.getElementById("straat2").value = text1;

	var text1 = bf.checked ? document.getElementById("nummer").value : '';
	document.getElementById("nummer2").value = text1;

	var text1 = bf.checked ? document.getElementById("bedrijf").value : '';
	document.getElementById("bedrijf2").value = text1;

	var text1 = bf.checked ? document.getElementById("post").value : '';
	document.getElementById("post2").value = text1;	

	var text1 = bf.checked ? document.getElementById("plaats").value : '';
	document.getElementById("plaats2").value = text1;

	var text1 = bf.checked ? document.getElementById("land").value : '';
	document.getElementById("land2").value = text1;
  }

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

