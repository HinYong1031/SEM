// Load and insert the header and footer into the master.html
fetch('master.html')
.then(response => response.text())
.then(html => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    
    const header = doc.querySelector('header');
    const footer = doc.querySelector('footer');

    document.querySelector('header').innerHTML = header.innerHTML;
    document.querySelector('footer').innerHTML = footer.innerHTML;
});