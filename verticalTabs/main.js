const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


const tabLinks = $$('.tab-link')

for (let i = 0; i < tabLinks.length; i++) {
    tabLinks[i].addEventListener('click', function (e) {
        const currentTab = $$(".active")
        currentTab[0].className = currentTab[0].className.replace("active", "")
        this.className += " active"

        // switch content
        // dataset dùng để lấy giá trị sau data-
        const filter = e.target.dataset.filter
        $$('.tab-content').forEach(content => {
            if(content.classList.contains(filter)) {
                content.style.display = 'block'
            } else {
                content.style.display = 'none'
            }
        });
    })
}