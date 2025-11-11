// Scroll Top Button
let scrollTopBtn = document.getElementById("scrollTopBtn");
window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};
scrollTopBtn.onclick = function () {
    window.scrollTo({top: 0, behavior: "smooth"});
};

// Color Picker
let colorPicker = document.getElementById("colorPicker");
colorPicker.addEventListener("input", function () {
    let selectedColor = this.value;
    document.body.style.color = selectedColor;
    document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, span, div, nav, a, button").forEach(element => {
        element.style.color = selectedColor;
    });
});
dragElement(colorPicker);

// Drag Function
function dragElement(el) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    el.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        el.style.top = (el.offsetTop - pos2) + "px";
        el.style.left = (el.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

// Add to Cart Counter
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        var cartCountElement = document.querySelector('.cart-count');
        var currentCount = parseInt(cartCountElement.textContent);

        if (currentCount === 0) {
            cartCountElement.style.display = 'inline-block'; 
        }

        cartCountElement.textContent = currentCount + 1;

        // Animation effect
        this.style.transform = "scale(1.2)";
        setTimeout(() => {
            this.style.transform = "scale(1)";
        }, 200);
    });
});
