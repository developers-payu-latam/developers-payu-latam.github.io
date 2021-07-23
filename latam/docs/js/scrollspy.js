window.addEventListener("load", (event) => {
    createObserver();
}, false);

function createObserver() {
    let observer;

    let options = {
        root: null,
        rootMargin: '0px 5px -90%'
    };

    observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            if (entry.intersectionRatio > 0) {
                document.querySelector(`nav li a[href="#${id}"]`).classList.add('activeToc');
            } else {
                document.querySelector(`nav li a[href="#${id}"]`).classList.remove('activeToc');
            }
        });
        
    },options);
        document.querySelectorAll('h2[id], h3[id]').forEach((section) => {
            observer.observe(section);
        });
}
