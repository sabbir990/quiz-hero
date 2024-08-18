document.addEventListener("DOMContentLoaded", function() {
    var options = {
        strings: ["Come & Gain more knowledge about programming", "Read Blogs to learn More"],
        typeSpeed: 50,            
        backSpeed: 50,            
        backDelay: 2000,          
        startDelay: 500,          
        loop: false,              
        showCursor: true,         
        cursorChar: '|',          
        onComplete: function(self) {
            setTimeout(function() {
                self.destroy();
                typed = new Typed("#typed-output", self.options);
            }, 500);
        }
    };

    var typed = new Typed("#typed-output", options);
});