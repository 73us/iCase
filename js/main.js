const getS = e => document.querySelector(e);

function toUp() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.onscroll = () => {
    if (document.documentElement.scrollTop > 500 || document.body.scrollTop > 500) {
        getS('.to-up-box').style.display = 'flex';
    }
    else {
        getS('.to-up-box').style.display = 'none';
    }
}