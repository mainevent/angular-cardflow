'use strict';

angular.module('angular-cardflow', ['ngTouch']).directive('cardflow', ['$swipe', function($swipe) {
    return {
        'restrict': 'E',
        'template':'<div class="cardflow-container" ng-transclude ng-swipe-left="updateLeft()" ng-swipe-right="updateRight()"></div>',
        transclude: true,
        'scope': { 'cards': '=' },
        'link': function(scope, element, attrs) {
            scope.offset = 0;

            // update offset
            function update(delta){
                if ((delta == 1 && scope.offset < 0) || (delta == -1 && scope.offset > (-1 * scope.cards.length)+1)){
                    var cards = element.children().children();
                    scope.offset += delta;

                    // cardWidth is left positioning of second card.
                    var cardWidth = parseInt(window.getComputedStyle(cards[1])['left'], 10);
                    var px = scope.offset*cardWidth;
                    
                    cards.css({
                        'transform': 'translate3d('+px+'px,0,0)',
                        '-webkit-transform': 'translate3d('+px+'px,0,0)',
                        '-o-transform': 'translate3d('+px+'px,0,0)',
                        '-moz-transform': 'translate3d('+px+'px,0,0)'
                    }).removeClass('cardflow-active');
                    angular.element(cards[scope.offset*-1]).addClass('cardflow-active');
                }
            }

            scope.updateLeft = function(){
                update(-1);
            }

            scope.updateRight = function(){
                update(1);
            }
        }
    };
}]);