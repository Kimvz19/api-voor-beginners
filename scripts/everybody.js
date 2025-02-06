const fallbackWebsite = "https://youtu.be/dQw4w9WgXcQ";
const endpointSquad = 'items/person/?filter={"squads":{"squad_id":15}}';

//Url maken
const everybodyURL = baseURL + endpointSquad;



getData(everybodyURL).then(dataEverybody =>{
// console.log(dataEverybody);

// filtert de data 
let everybodySection = document.querySelector("section:nth-of-type(2)");
let allPersons = dataEverybody.data;


allPersons.forEach(person =>{
    //filtert namen 
    // console.log(person.name);
    
    let personName = person.name;
    let personImg = person.avatar;
    let personWeb = person.website;

    let getalTussen0en1 =  Math.random();
    let getalTussen1en5 = getalTussen0en1 * 5;
    let afgerondGetaltussen0en4 = Math.floor(getalTussen1en5);
    let afgerondGetaltussen1en5 = afgerondGetaltussen0en4 + 1;



    console.log(afgerondGetaltussen1en5);


    // if , else voor  met de placeholder maar van 1 optie 
    if (personImg){
        //do nothing
    // zo niet gebruik dan default image
    } else{
        personImg = `images/placeholder${afgerondGetaltussen1en5}.svg`;
    }


    if (personWeb){
        // do nothing

    } else{
        personWeb = fallbackWebsite;

    }

    let personHTML = `<article>
    <h3>${personName}</h3>
    <img src="${personImg}" alt="${personName}">
    <a href="${personWeb}" aria-label="de website van Krijn Hoetmer">website</a>
  </article>`;

  //beforeeend voegt het voor het einde van het element
  //insert Adjacent betekent aangrenzend aan elkaar inserten
  everybodySection.insertAdjacentHTML('beforeend', personHTML);

})
    
});












/**************/
/* SPIEKBRIEF */
/**************/

// const urlSquad = baseURL + endpointSquad;

// const list = document.querySelector('section:nth-of-type(2)');

// getEverybody();

// function getEverybody() {
// 	getData(urlSquad).then( data => { 

// 		const persons = data.data;

// 		persons.forEach(person => {

// 			let personName = person.name;
// 			let personImgSrc = person.avatar;
// 			let personWebsite = person.website;
	
// 			if (!personImgSrc) {
// 				let randomNr =  Math.floor( Math.random() * 5 ) + 1;
// 				personImgSrc = `images/placeholder${randomNr}.svg`;
// 			}

// 			if (!personWebsite) {
// 				personWebsite = fallbackWebsite;
// 			}

// 			personHTML = 
// 				`<article>
// 					<h3>${personName}</h3>
// 					<img src="${personImgSrc}" alt="${personName}">
// 					<a href="${personWebsite}" aria-label="de website van ${personName}">website</a>
// 				</article>`;

// 				list.insertAdjacentHTML('beforeend', personHTML);
// 		});
// 	});
// }