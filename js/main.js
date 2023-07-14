const testimonios = document.querySelectorAll('.testimonio-card');

testimonios.forEach(testimonio => {
  const previewText = testimonio.querySelector('.card-text.preview');
  const expandedText = testimonio.querySelector('.card-text.expanded');
  const leerMasBtn = testimonio.querySelector('.btn');

  leerMasBtn.addEventListener('click', () => {
    previewText.classList.toggle('d-none');
    expandedText.classList.toggle('d-none');
    leerMasBtn.textContent = expandedText.classList.contains('d-none') ? 'Leer más' : 'Leer menos';
  });
});