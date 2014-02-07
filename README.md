# Angular Cardflow

This is for making ng-repeat items that flow into a nice & efficient coverflow.  It is inspired by [angular-coverflow](https://github.com/southdesign/angular-coverflow) and [angular-carousel](https://github.com/revolunet/angular-carousel), but differs in a few ways:

*  It can handle images, divs, or whatever you like that is ng-repeating
*  Uses Angular's `$swipe`
*  It has multiple interaction modes
*  Lots of attribute options with sensible defaults

Here are some more features:

*  mobile-friendly, tested on webkit+firefox
*  use CSS 3D transformations directly, no `window.requestAnimationFrame()`.
*  you can use it to make single-card-visible carousels, swipey coverflows, no-swipe coverflows, or whatever
*  data-binding & callbacks

See a [demo](http://konsumer.github.io/angular-cardflow/)

## Usage

See files in `examples` for usage examples, but here's the basics:

1. Include the cardflow.js script provided by this component into your app.
2. Add angular-cardflow as a module dependency to your app.
3. Add CSS to make it look nice. I tried to keep all of the look & animation in CSS only. There is an example in `examples/cardflow.css`

## Attributes

### current

You can force the current card, if you don't want it to be the first one.

### animTime

You can set the speed that it animates, in seconds. Default is 0.25.

### pad

You can set the margin between cards, in pixels. Default is 10.

### type

You can set different interaction modes with the `type` attribute. Here are the available options:

* `swipeSnap` (default) - swipe left or right, watch velocity & snap to individual card on slow down. sort of like [angular-coverflow](https://github.com/southdesign/angular-coverflow), but snap to cards.
* `swipeSnapOne` - swipe left or right to advance 1. sort of like [angular-carousel](https://github.com/revolunet/angular-carousel).

## model

`model` is used if you need to reach into the directive with data-binding. `examples/index.html` uses this. It's cool for indicators or buttons that jump to specific cards. It gives you access to these:

*  `current` - the index of the current card
*  `left()` - trigger moving 1 to the left
*  `right()` - trigger moving 1 to the right
*  `onActive`  - called when an active card is selected. It looks like this: `function(active_element, offset, scope){ }`