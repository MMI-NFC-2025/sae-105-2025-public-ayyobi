// Interaction FAQ (accordéon) (placeholder)
document.addEventListener('click',e=>{
  const q=e.target.closest('.faq__question');
  if(!q) return;
  q.parentElement.classList.toggle('is-open');
});