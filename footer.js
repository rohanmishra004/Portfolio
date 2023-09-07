window.addEventListener('DOMContentLoaded', function () {
    //laod footer content
    fetch('footer.html')
        .then(response => response.text())
        .then(content => {document.querySelector('footer').innerHTML=content
        })
})