$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 2000 } );
    $("#carousel-pause").click(function(){
        $("#mycarousel").carousel('pause');
    });
    $("#carousel-play").click(function(){
        $("#mycarousel").carousel('cycle');
    });

    $('#list').click(function(event){event.preventDefault();$('#products .item').addClass('list-group-item');});
    $('#grid').click(function(event){
        event.preventDefault();$('#products .item').removeClass('list-group-item');
    $('#products .item').addClass('grid-group-item');});
    $('#addCard').click(function(event){event.preventDefault();$('#productsCard .item').addClass('list-group-item');});
});
