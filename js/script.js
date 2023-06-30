const links = document.querySelectorAll('li a');

console.log(links)

for(const link of links) {
    link.addEventListener('click', function() {
        console.log('sample');
        const currentActive = document.getElementsByClassName('active-link');
        currentActive[0].className = currentActive[0].className.replace("active-link", " ");
        console.log(this);
        this.className += "active-link";
    }); 
}
