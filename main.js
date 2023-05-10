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
const buttonShow = document.querySelector('.show-wrapper')
const detail = document.querySelector('.gallery__overflow')
let screenWidth = window.innerWidth
let screenHeight = window.innerHeight
console.log(screenWidth)
function handleShowDetail(event) {
	// detail.style.bottom = '55%'
	// if(screenWidth <= 390){
	// 	detail.style.bottom = '64%'
	// } 
	
	// Các hành động khác bạn muốn thực hiện khi button được click
  }


// buttonShow.addEventListener('touchmove', handleShowDetail(value))
buttonShow.addEventListener('touchstart', function(event) {
	initialX = event.touches[0].clientX;
	initialY = event.touches[0].clientY;
  });
buttonShow.addEventListener('touchmove', function(event) {
	if (!initialX || !initialY) {
	  return;
	}
  
	var currentX = event.touches[0].clientX;
	var currentY = event.touches[0].clientY;
	var diffX = initialX - currentX;
	var diffY = initialY - currentY;
  
	// Xác định hướng vuốt (ngang hay dọc)
	if (Math.abs(diffX) > Math.abs(diffY)) {
	  if (diffX > 0) {
		// Vuốt sang trái
	  } else {
		// Vuốt sang phải
	  }
	} else {
		let setBottom = '55%'
	  if (diffY > 0) {
		console.log(screenHeight)
		switch (!!screenHeight) {
			case screenHeight <= 600:
				setBottom = '69%'
				break;
			case screenHeight <= 650:
				setBottom = '66.5%'
				break;
			case screenHeight <= 700:
				setBottom = '64%'
				break;
			case screenHeight <= 750:
				setBottom = '61%'
				break;
			case screenHeight <= 800:
				setBottom = '58.5%'
				break;
			
		
			default:
				break;
		}
		// Vuốt lên
		detail.style.bottom = setBottom
	// 	if(screenWidth <= 390){
	// 	detail.style.bottom = setBottom
	// } 
	  } else {
		// Vuốt xuống
		detail.style.bottom = '0%'

		if(screenHeight <= 700){
			detail.style.bottom = '3%'

		}
	  }
	}
  
	initialX = null;
	initialY = null;
  });
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
