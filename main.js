const letters = document.querySelectorAll('.logo');
const upper = document.querySelectorAll('.tri');

let tl = anime.timeline({
    easing: 'easeOutExpo',
    loop: true
});

tl
.add({
    targets: '.tri1',
    translateX: -3,
    rotate: '-83deg'
})
.add({
    targets: '.tri2',
    rotate: '8deg'
})
.add({
    targets: letters,
    translateY: [
        {value: -40, duration: 80},
        {value: 0}
    ],
    scale: [
        {value:3, duration: 60},
        {value:1}
    ],
    delay: (el, i, l) => {
        return i * 100;
    }
})
.add({
    targets: upper,
    rotate: [{
        value: '2turn',
        duration: 2000
    }],
    delay: (el, i, l) => {
        return i * 300;
    }
})
