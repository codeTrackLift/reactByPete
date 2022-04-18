import ScrollMagic from 'scrollmagic';

export const initCBPLogoWelcome = () => {
    const navbarCBPController = new ScrollMagic.Controller();
    const navbarCBP = new ScrollMagic.Scene({
            triggerElement: '#welcome',
            offset: -100,
            duration: 800
        })
        .setClassToggle('#navbarCBP', 'd-none')
        .addTo(navbarCBPController);
}