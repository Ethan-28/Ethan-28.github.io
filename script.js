const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');
menuToggle.onclick = () => {
    navigation.classList.toggle('open');
}

const listItems = document.querySelectorAll('.list-item');
listItems.forEach(item => {
    item.onclick = () => {
        listItems.forEach(item => item.classList.remove('active'));
        item.classList.add('active');
    }
})

document.querySelectorAll("li[data-page]").forEach(item => {
    item.addEventListener("click", () => {
        loadPage(item.dataset.page);
    });
});

function loadPage(page) {
    fetch(page)
        .then(res => res.text())
        .then(html => {
            document.getElementById("content").innerHTML = html;
        })
        .catch(console.error);
}
