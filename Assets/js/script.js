fetch("./header.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("header").innerHTML = data;
    });

fetch("./footer.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("footer").innerHTML = data;
    });

    $(function() {
        // Owl Carousel
        var owl = $(".owl-carousel");
        owl.owlCarousel({
            items: 1,   // Display a single item on mobile
            margin: 10,
            loop: true,
            nav: true,
            responsive: {
                // On larger screens, display more items
                768: {
                    items: 6
                }
            }
        });
    });
    