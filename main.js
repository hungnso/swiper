/*=============== SWIPER JS GALLERY ===============*/
const swiperFilter = new Swiper(".swiper-list-filter", {
	loop: true,
	slidesPerView: 4.5,
	
});

let swiperThumbs = new Swiper(".swiper-list", {
	loop: true,
    slidesPerView: 4.5,
	spaceBetween: 30
	// loopedSlides: 1,
	 

});
const buttonShow = document.querySelector('.test-touch')
const detail = document.querySelector('.gallery__overflow')
const desc = document.querySelector('.info-wrapper')
const btn = document.querySelector('.btn-wrapper')
const iconShop = document.querySelector('.shop-icon')
let screenWidth = window.innerWidth
let screenHeight = window.innerHeight
let toolbarWidth = window.outerWidth - window.innerWidth;
console.log(toolbarWidth)
let dynamicHeight = 0
let bottomHeight = 0
let detailHeight = 33%


/// set giá trị
console.log(window.pageYOffset)
/// Khi reszise
window.addEventListener('resize', function() {
	myFunction()
  });

/// Khi load lại trang
document.addEventListener('DOMContentLoaded', function() {
	// Hàm bạn muốn chạy khi trang web được tải vào trong
	
	// if (window.innerHeight === window.outerHeight) {
	// 	console.log("Thanh công cụ đang ở phía trên của trang");
	// 	const test = document.querySelector('.test')
	// 	test.innerHTML = "Thanh công cụ đang ở phía trên của trang"
	// 	const isTop = true
	// 	myFunction(isTop);
	//   }
	  
	//   // Kiểm tra khi thanh công cụ đang ở phía dưới của trang
	//   if (window.innerHeight < window.outerHeight) {
	// 	const isTop = false
	// 	const test = document.querySelector('.test')
	// 	test.innerHTML = "Thanh công cụ đang ở phía dưới của trang"
	// 	myFunction(isTop);
	// 	console.log("Thanh công cụ đang ở phía dưới của trang");
	//   }
  });

  
  function myFunction() {
	switch (true) {
		case (screenHeight >= 500 && screenHeight < 550):
		  dynamicHeight = -120
		  bottomHeight = 125
		  document.documentElement.style.setProperty('--dynamic-height', dynamicHeight + 'px');
		  document.documentElement.style.setProperty('--bottom-action', 
		  bottomHeight + 'px' 
		  )
		  break;
		case (screenHeight >= 550 && screenHeight < 600):
		  dynamicHeight = -110
		  bottomHeight = 115
		  document.documentElement.style.setProperty('--dynamic-height', dynamicHeight + 'px');
		  document.documentElement.style.setProperty('--bottom-action', 
		  bottomHeight + 'px' 
		  )
		  break;
		case (screenHeight >= 600 && screenHeight < 650):
		  dynamicHeight = -100
		  bottomHeight = 105
		  document.documentElement.style.setProperty('--dynamic-height', dynamicHeight + 'px');
		  document.documentElement.style.setProperty('--bottom-action', 
		  bottomHeight + 'px' 
		  )
		  break;
		case (screenHeight >= 650 && screenHeight < 700):
		  dynamicHeight = -90
		  bottomHeight = 95
		  document.documentElement.style.setProperty('--dynamic-height', dynamicHeight + 'px');
		  document.documentElement.style.setProperty('--bottom-action', 
		  bottomHeight + 'px' 
		  )
		  break;
		case (screenHeight >= 700 && screenHeight < 750):
		  dynamicHeight = -80
		  bottomHeight = 85
		  document.documentElement.style.setProperty('--dynamic-height', dynamicHeight + 'px');
		  document.documentElement.style.setProperty('--bottom-action', 
		  bottomHeight + 'px' 
		  )
		  console.log(700)
		  break;
		case (screenHeight >= 750 && screenHeight < 800):
		  dynamicHeight = -70
		  bottomHeight = 75
		  detailHeight = 36
		  document.documentElement.style.setProperty('--dynamic-height', dynamicHeight + 'px');
		  document.documentElement.style.setProperty('--bottom-action', 
		  bottomHeight + 'px' 
		  )
		  document.documentElement.style.setProperty('--detail-height', 
		  detailHeight + '%' 
		  )
		  break;
		case (screenHeight >= 800 && screenHeight < 850):
		  dynamicHeight = -60
		  bottomHeight = 65
		  detailHeight = 39
		  document.documentElement.style.setProperty('--dynamic-height', dynamicHeight + 'px');
		  document.documentElement.style.setProperty('--bottom-action', 
		  bottomHeight + 'px' 
		  )
		  document.documentElement.style.setProperty('--detail-height', 
		  detailHeight + '%' 
		  )
		  break;
		case (screenHeight >= 850 && screenHeight < 900):
		  dynamicHeight = -50
		  bottomHeight = 55
		  detailHeight = 42
		  document.documentElement.style.setProperty('--dynamic-height', dynamicHeight + 'px');
		  document.documentElement.style.setProperty('--bottom-action', 
		  bottomHeight + 'px' 
		  )
		  document.documentElement.style.setProperty('--detail-height', 
		  detailHeight + '%' 
		  )
		 
		  break;
		case (screenHeight >= 900 && screenHeight < 950):
		  
		  dynamicHeight = -40
		  bottomHeight = 45
		  detailHeight = 45
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
		  bottomHeight = 35
		  detailHeight = 48
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
	// switch (true && !isTop) {
	// 	case (screenHeight >= 500 && screenHeight < 550):
	// 	  dynamicHeight = -120
	// 	  bottomHeight = 125
	// 	  document.documentElement.style.setProperty('--dynamic-height', dynamicHeight + 'px');
	// 	  document.documentElement.style.setProperty('--bottom-action', 
	// 	  bottomHeight + 'px' 
	// 	  )
	// 	  break;
	// 	case (screenHeight >= 550 && screenHeight < 600):
	// 	  dynamicHeight = -110
	// 	  bottomHeight = 115
	// 	  document.documentElement.style.setProperty('--dynamic-height', dynamicHeight + 'px');
	// 	  document.documentElement.style.setProperty('--bottom-action', 
	// 	  bottomHeight + 'px' 
	// 	  )
	// 	  break;
	// 	case (screenHeight >= 600 && screenHeight < 650):
	// 	  dynamicHeight = -100
	// 	  bottomHeight = 105
	// 	  document.documentElement.style.setProperty('--dynamic-height', dynamicHeight + 'px');
	// 	  document.documentElement.style.setProperty('--bottom-action', 
	// 	  bottomHeight + 'px' 
	// 	  )
	// 	  break;
	// 	case (screenHeight >= 650 && screenHeight < 700):
	// 	  dynamicHeight = -90
	// 	  bottomHeight = 95
	// 	  document.documentElement.style.setProperty('--dynamic-height', dynamicHeight + 'px');
	// 	  document.documentElement.style.setProperty('--bottom-action', 
	// 	  bottomHeight + 'px' 
	// 	  )
	// 	  break;
	// 	case (screenHeight >= 700 && screenHeight < 750):
	// 	  dynamicHeight = -80
	// 	  bottomHeight = 85
	// 	  document.documentElement.style.setProperty('--dynamic-height', dynamicHeight + 'px');
	// 	  document.documentElement.style.setProperty('--bottom-action', 
	// 	  bottomHeight + 'px' 
	// 	  )
	// 	  console.log(700)
	// 	  break;
	// 	case (screenHeight >= 750 && screenHeight < 800):
	// 	  dynamicHeight = -70
	// 	  bottomHeight = 75
	// 	  detailHeight = 36
	// 	  document.documentElement.style.setProperty('--dynamic-height', dynamicHeight + 'px');
	// 	  document.documentElement.style.setProperty('--bottom-action', 
	// 	  bottomHeight + 'px' 
	// 	  )
	// 	  document.documentElement.style.setProperty('--detail-height', 
	// 	  detailHeight + '%' 
	// 	  )
	// 	  break;
	// 	case (screenHeight >= 800 && screenHeight < 850):
	// 	  dynamicHeight = -60
	// 	  bottomHeight = 65
	// 	  detailHeight = 39
	// 	  document.documentElement.style.setProperty('--dynamic-height', dynamicHeight + 'px');
	// 	  document.documentElement.style.setProperty('--bottom-action', 
	// 	  bottomHeight + 'px' 
	// 	  )
	// 	  document.documentElement.style.setProperty('--detail-height', 
	// 	  detailHeight + '%' 
	// 	  )
	// 	  break;
	// 	case (screenHeight >= 850 && screenHeight < 900):
	// 	  dynamicHeight = -50
	// 	  bottomHeight = 55
	// 	  detailHeight = 42
	// 	  document.documentElement.style.setProperty('--dynamic-height', dynamicHeight + 'px');
	// 	  document.documentElement.style.setProperty('--bottom-action', 
	// 	  bottomHeight + 'px' 
	// 	  )
	// 	  document.documentElement.style.setProperty('--detail-height', 
	// 	  detailHeight + '%' 
	// 	  )
		 
	// 	  break;
	// 	case (screenHeight >= 900 && screenHeight < 950):
		  
	// 	  dynamicHeight = -40
	// 	  bottomHeight = 45
	// 	  detailHeight = 45
	// 	  document.documentElement.style.setProperty('--dynamic-height', dynamicHeight + 'px');
	// 	  document.documentElement.style.setProperty('--bottom-action', 
	// 	  bottomHeight + 'px' 
	// 	  )
	// 	  document.documentElement.style.setProperty('--detail-height', 
	// 	  detailHeight + '%' 
	// 	  )
		
	// 	  break;
	// 	case (screenHeight >= 950 && screenHeight < 1000):
		  
	// 	  dynamicHeight = -30
	// 	  bottomHeight = 35
	// 	  detailHeight = 48
	// 	  document.documentElement.style.setProperty('--dynamic-height', dynamicHeight + 'px');
	// 	  document.documentElement.style.setProperty('--bottom-action', 
	// 	  bottomHeight + 'px' 
	// 	  )
	// 	  document.documentElement.style.setProperty('--detail-height', 
	// 	  detailHeight + '%' 
	// 	  )
	// 	  break;
	// 	default:
	// 	  console.log("Giá trị không khớp với bất kỳ trường hợp nào");
		  
	// 	  break;
	//   }
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
	filterItem.classList.add('filter-item', 'col-3',  'text-center', 'mr-1')
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

const listSliderContainer =  document.querySelector('.swiper-wrapper')
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
