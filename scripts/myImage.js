

getData(myURL).then(data208 => {

    //variabele met de avatar, maar ik heb geen afbeelding toegevoegd
    let myAvatar = data208.data.avatar;
    let myName = data208.data.name;

    let myImg = document.createElement("img");


    // vult de img in 
    myImg.src = myAvatar;
    myImg.alt = myName;

    console.log(myImg);

    //selecteert de section 
    let mySection = document.querySelector("section:nth-of-type(1)");

    //appendChild is specifieker, toevoegen in html
    mySection.appendChild(myImg);
});









/**************/
/* SPIEKBRIEF */
/**************/

// const mySection = document.querySelector('section:nth-of-type(1)');

// getMyImage();

// function getMyImage() {
// 	getData(urlMe).then( data => {  
// 		const myData = data.data;
// 		let myName = myData.name;
// 		let myImgSrc = myData.avatar;

// 		if (!myImgSrc) {
// 			myImgSrc = "images/placeholder1.svg";
// 		}

// 		const myImg = document.createElement("img");

// 		myImg.src = myImgSrc;
// 		myImg.alt = myName;

// 		mySection.append(myImg);
// 	});	
// }