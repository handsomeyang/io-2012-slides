var SLIDE_CONFIG = {
  // Slide settings
  settings: {
    title: 'Title Goes Here<br>Up To Two Lines',
    subtitle: 'Subtitle Goes Here',
    eventInfo: {
     title: 'Nov 11, 2016',
     // date: '6/x/2013'
    },
    useBuilds: true, // Default: true. False will turn off slide animation builds.
    usePrettify: true, // Default: true
    enableSlideAreas: true, // Default: true. False turns off the click areas on either slide of the slides.
    enableTouch: true, // Default: true. If touch support should enabled. Note: the device must support touch.
    //analytics: 'UA-XXXXXXXX-1', // TODO: Using this breaks GA for some reason (probably requirejs). Update your tracking code in template.html instead.
    favIcon: 'images/pku.png',
    fonts: [
      'Open Sans:regular,semibold,italic,italicsemibold',
      'Source Code Pro'
    ],
    //theme: ['mytheme'], // Add your own custom themes or styles in /theme/css. Leave off the .css extension.
  },

  // Author information
  presenters: [{
    name: 'Jun Yang',
//    company: 'Job Title<br>Google',
//      gplus: 'http://plus.google.com/107939367176713671625',
    twitter: '@junyangxyz',
    www: 'http://www.junyang.xyz',
    github: 'http://github.com/handsomeyang'
  }/*, {
    name: 'Second Name',
    company: 'Job Title, Google',
    gplus: 'http://plus.google.com/1234567890',
    twitter: '@yourhandle',
    www: 'http://www.you.com',
    github: 'http://github.com/you'
  }*/]
};

