// 모바일시 슬라이드 메뉴
const btnTrigger = document.querySelector('.btn_trigger')
const nav = document.querySelector('nav')
const btnClose = document.querySelector('.btn_close')

btnTrigger.onclick = function(){
  nav.style.left = '0'
}

btnClose.addEventListener('click', function(){
  nav.style.left = '-100%'
})

// 너비가 resize시 nav에 남아있는 style을 삭제
window.addEventListener('resize', function(){
  if(window.innerWidth > 767 && nav.hasAttribute('style')){
    nav.removeAttribute('style')
  }

})