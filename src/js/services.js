const jsTriggers = document.querySelectorAll('.tablinks'),
    jsContents = document.querySelectorAll('.tabcontent');

jsTriggers.forEach(function(trigger) {
    trigger.addEventListener('click', function() {
        let id = this.getAttribute('data-tab'),
            content = document.querySelector('.tabcontent[data-tab="'+id+'"]'),
            activeTrigger = document.querySelector('.tablinks.active'),
            activeContent = document.querySelector('.tabcontent.active');
    
        activeTrigger.classList.remove('active'); 
        trigger.classList.add('active'); 

        activeContent.classList.remove('active'); 
        content.classList.add('active'); 
    });
});


