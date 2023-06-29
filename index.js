const yesbtn = document.querySelector('#yesbtn');

yesbtn.addEventListener('click',function () {
    alert('si pussiste si,quiero decirte feliz 6 meses me hubiera encantado pasarlos junto,te amo mucho y no sabes cuanto quiero q duremos mucho mucho mas y me permitas estar a tu lado apoyandote te amooooooooooooooooooooooooooo❤️❤️❤️❤️❤️')
});
const nobtn = document.querySelector('#nobtn');
nobtn.addEventListener('mouseover',function() {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    nobtn.style.setProperty('top',randomY+'%');
    nobtn.style.setProperty('left',randomX+'%');
    nobtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})


