const btns = document.querySelectorAll('#controls button');
const container = document.getElementById('loaded-content');


const resource = [
		{
			headingContent: 'Solar Energy',
			bodyText: 'Solar is a renewable source of energy that can be easily provided to the public. Through the use of panels, energy is generated and stored for later use. Solar Energy is popular in some geographically hotter climates, China, Japan and United States. Countries of that region have beeen switching from oil to solar energy to improve the environment. Greenhouse gas emissions, eg. carbon dioxide, have decreased.(Where is solar energy used?, Energy Sage, 2021)',
			imgUrl: './img/solar.png',
			imgAlt: 'Solar Energy'
		},
		 {
			headingContent: 'Wind Energy',
			bodyText: 'Wind is a renewable source of energy that can be easily provided to the public. Through the use of wind mills, energy is generated and stored for later use. Wind Energy is popular in geographically cooler climates, mainly popular in China, Germany, France, UK, Spain, Brazil and Canada. These countries have been switching to wind energy to improve the environment. Greenhouse gas emissions, eg. carbon dioxide, have decreased.(Worlds top 10 countries in wind energy capacity, ETEnergyWorld, 2019)',
			imgUrl: './img/wind.png',
			imgAlt: 'Wind Energy'
		},
		 {
			headingContent: 'Biomass Energy',
			bodyText: 'Biomass is a renewable source of energy that can be easily provided to the public. Through the use of panels, energy is generated and stored for later use. Biomass is popular in South East Asian and Africa. Countries of that region have beeen using to biomass energy to improve the environment. Greenhouse gas emissions, eg. carbon dioxide, have decreased. (What Is Biomass? Which Countries Burn The Most Biomass?, World Atlas, 2021 )',
			imgUrl: './img/biomass.png',
			imgAlt: 'Biomass'
		}
];

function preloader() {
        const imagesList = [
           "./img/solar.png",
           "./img/wind.png",
           "./img/biomass.png"
        ];
        const images = [];
        for (let i = 0; i < imagesList.length; i++) {
            images[i] = new Image();
            images[i].src = imagesList[i];
        }

        console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
    };    
    window.addEventListener("load", preloader);


container.innerHTML = `<div class="box">
											   <h2>${resource[0].headingContent}</h2>
											   <img src="${resource[0].imgUrl}" alt="${resource[0].headingContent}">
											   <p>${resource[0].bodyText}</p>
											 </div>`;


function handleSelection(e) {
		

		for (let i = 0; i < btns.length; i++) {
			if (btns[i].hasAttribute('id')) {
				btns[i].removeAttribute('id');
			}
		}


		let currentButton = e.target;
		currentButton.setAttribute('id', 'active');
    
        for (let a = 0; a < btns.length; a++) {
			if (btns[a].hasAttribute('id')) {
                container.innerHTML = `<div class="box">
											   <h2>${resource[a].headingContent}</h2>
											   <img src="${resource[a].imgUrl}" alt="${resource[a].headingContent}">
											   <p>${resource[a].bodyText}</p>
											 </div>`;
			}
		}

}
for (let i = 0; i < btns.length; i++) {
	btns[i].addEventListener('click', handleSelection);
}