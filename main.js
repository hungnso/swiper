/// swiper của navbar
let swiper1 = new Swiper('.swiper1', {
	direction: 'vertical', // Cấu hình trượt theo hướng dọc
	loop: false, // Lặp lại các slide
	slidesPerView: 5.5
 });

 /// swiper của item
let swiper2 = new Swiper('.swiper2', {
	loop: true,
    slidesPerView: 4.5,
	spaceBetween: 30,
	// loopedSlides: 1,
	 

});
let swiper3 = new Swiper('.swiper3', {
	loop: true,
    slidesPerView: 4.5,

	// loopedSlides: 1,
	 

});
const buttonShow = document.querySelector('.test-touch')
const detail = document.querySelector('.gallery__overflow')
const desc = document.querySelector('.info-wrapper')
const btn = document.querySelector('.btn-wrapper')
const iconShop = document.querySelector('.shop-icon')
const btnToggle = document.querySelector('.btn-toogle')
const sidebarContainer = document.querySelector('.sidebar')
let screenWidth = window.innerWidth
let screenHeight = window.innerHeight
let toolbarWidth = window.outerWidth - window.innerWidth;
let dynamicHeight = 0
let bottomHeight = 0
let detailHeight = 33%


/// set giá trị
/// Khi reszise

/// Khi load lại trang
document.addEventListener('DOMContentLoaded', function() {
	// Hàm bạn muốn chạy khi trang web được tải vào trong
	myFunction() 
	var userAgent = navigator.userAgent;
console.log(userAgent);
	
  });

  
  function myFunction() {
	switch (true) {
		case (screenHeight >= 500 && screenHeight < 550):
		  dynamicHeight = -87
		  detailHeight = 26
		  bottomHeight = 95
		  document.documentElement.style.setProperty('--dynamic-height', dynamicHeight + 'px');
		  document.documentElement.style.setProperty('--bottom-action', 
		  bottomHeight + 'px' 
		  )
		  document.documentElement.style.setProperty('--detail-height', 
		  detailHeight + '%' 
		  )
		  break;
		case (screenHeight >= 550 && screenHeight < 600):
		  dynamicHeight = -77
		  bottomHeight = 85
		  detailHeight = 26
		  document.documentElement.style.setProperty('--dynamic-height', dynamicHeight + 'px');
		  document.documentElement.style.setProperty('--bottom-action', 
		  bottomHeight + 'px' 
		  )
		  document.documentElement.style.setProperty('--detail-height', 
		  detailHeight + '%' 
		  )
		  break;
		case (screenHeight >= 600 && screenHeight < 650):
		  dynamicHeight = -67
		  bottomHeight = 75
		  detailHeight = 29
		  document.documentElement.style.setProperty('--dynamic-height', dynamicHeight + 'px');
		  document.documentElement.style.setProperty('--bottom-action', 
		  bottomHeight + 'px' 
		  )
		  document.documentElement.style.setProperty('--detail-height', 
		  detailHeight + '%' 
		  )
		  break;
		case (screenHeight >= 650 && screenHeight < 700):
		  dynamicHeight = -57
		  bottomHeight = 65
		  detailHeight = 32
		  document.documentElement.style.setProperty('--dynamic-height', dynamicHeight + 'px');
		  document.documentElement.style.setProperty('--bottom-action', 
		  bottomHeight + 'px' 
		  )
		  document.documentElement.style.setProperty('--detail-height', 
		  detailHeight + '%' 
		  )
		  break;
		case (screenHeight >= 700 && screenHeight < 750):
		  dynamicHeight = -77
		  bottomHeight = 55
		  detailHeight = 35
		  document.documentElement.style.setProperty('--dynamic-height', dynamicHeight + 'px');
		  document.documentElement.style.setProperty('--bottom-action', 
		  bottomHeight + 'px' 
		  )
		  document.documentElement.style.setProperty('--detail-height', 
		  detailHeight + '%' 
		  )
		  break;
		case (screenHeight >= 750 && screenHeight < 800):
		  dynamicHeight = -37
		  bottomHeight = 45
		  detailHeight = 38
		  document.documentElement.style.setProperty('--dynamic-height', dynamicHeight + 'px');
		  document.documentElement.style.setProperty('--bottom-action', 
		  bottomHeight + 'px' 
		  )
		  document.documentElement.style.setProperty('--detail-height', 
		  detailHeight + '%' 
		  )
		  break;
		case (screenHeight >= 800 && screenHeight < 850):
		  dynamicHeight = -27
		  bottomHeight = 35
		  detailHeight = 41
		  document.documentElement.style.setProperty('--dynamic-height', dynamicHeight + 'px');
		  document.documentElement.style.setProperty('--bottom-action', 
		  bottomHeight + 'px' 
		  )
		  document.documentElement.style.setProperty('--detail-height', 
		  detailHeight + '%' 
		  )
		  break;
		case (screenHeight >= 850 && screenHeight < 900):
		  dynamicHeight = -27
		  bottomHeight = 25
		  detailHeight = 44
		  document.documentElement.style.setProperty('--dynamic-height', dynamicHeight + 'px');
		  document.documentElement.style.setProperty('--bottom-action', 
		  bottomHeight + 'px' 
		  )
		  document.documentElement.style.setProperty('--detail-height', 
		  detailHeight + '%' 
		  )
		 
		  break;
		case (screenHeight >= 900 && screenHeight < 950):
		  
		  dynamicHeight = -27
		  bottomHeight = 15
		  detailHeight = 47
		  document.documentElement.style.setProperty('--dynamic-height', dynamicHeight + 'px');
		  document.documentElement.style.setProperty('--bottom-action', 
		  bottomHeight + 'px' 
		  )
		  document.documentElement.style.setProperty('--detail-height', 
		  detailHeight + '%' 
		  )
		
		  break;
		case (screenHeight >= 950 && screenHeight < 1000):
		  
		  dynamicHeight = -30
		  bottomHeight = 5
		  detailHeight = 51
		  document.documentElement.style.setProperty('--dynamic-height', dynamicHeight + 'px');
		  document.documentElement.style.setProperty('--bottom-action', 
		  bottomHeight + 'px' 
		  )
		  document.documentElement.style.setProperty('--detail-height', 
		  detailHeight + '%' 
		  )
		  break;
		default:
		  console.log("Giá trị không khớp với bất kỳ trường hợp nào");
		  
		  break;
	  }
	
  }

// Sự kiện load lại trang 
const reloadButton = document.querySelector('.header-right');
reloadButton.addEventListener('click', function() {
	location.reload(); // Reloads the current page
  });

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
		detail.style.transform = 'translateY(-55%)'
		desc.style.opacity = '1'
			btn.style.opacity = '1'
		iconShop.style.opacity = '0'
		detail.style.animation = ""
		// detail.style.transition = 'transform 0.3s ease-in-out'
		detail.style.animation = "slide-up 0.5s ease-in-out "

		
	
	  } else {
		detail.style.transform = `translateY(${dynamicHeight}px)`
		// detail.style.transition = 'transform 0.5s ease-in-out'
		detail.style.transition = ''
		detail.style.animation = "slide-down 0.5s ease-in-out "
		setTimeout(() => {
			desc.style.opacity = '0'
			btn.style.opacity = '0'
		

		}, 400);
		iconShop.style.opacity = '1'
		

		
	  }
	}
  
	initialX = null;
	initialY = null;
  });
btnToggle.addEventListener('click', function(event){
	sidebarContainer.classList.remove('hidden')
	sidebarContainer.classList.add('open')
	  
})
// document.addEventListener('click', function(event) {
// 	// Kiểm tra xem sự kiện click xảy ra trong hay ngoài thẻ sidebarContainer
// 	if (!sidebarContainer.contains(event.target) && event.target !== btnToggle) {
// 	  // Sự kiện click xảy ra ngoài thẻ sidebarContainer
// 	  sidebarContainer.classList.remove('open');
// 	  sidebarContainer.classList.add('hidden');
	 
	  
// 	  // Thực hiện các hành động khác khi click ra ngoài thẻ sidebarContainer
// 	}
//   });
  sidebarContainer.addEventListener('touchstart', function(event) {
	initialX = event.touches[0].clientX;
	initialY = event.touches[0].clientY;
  });
  sidebarContainer.addEventListener('touchmove', function(event) {
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
		sidebarContainer.classList.remove('open');
		sidebarContainer.classList.add('hidden');
	  } else {
		// Vuốt sang phải
	  }
	} else {
		let setBottom = '55%'
	  if (diffY > 0) {	
	
	  } else {
		
	  }
	}
  
	initialX = null;
	initialY = null;
  });

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
	{
	name: "Margin",
	active: false
	},
	{
	name: "Hover",
	active: false
	},
	{
	name: "Transition",
	active: false
	},
	{
	name: "Opacity",
	active: false
	},
	{
	name: "Loop",
	active: false
	},
	{
	name: "Scroll",
	active: false
	},
];
const listFilterContainer =  document.querySelector('.list-filter')

listFilter.forEach(item => {
	const filterItem = document.createElement('div')
	filterItem.classList.add('filter-item', 'swiper-slide', 'text-center')
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
//// Danh sách item
const listSlider = [
	{
		content: "https://images.unsplash.com/photo-1669671943625-e20799ee5f42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzI0MjY3ODQ&ixlib=rb-4.0.3&q=80&w=400",
		active: true
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

const listSliderContainer =  document.querySelector('.item-test')
let activeIndex = -1; // Index của phần tử đang được chọn (không có phần tử nào được chọn ban đầu)

listSlider.forEach((item, index) => {
  const slide = document.createElement('div');
  slide.classList.add('swiper-slide');

  const galleryThumbnailWrapper = document.createElement('div');
  galleryThumbnailWrapper.classList.add(
    'gallery__thumbnail-wrapper',
    'd-flex',
    'justify-content-center',
    'align-items-center'
  );
  if (index === activeIndex) {
    galleryThumbnailWrapper.classList.add('active-slide-item');
  }

  const galleryThumbnail = document.createElement('div');
  galleryThumbnail.classList.add('gallery__thumbnail');

  const thumbnailImg = document.createElement('img');
  thumbnailImg.src = item.content;
  thumbnailImg.alt = 'image gallery';
  thumbnailImg.classList.add('gallery__thumbnail-img');

  galleryThumbnail.appendChild(thumbnailImg);
  galleryThumbnailWrapper.appendChild(galleryThumbnail);
  slide.appendChild(galleryThumbnailWrapper);

  // Gán sự kiện click cho mỗi slide
  slide.addEventListener('click', () => {
    // Xóa class active-slide-item của phần tử trước đó
    const prevActiveSlide = listSliderContainer.querySelector('.active-slide-item');
    if (prevActiveSlide) {
      prevActiveSlide.classList.remove('active-slide-item');
    }

    // Thêm class active-slide-item cho phần tử hiện tại
    galleryThumbnailWrapper.classList.add('active-slide-item');

    // Cập nhật activeIndex thành index của phần tử hiện tại
    activeIndex = index;
  });

  listSliderContainer.appendChild(slide);
});
// const listSliderContainer2 =  document.querySelector('.item-filter')
// let activeIndex2 = -1; 

// listSlider.forEach((item, index) => {
//   const slide = document.createElement('div');
//   slide.classList.add('swiper-slide');

//   const galleryThumbnailWrapper = document.createElement('div');
//   galleryThumbnailWrapper.classList.add(
//     'gallery__thumbnail-wrapper',
//     'd-flex',
//     'justify-content-center',
//     'align-items-center'
//   );
//   if (index === activeIndex2) {
//     galleryThumbnailWrapper.classList.add('active-slide-item');
//   }

//   const galleryThumbnail = document.createElement('div');
//   galleryThumbnail.classList.add('gallery__thumbnail');

//   const thumbnailImg = document.createElement('img');
//   thumbnailImg.src = item.content;
//   thumbnailImg.alt = 'image gallery';
//   thumbnailImg.classList.add('gallery__thumbnail-img');

//   galleryThumbnail.appendChild(thumbnailImg);
//   galleryThumbnailWrapper.appendChild(galleryThumbnail);
//   slide.appendChild(galleryThumbnailWrapper);

//   // Gán sự kiện click cho mỗi slide
//   slide.addEventListener('click', () => {
//     // Xóa class active-slide-item của phần tử trước đó
//     const prevActiveSlide = listSliderContainer2.querySelector('.active-slide-item');
//     if (prevActiveSlide) {
//       prevActiveSlide.classList.remove('active-slide-item');
//     }

//     // Thêm class active-slide-item cho phần tử hiện tại
//     galleryThumbnailWrapper.classList.add('active-slide-item');

//     // Cập nhật activeIndex thành index của phần tử hiện tại
//     activeIndex2 = index;
//   });

//   listSliderContainer2.appendChild(slide);
// });

/// Danh sách item nav
const listNav = [
  	{
		url: "./assets/image/kinh_1.png",
		active: false
	},
  	{
		url: "./assets/image/kinh2.png",
		active: false
	},
  	{
		url: "./assets/image/kinh3.png",
		active: false
	},
  	{
		url: "./assets/image/kinh4.png",
		active: false
	},
  	{
		url: "./assets/image/kinh5.png",
		active: false
	},
  	{
		url: "./assets/image/kinh4.png",
		active: false
	},
  	{
		url: "./assets/image/kinh3.png",
		active: false
	},
  	{
		url: "./assets/image/kinh2.png",
		active: false
	},
  	{
		url: "./assets/image/kinh_1.png",
		active: false
	},
]

const listNavBarContainer = document.querySelector('.sidebar-item')
let activeNavItem = -1
listNav.forEach((item, index) =>{
	const nav = document.createElement('div')
	nav.classList.add('swiper-slide')
	nav.classList.add('nav-item')
	const navContent = document.createElement('div')
	navContent.classList.add('nav-detail')
	const contentImg = document.createElement('div')
	contentImg.classList.add('detail-image')
	const navImg = document.createElement('img')
	navImg.src = item.url
	navImg.alt = "Hình ảnh "
	
	contentImg.appendChild(navImg)
	navContent.appendChild(contentImg)
	nav.appendChild(navContent)

	nav.addEventListener('click', () =>{
		const prevActiveNav = listNavBarContainer.querySelector('.active-nav-item')
		if(prevActiveNav){
			prevActiveNav.classList.remove('active-nav-item');
		}
		navContent.classList.add('active-nav-item')
		console.log('dang chon item so', index + 1)
	})
	

	listNavBarContainer.appendChild(nav)
})




/// Danh sách màu
const listColor = [
	{
		color: "bg-dark",
		active: true
	},
	{
		color: "bg-success",
		active: false
	},
	{
		color: "bg-danger",
		active: false
	},
	{
		color: "bg-secondary",
		active: false
	},
]
const listColorContainer = document.querySelector('.list-color')
listColor.forEach(item => {
	const colorItem = document.createElement('div')
	colorItem.classList.add(`${item.color}`, 'color-item')
	if(item.active){
		colorItem.classList.add('active-color')
	}
	listColorContainer.appendChild(colorItem)
	colorItem.addEventListener('click', () => {
		// Hủy bỏ lớp active-filter của các phần tử khác
		listColor.forEach(otherItem => {
		  if (otherItem !== item) {
			otherItem.active = false;
			const otherColerItem = listColorContainer.querySelector(`:scope >  .color-item:nth-child(${listColor.indexOf(otherItem) + 1})`);
			otherColerItem.classList.remove('active-color');
		  }
		});
	
		// Kích hoạt mục được nhấp chuột và cập nhật trạng thái active
		item.active = true;
		colorItem.classList.add('active-color');
	
		// Xử lý sự kiện click tại đây
	  });
})
// const test = document.querySelector('.gallery__overflow')
