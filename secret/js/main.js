$(document).ready(function() {
             $("#edad").slider({});
             $("[name='domicilio']").bootstrapSwitch();
             $("[name='readOnly']").tags({
                 readOnly: true,
                 tagSize: "sm",
                 tagData: ["Ojos Negros", "Domicilio", "Delgada", "Joven", "25 años"]
               });
         });

$(function() {
           window.prettyPrint && prettyPrint()
           $(document).on('click', '.yamm .dropdown-menu', function(e) {
             e.stopPropagation()
           })
         })