(() => {
    let heroAnimation = document.querySelector('#hero-title');
    let inViewAnimation = document.querySelectorAll('[data-toggle-in-view]');

    let heroAnimationContent = heroAnimation.innerHTML;
    heroAnimation.innerHTML = `
      <span class="animated">Discover</span>
      <span class="animated">the</span>
      <span class="animated">joy</span>
      <span class="animated">of</span>
      <span class="animated">learning</span> <span class="hero-accent animated">English</span>
      <span class="animated">with</span>
      <span class="animated">us!</span>`;
    
    setTimeout(() => {
        heroAnimation.innerHTML = heroAnimationContent;
     }, 1300);
    
    
     animateIfInViewport();

     document.addEventListener('scroll', () => {
         animateIfInViewport();
     });
    
    
    function animateIfInViewport (){
        inViewAnimation.forEach(element => {
            let position = element.getBoundingClientRect().top + (window.innerHeight / 3);
            if (typeof element.dataset.fullInView !== 'undefined') {
                position = element.getBoundingClientRect().top + element.getBoundingClientRect().height;
             }
            
            if (typeof element.dataset.startCorrection !== 'undefined') { 
                position += parseInt(element.dataset.startCorrection);
            }
            
            if (position < window.innerHeight) {
                //element.classList.remove(element.dataset.toggleInView);
                addAnimationClass(element);

                if(typeof element.dataset.animationGroup !== 'undefined') {
                    let group = element.dataset.animationGroup;
                    inViewAnimation.forEach(ge => {
                        if(typeof ge.dataset.animationGroup !== 'undefined' && ge.dataset.animationGroup === group) {
                            addAnimationClass(ge)
                        }
                     })
                }
    
            }
    });
    }

    function addAnimationClass(element) {
      element.dataset.toggleInView.split(" ").forEach(animation => element.classList.add(animation));
    }
    
})();