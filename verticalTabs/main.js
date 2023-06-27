const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


const tabLinks = document.getElementsByClassName('tab-link')

for (let i = 0; i < tabLinks.length; i++) {
    tabLinks[i].addEventListener('click', function (e) {
        const currentTab = document.getElementsByClassName('active')
        currentTab[0].className = currentTab[0].className.replace('active', '')
        this.className += "active"

        // switch content
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