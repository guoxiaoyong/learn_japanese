$(document).ready(function() {
   var today = new Date();
   var date = '' + (today.getMonth()+1) + '/' + today.getDate() + '/' + today.getFullYear();
   $('div.signature').append('<div>Date: ' + date + '</div>');
})
