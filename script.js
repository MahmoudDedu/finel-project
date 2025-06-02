// مثال بسيط لتحديث رقم الصفحات تلقائيًا
document.querySelectorAll('.page-number').forEach((el, index) => {
  el.textContent = `صفحة ${106 + index}`;
});
