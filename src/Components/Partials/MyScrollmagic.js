import ScrollMagic from 'scrollmagic';

export const initScrollMagicWelcome = () => {
    var welcomeCard1Controller = new ScrollMagic.Controller();
    var welcomeCard1 = new ScrollMagic.Scene({
            triggerElement: '#welcomeCard1',
        })
        .setClassToggle('#welcomeCard1', 'shift')
        .addTo(welcomeCard1Controller);

    var welcomeCard2Controller = new ScrollMagic.Controller();
    var welcomeCard2 = new ScrollMagic.Scene({
            triggerElement: '#welcomeCard2',
        })
        .setClassToggle('#welcomeCard2', 'shift')
        .addTo(welcomeCard2Controller);

    var githubContributionsController = new ScrollMagic.Controller();
    var githubContributions = new ScrollMagic.Scene({
            triggerElement: '#githubContributions',
            offset: -200
        })
        .setClassToggle('#githubContributions', 'show')
        .addTo(githubContributionsController);

    var buttonContactController = new ScrollMagic.Controller();
    var buttonContact = new ScrollMagic.Scene({
            triggerElement: '#buttonContact',
            offset: -200
        })
        .setClassToggle('#buttonContact', 'show')
        .addTo(buttonContactController);
}

export const clearScrollMagicWelcome = () => {
    var welcomeCard1Controller = null;
    var welcomeCard1 = null;
    var welcomeCard2Controller = null;
    var welcomeCard2 = null;
    var githubContributionsController = null;
    var githubContributions = null;
    var buttonContactController = null;
    var buttonContact = null;
}

export const initScrollMagicAbout = () => {
    var githubContributionsController = new ScrollMagic.Controller();
    var githubContributions = new ScrollMagic.Scene({
            triggerElement: '#githubContributions',
            offset: -200
        })
        .setClassToggle('#githubContributions', 'show')
        .addTo(githubContributionsController);
        
    var buttonContactController = new ScrollMagic.Controller();
    var buttonContact = new ScrollMagic.Scene({
            triggerElement: '#buttonContact',
            offset: -300
        })
        .setClassToggle('#buttonContact', 'show')
        .addTo(buttonContactController);

    var buttonBlogController = new ScrollMagic.Controller();
    var buttonBlog = new ScrollMagic.Scene({
            triggerElement: '#buttonBlog',
            offset: -300
        })
        .setClassToggle('#buttonBlog', 'show')
        .addTo(buttonBlogController);
}

export const clearScrollMagicAbout = () => {
    var githubContributionsController = null;
    var githubContributions = null;
    var buttonContactController = null;
    var buttonContact = null;
    var buttonBlogController = null;
    var buttonBlog = null;
}