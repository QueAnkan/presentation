const landingpageView = document.querySelector('.main_section-landingpage-view')
const aboutView = document.querySelector('.main_section-about-view')
const landingPageBtn = document.querySelector('.main_section_button-landingpage-view')
const aboutButton =document.querySelector('.main_section_button-about-view')



landingPageBtn.addEventListener('click', () => {
	landingpageView.style.display ='none'
	aboutView.style.display = 'flex'
})


aboutButton.addEventListener('click', () => {
	landingpageView.style.display ='flex'
	aboutView.style.display = 'none'
})