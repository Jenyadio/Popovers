const btn = document.querySelector('.btn');
const popover = document.querySelector('.popover');

if (popover.classList.contains('hidden')) {
  popover.classList.remove('hidden');
} else {
  popover.classList.add('hidden');
}

btn.addEventListener('click', (event) => {
  event.preventDefault();
  popover.classList.toggle('hidden');
});
