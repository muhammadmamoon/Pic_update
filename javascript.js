const callinput = document.querySelectorAll(".controls input");

function handleBar() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

callinput.forEach(input => input.addEventListener("change", handleBar));
callinput.forEach(input => input.addEventListener("mousemove", handleBar));