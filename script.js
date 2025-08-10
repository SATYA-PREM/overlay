function toggleFav(btn) {
  btn.classList.toggle('fav');
  if (btn.classList.contains('fav')) {
    btn.innerHTML = '&#9829;'; 
  } else {
    btn.innerHTML = '&#9825;';
  }
}
function toggleFav(btn) {
  btn.classList.toggle('fav');
  btn.innerHTML = btn.classList.contains('fav') ? '&#9829;' : '&#9825;';
}

function swapMainImage(clickedImg) {
  const productCard = clickedImg.closest('.product-card');
  
  const mainImg = productCard.querySelector('.product-img');
  
  const currentMainSrc = mainImg.src;
  
  const clickedSrc = clickedImg.src;
  
  mainImg.src = clickedSrc;
  clickedImg.src = currentMainSrc;
  
  mainImg.style.transform = 'scale(0.95)';
  setTimeout(() => {
    mainImg.style.transform = 'scale(1)';
  }, 150);
}
