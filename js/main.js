(() => {
  const body = document.body;
  const page = body.dataset.page;
  document.querySelectorAll('[data-nav]').forEach(a => { if (a.dataset.nav === page) a.classList.add('active'); });
  const toggle = document.querySelector('.menu-toggle');
  if (toggle) toggle.addEventListener('click', () => { const open = body.classList.toggle('menu-open'); toggle.setAttribute('aria-expanded', open ? 'true' : 'false'); });
  document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => body.classList.remove('menu-open')));
  const reveals = [...document.querySelectorAll('.reveal')];
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); io.unobserve(entry.target); } }); }, {threshold:.12, rootMargin:'0px 0px -30px 0px'});
    reveals.forEach(el => io.observe(el));
  } else reveals.forEach(el => el.classList.add('visible'));
  const tabs = document.querySelectorAll('[data-order-tab]');
  const select = document.querySelector('#projectType');
  tabs.forEach(tab => tab.addEventListener('click', () => { tabs.forEach(t => t.classList.remove('active')); tab.classList.add('active'); if (select) select.value = tab.dataset.orderTab; }));
  const orderForm = document.querySelector('#fuelerzOrderForm');
  if (orderForm) orderForm.addEventListener('submit', e => { e.preventDefault(); const data = new FormData(orderForm); const msg = `Hi Fuelerz, I want to start a project.%0A%0AName: ${encodeURIComponent(data.get('name')||'')}%0ABrand: ${encodeURIComponent(data.get('brand')||'')}%0AProject: ${encodeURIComponent(data.get('type')||'')}%0ADetails: ${encodeURIComponent(data.get('message')||'')}`; window.open(`https://wa.me/917722011476?text=${msg}`, '_blank', 'noopener'); });
  const feedbackForm = document.querySelector('#feedbackForm');
  if (feedbackForm) feedbackForm.addEventListener('submit', e => { e.preventDefault(); const data = new FormData(feedbackForm); const msg = `Fuelerz feedback.%0A%0AName: ${encodeURIComponent(data.get('name')||'')}%0ABrand: ${encodeURIComponent(data.get('brand')||'')}%0AType: ${encodeURIComponent(data.get('type')||'')}%0AMessage: ${encodeURIComponent(data.get('message')||'')}`; window.open(`https://wa.me/917722011476?text=${msg}`, '_blank', 'noopener'); });
})();
