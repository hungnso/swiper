/*=============== SWIPER JS GALLERY ===============*/
const swiperCards = new Swiper(".gallery-cards", {
	loop: true,
	loopedSlides: 5,
	slidesPerView: 3,
	cssMode: true,
	effect: "fade",
	slideToClickedSlide: true,
	pagination: {
		el: ".swiper-pagination",
		type: "fraction"
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev"
	}
});

let swiperThumbs = new Swiper(".swiper-list", {
	
      slidesPerView: 5,
});
const buttonShow = document.querySelector('.show-detail')
const detail = document.querySelector('.gallery__overflow')
let screenWidth = window.innerWidth
console.log(screenWidth)
function handleShowDetail() {
	console.log('Button đã được click!');
	detail.style.bottom = '55%'
	if(screenWidth < 390){
		detail.style.bottom = '65%'
	} 
	
	// Các hành động khác bạn muốn thực hiện khi button được click
  }


buttonShow.addEventListener('click', handleShowDetail)

// swiperThumbs.controller.control = swiperCards;

/// Danh sách các filter 
// const listFilter = ['Collection', 'Material', 'Shape', 'Tags'];
const listFilter = [
	{
	name: "Collection",
	active: false
	},
	{
	name: "Material",
	active: true
	},
	{
	name: "Shape",
	active: false
	},
	{
	name: "Tags",
	active: false
	},
];
const listFilterContainer =  document.querySelector('.list-filter')

listFilter.forEach(item => {
	const filterItem = document.createElement('div')
	filterItem.classList.add('filter-item', 'col-3', 'text-center')
	if(item.active){
		filterItem.classList.add('active-filter')
	}
	filterItem.textContent = item.name
	listFilterContainer.appendChild(filterItem)

})
// const test = document.querySelector('.gallery__overflow')
