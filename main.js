/*=============== SWIPER JS GALLERY ===============*/
const swiperCards = new Swiper(".gallery-cards", {
	loop: true,
	loopedSlides: 5,
	slidesPerView: 3,
	cssMode: true,
	effect: "fade",
	
});

let swiperThumbs = new Swiper(".swiper-list", {
      slidesPerView: 5,
	  loopedSlides: 1,
	  loop: true,

});
const buttonShow = document.querySelector('.test-touch')
const detail = document.querySelector('.gallery__overflow')
const desc = document.querySelector('.info-wrapper')
const btn = document.querySelector('.btn-wrapper')
let screenWidth = window.innerWidth
let screenHeight = window.innerHeight


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

		// Vuốt lên
		detail.style.transform = 'translateY(-50%)'
		desc.style.display = 'block'
		btn.style.display = 'block'
	
	  } else {
		
		detail.style.transform = 'translateY(-5%)'
		desc.style.display = 'none'
		btn.style.display = 'none'
		
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
	filterItem.addEventListener('click', () => {
		// Hủy bỏ lớp active-filter của các phần tử khác
		listFilter.forEach(otherItem => {
		  if (otherItem !== item) {
			otherItem.active = false;
			const otherFilterItem = listFilterContainer.querySelector(`:scope > .filter-item:nth-child(${listFilter.indexOf(otherItem) + 1})`);
			otherFilterItem.classList.remove('active-filter');
		  }
		});
	
		// Kích hoạt mục được nhấp chuột và cập nhật trạng thái active
		item.active = true;
		filterItem.classList.add('active-filter');
	
		// Xử lý sự kiện click tại đây
		console.log('Clicked:', item.name);
	  });

})

const listSlider = [
	{
		content: "https://images.unsplash.com/photo-1669671943625-e20799ee5f42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzI0MjY3ODQ&ixlib=rb-4.0.3&q=80&w=400",
		active: false
	},
	{
		content: "https://images.unsplash.com/photo-1670832215724-cce6d9ee619c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzI0MjY3ODQ&ixlib=rb-4.0.3&q=80&w=400",
		active: false
	},
	{
		content: "https://images.unsplash.com/photo-1670509684960-101c061c9c5c?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzI0MjY4MzU&ixlib=rb-4.0.3&q=80",
		active: false
	},
	{
		content: "https://images.unsplash.com/photo-1670825372656-af0361b7425a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzI0MjY4MzU&ixlib=rb-4.0.3&q=80&w=400",
		active: false
	},
	{
		content: "https://images.unsplash.com/photo-1631551221192-7804e1600435?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
		active: false
	},
	{
		content: "https://images.unsplash.com/photo-1664880650290-e861f5d71c92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
		active: false
	},
	{
		content: "https://images.unsplash.com/photo-1669671943625-e20799ee5f42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzI0MjY3ODQ&ixlib=rb-4.0.3&q=80&w=400",
		active: false
	},
	{
		content: "https://images.unsplash.com/photo-1669671943625-e20799ee5f42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzI0MjY3ODQ&ixlib=rb-4.0.3&q=80&w=400",
		active: false
	},
	{
		content: "https://images.unsplash.com/photo-1669671943625-e20799ee5f42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzI0MjY3ODQ&ixlib=rb-4.0.3&q=80&w=400",
		active: false
	},
	{
		content: "https://images.unsplash.com/photo-1669671943625-e20799ee5f42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzI0MjY3ODQ&ixlib=rb-4.0.3&q=80&w=400",
		active: false
	},
]

const listSliderContainer =  document.querySelector('.swiper-wrapper')
listSlider.forEach(item =>
	listSliderContainer.innerHTML +=
	`
	<div class="swiper-slide">
	<div class="gallery__thumbnail">
	  <img
		src="${item.content}"
		alt="image gallery"
		alt="image thumbnail"
		class="gallery__thumbnail-img"
	  />
	</div>
  </div>
	`
	)

// const test = document.querySelector('.gallery__overflow')
