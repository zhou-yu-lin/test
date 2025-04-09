//主页内容功能实现
function changeContent(page) {
    // 首先，隐藏所有内容 div
    const contents = document.querySelectorAll('#content > div');
    contents.forEach(content => {
        content.classList.add('hidden');
    });

    // 根据选择的页面显示对应的内容
    const selectedContent = document.getElementById(page + 'Content');
    if (selectedContent) {
        selectedContent.classList.remove('hidden');
    }
}


//时间实现
async function getCurrentDateTime(){
	return new Promise((resolve) =>{
		const now = new Date();
		const year = now.getFullYear();
		const month = String(now.getMonth() + 1).padStart(2, '0');
		const date = String(now.getDate()).padStart(2, '0');
		const hours = String(now.getHours()).padStart(2, '0');
		const minutes = String(now.getMinutes()).padStart(2, '0');
		const seconds = String(now.getSeconds()).padStart(2, '0');
		resolve({
			date: `${year}年${month}月${date}号`,
			time: `${hours}:${minutes}:${seconds}`
		});
	});
}
async function updateDateTime() {
    const timeDisplay = document.getElementById('timeDisplay');
    const dateDisplay = document.getElementById('dateDisplay');
	while (true){
		const { date, time } = await getCurrentDateTime();
		dateDisplay.textContent = date;
		timeDisplay.textContent = time;
		await new Promise(resolve => setTimeout(resolve, 1000)); // 每秒更新
	}
}
updateDateTime();


//联系方式实现
const qrModal = document.getElementById('qrModal');
const closeButton = document.getElementById('closeButton');
const qrCodeDiv = document.getElementById('qrCode');

let isModalOpen = false;
// 显示二维码弹出框
function openQQ() {
    if (!isModalOpen) {
        qrCodeDiv.style.backgroundImage = "url('./img/qqNumber.png')"; // 替换为真实的QQ二维码图片
        qrModal.style.display = 'flex'; // 显示弹出框
        isModalOpen = true;
    }
}
function openWeChat() {
    if (!isModalOpen) {
        qrCodeDiv.style.backgroundImage = "url('./img/wxNumber.png')"; // 替换为真实的微信二维码图片
        qrModal.style.display = 'flex'; // 显示弹出框
        isModalOpen = true;
    }
}
// 关闭弹出框
closeButton.addEventListener('click', () => {
    qrModal.style.display = 'none';
    isModalOpen = false;
});
// 点击外部时关闭弹出框
qrModal.addEventListener('click', (e) => {
    if (e.target === qrModal) {
        qrModal.style.display = 'none';
        isModalOpen = false;
    }
});


//我的相册功能实现
const images = document.querySelectorAll('.photoimg img');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.getElementById('closeModal');
// 为每张图片添加点击事件
images.forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = 'flex'; // 显示模态框
        modalImage.src = img.src; // 设置模态框中的图片
    });
});
// 关闭模态框
closeModal.addEventListener('click', () => {
    modal.style.display = 'none'; // 隐藏模态框
});
// 点击模态框外部时关闭
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none'; // 隐藏模态框
    }
});


//轮播图功能实现
let currentIndex = 0;
const carouselContainer = document.querySelector('.carousel-container');
const items = document.querySelectorAll('.carousel-item');
const indicators = document.querySelectorAll('.indicator');
const itemHeight = items[0].clientHeight;
// 更新指示器状态
function updateIndicators() {
    indicators.forEach((indicator, index) => {
        if (index === currentIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}
// 移动轮播图
function moveCarousel(direction) {
    currentIndex += direction;
    // 边界检查
    if (currentIndex < 0) {
        currentIndex = items.length - 1;
    } else if (currentIndex >= items.length) {
        currentIndex = 0;
    }
    // 更新轮播图位置
    carouselContainer.style.top = `-${currentIndex * itemHeight}px`;
    // 更新指示器状态
    updateIndicators();
}
setInterval(() => {
    moveCarousel(1);
}, 5000); 
updateIndicators();