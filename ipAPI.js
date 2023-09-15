//https://ipinfo.io/account/home (check usage here)
$.getJSON('https://ipinfo.io/json?token=7ef23bc2fbe51a', function(data) {
$("#ip").text(data.ip); // Display the IPv4 address here
$('#isp').text(data.org);
$('#country').text(data.country);
$('#city').text(data.region);
})
