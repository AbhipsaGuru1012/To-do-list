$("ul").on("click","li",function(){/*ul bec it exists when the page loads always,li bec we need to hear that and on bec it add listeners for future elements also*/ 
    $(this).toggleClass("completed");
    
})
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();/* stops from executing the li function*/

})
$("input[type='text']").keypress(function(event){
    if(event.which===13){/*13 is which code for enter key  */
        
        var todoText=$(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i> </span>" + todoText + "</li>");
    }
    
})
$(".fa-edit").click(function(){
    $("input[type='text']").fadeToggle();
})
