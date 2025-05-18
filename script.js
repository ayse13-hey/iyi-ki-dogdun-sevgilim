
let currentPage = 0;
const pages = document.querySelectorAll('.page');

function showPage(n) {
    pages.forEach(p => p.style.display = 'none');
    pages[n].style.display = 'flex';
}
showPage(currentPage);

document.body.addEventListener('click', () => {
    if (currentPage < pages.length - 1) {
        currentPage++;
        showPage(currentPage);
    }
});

function showMessage() {
    document.getElementById('message').style.display = 'block';
}
