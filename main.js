(function(window, document){
    'use strict';
    const toggles = document.querySelectorAll('.toggle');
    const toggleBtn = document.getElementById("toggle_btn");

    toggleBtn.addEventListener('click',function(){
        togglePlay();
    }
    );

    window.addEventListener('resize', function(){
        if(window.innerWidth > 1024){
            toggleOff();
        }
    });
    

    function togglePlay(){
        [].forEach.call(toggles, function(toggle){
            toggle.classList.toggle('on');
        });
    }

    function toggleOff(){
        [].forEach.call(toggles, function(toggle){
            toggle.classList.remove('on');
        });
    }

})(window,document)