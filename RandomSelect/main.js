
var picture=[
    "0.jpg",
    "1.jpg",
    "2.jpg"
];
$(document).ready(function() {
    $("input").click(function()
    {
        
        var number0fListItem = $("#choices li").length;
        var randomChildNumber = Math.floor(Math.random()*number0fListItem);
        $("h1").text($("#choices li").eq(randomChildNumber).text());
        console.log(123);
        $("img").attr("src",picture[randomChildNumber]);
    });
    
});