window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  var player = GetPlayer();

var myVar = setInterval(function myTimer()
{
    var d = new Date();
    var hrs = d.getHours();
    var min = d.getMinutes();
    min = min > 9 ? min : '0' + min;
    var sec = d.getSeconds();
    sec = sec > 9 ? sec : '0' + sec;
    var month = d.getMonth();
    var day = d.getDate();
    var year = d.getFullYear();

    var MonthNames = 
    [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var monthString = MonthNames[month];
    
    console.log(hrs);
    console.log(min);
    console.log(sec);
    console.log(month);
    console.log(monthString);
    console.log(day);
    console.log(year);

    player.SetVar("Hours", hrs); 
    player.SetVar("Minutes", min); 
    player.SetVar("Seconds", sec); 
    player.SetVar("Month", monthString); 
    player.SetVar("Day", day); 
    player.SetVar("Year", year); 
}
, 1000);
}

window.Script2 = function()
{
  var player = GetPlayer();

var myVar = setInterval(function myTimer()
{
    var d = new Date();
    var hrs = d.getHours();
    var min = d.getMinutes();
    min = min > 9 ? min : '0' + min;
    var sec = d.getSeconds();
    sec = sec > 9 ? sec : '0' + sec;
    var month = d.getMonth();
    var day = d.getDate();
    var year = d.getFullYear();

    var MonthNames = 
    [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var monthString = MonthNames[month];
    
    console.log(hrs);
    console.log(min);
    console.log(sec);
    console.log(month);
    console.log(monthString);
    console.log(day);
    console.log(year);

    player.SetVar("Hours", hrs); 
    player.SetVar("Minutes", min); 
    player.SetVar("Seconds", sec); 
    player.SetVar("Month", monthString); 
    player.SetVar("Day", day); 
    player.SetVar("Year", year); 
}
, 1000);
}

window.Script3 = function()
{
  var player = GetPlayer();

var myVar = setInterval(function myTimer()
{
    var d = new Date();
    var hrs = d.getHours();
    var min = d.getMinutes();
    min = min > 9 ? min : '0' + min;
    var sec = d.getSeconds();
    sec = sec > 9 ? sec : '0' + sec;
    var month = d.getMonth();
    var day = d.getDate();
    var year = d.getFullYear();

    var MonthNames = 
    [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var monthString = MonthNames[month];
    
    console.log(hrs);
    console.log(min);
    console.log(sec);
    console.log(month);
    console.log(monthString);
    console.log(day);
    console.log(year);

    player.SetVar("Hours", hrs); 
    player.SetVar("Minutes", min); 
    player.SetVar("Seconds", sec); 
    player.SetVar("Month", monthString); 
    player.SetVar("Day", day); 
    player.SetVar("Year", year); 
}
, 1000);
}

window.Script4 = function()
{
  var player = GetPlayer();

var myVar = setInterval(function myTimer()
{
    var d = new Date();
    var hrs = d.getHours();
    var min = d.getMinutes();
    min = min > 9 ? min : '0' + min;
    var sec = d.getSeconds();
    sec = sec > 9 ? sec : '0' + sec;
    var month = d.getMonth();
    var day = d.getDate();
    var year = d.getFullYear();

    var MonthNames = 
    [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var monthString = MonthNames[month];
    
    console.log(hrs);
    console.log(min);
    console.log(sec);
    console.log(month);
    console.log(monthString);
    console.log(day);
    console.log(year);

    player.SetVar("Hours", hrs); 
    player.SetVar("Minutes", min); 
    player.SetVar("Seconds", sec); 
    player.SetVar("Month", monthString); 
    player.SetVar("Day", day); 
    player.SetVar("Year", year); 
}
, 1000);
}

window.Script5 = function()
{
  var player = GetPlayer();

var myVar = setInterval(function myTimer()
{
    var d = new Date();
    var hrs = d.getHours();
    var min = d.getMinutes();
    min = min > 9 ? min : '0' + min;
    var sec = d.getSeconds();
    sec = sec > 9 ? sec : '0' + sec;
    var month = d.getMonth();
    var day = d.getDate();
    var year = d.getFullYear();

    var MonthNames = 
    [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var monthString = MonthNames[month];
    
    console.log(hrs);
    console.log(min);
    console.log(sec);
    console.log(month);
    console.log(monthString);
    console.log(day);
    console.log(year);

    player.SetVar("Hours", hrs); 
    player.SetVar("Minutes", min); 
    player.SetVar("Seconds", sec); 
    player.SetVar("Month", monthString); 
    player.SetVar("Day", day); 
    player.SetVar("Year", year); 
}
, 1000);
}

window.Script6 = function()
{
  var player = GetPlayer();

var myVar = setInterval(function myTimer()
{
    var d = new Date();
    var hrs = d.getHours();
    var min = d.getMinutes();
    min = min > 9 ? min : '0' + min;
    var sec = d.getSeconds();
    sec = sec > 9 ? sec : '0' + sec;
    var month = d.getMonth();
    var day = d.getDate();
    var year = d.getFullYear();

    var MonthNames = 
    [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var monthString = MonthNames[month];
    
    console.log(hrs);
    console.log(min);
    console.log(sec);
    console.log(month);
    console.log(monthString);
    console.log(day);
    console.log(year);

    player.SetVar("Hours", hrs); 
    player.SetVar("Minutes", min); 
    player.SetVar("Seconds", sec); 
    player.SetVar("Month", monthString); 
    player.SetVar("Day", day); 
    player.SetVar("Year", year); 
}
, 1000);
}

};
