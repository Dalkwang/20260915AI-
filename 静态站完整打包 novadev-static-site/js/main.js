// main.js - 前端增强（表单提示/淡入）
document.querySelectorAll('.card').forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(8px)';
  el.style.transition = 'opacity .4s ease, transform .4s ease';
  setTimeout(() => { el.style.opacity = '1'; el.style.transform = 'none'; }, 80 * i);
});
