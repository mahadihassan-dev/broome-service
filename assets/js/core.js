let faq_card_title_Btn = document.getElementById('faq_card_title_Btn');
let faq_card_Detail = document.getElementById('faq_card_Detail');
$(document).ready(function() {
    $(faq_card_title_Btn).click(function() {
        $(faq_card_Detail).toggle(150);
    })
})