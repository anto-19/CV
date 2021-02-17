navlinks.forEach(links => {
    let returnLinks = links;
    if (links.href === local) {
        returnLinks.classList.toggle('active')
    }
})