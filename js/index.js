let timefromNow = moment().startOf( 'day' ).fromNow();
console.log( timefromNow );
let time_now = new Date();
time_now = moment( time_now ).format( 'MMMM Do YY, h:mm:ss a' );
console.log( time_now );
