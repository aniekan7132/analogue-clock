"use script";

setInterval(setClock, 1000);

/**before we selected these values, we added some data attributes to them */

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

function setClock() {
 const currentDate = new Date()
 const secondsRatio = currentDate.getSeconds() / 60
 const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
 /**Divided by 12 because the clock has 12 hours */
 const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
 setRotation(secondHand, secondsRatio);
 setRotation(minuteHand, minutesRatio);
 setRotation(hourHand, hoursRatio);
}

/**setting the values for our rotation of our diffrent hands. Lets create a function that will do the rotation for us. this function will take the element that we want to rotatate , as well as the rotation that we want to use(rotationRatio)*/

/*setProperty method will take what property that we want, which is in the css*/

function setRotation(element, rotationRatio) {
 element.style.setProperty('--rotation', rotationRatio * 360);
};

setClock();



/*the secondsRatio is a percentage of a minute. Its going to be like .5 if for example we have like 30secs, .75 if we're at 45secs and so on. And its going to allow our minute hand to more gradually move around the clock */