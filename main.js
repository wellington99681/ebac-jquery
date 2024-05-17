$(document).ready(function(){

    $('form').on('click', '.submit', function(e){
        e.preventDefault();

        let listInput = $('.input').val();
        if(listInput !== '') {
            $('.todoList').append('<li><input type="checkbox" class="checkbox">'+listInput+'</li>');
            $('.input').val('');
        } 
    });
    $('ul').on('click', '.checkbox', function(){
        $(this).parent().toggleClass('strike');
    });

});