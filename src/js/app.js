console.log('bla appjs');

$(document).ready(function() {
    $("#ba").hover( 
        function() {
        console.log('text');
        var txt1 = document.createElement("div");
            txt1.innerHTML = "Hospital Santo Antonio";
            $(txt1).addClass("box-estado")
        $( this ).append( txt1);
    },
    function() {
        $( this ).find( 'div' ).last().remove();
      }
    );
    
    
});