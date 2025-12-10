// Menu rétractable + accessibilité + scroll lock (placeholder)
document.addEventListener('DOMContentLoaded',()=>{
  const btn=document.querySelector('.menu-toggle');
  if(btn){btn.addEventListener('click',()=>{document.documentElement.classList.toggle('menu-open')})}
});