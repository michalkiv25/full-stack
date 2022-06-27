/**
 * add px to number
 * @param {number} num
 * @returns string
 */
 const toPx = (num) => `${num}px`;

 /**
  * swtich from hex to rgba
  * @param {*} hexCode
  * @param {*} opacity
  * @returns rgba(r,g,b,o)
  */
 const hexToRgba = (hexCode, opacity) => {
   let hex = hexCode.replace('#', '');
 
   if (hex.length === 3) {
     hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
   }
 
   const r = parseInt(hex.substring(0, 2), 16);
   const g = parseInt(hex.substring(2, 4), 16);
   const b = parseInt(hex.substring(4, 6), 16);
 
   return `rgba(${r},${g},${b},${opacity / 100})`;
 };
 
 /**
  * debounce function
  * use inDebounce to maintain internal reference of timeout to clear
  */
 const debounce = (func, delay) => {
   let inDebounce;
   return function () { // eslint-disable-line
     const context = this
     const args = arguments; // eslint-disable-line
     clearTimeout(inDebounce)
     inDebounce = setTimeout(() => func.apply(context, args), delay)
   }
 }
 
 /**
  * throttle function that catches and triggers last invocation
  * use time to see if there is a last invocation
  */
 const throttle = (func, limit) => {
   let lastFunc
   let lastRan
   return function () { // eslint-disable-line
     const context = this;
     const args = arguments; // eslint-disable-line
     if (!lastRan) {
       func.apply(context, args)
       lastRan = Date.now()
     } else {
       clearTimeout(lastFunc)
       lastFunc = setTimeout(() => {
         if (Date.now() - lastRan >= limit) {
           func.apply(context, args)
           lastRan = Date.now()
         }
       }, limit - (Date.now() - lastRan))
     }
   }
 }
 
 export {
   toPx,
   hexToRgba,
   debounce,
   throttle,
 };
 