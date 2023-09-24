(() => {
    let heroAnimation = document.querySelector('#hero-title');
    let inViewAnimation = document.querySelectorAll('[data-toggle-in-view]');
    let proposalSectionTitle = document.querySelector('#proposal-section-title');

    let proposalTitleShowed = false;

    proposalSectionTitle.classList.add('is-hidden');

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
    animateProposalSection();

     document.addEventListener('scroll', () => {
         animateIfInViewport();
         animateProposalSection();
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

            if (typeof element.dataset.replaceTo !== 'undefined') { 
               
                setTimeout(() => {
                    element.dataset.toggleInView.split(" ").forEach(animation => element.classList.remove(animation));
                    element.dataset.replaceTo.split(" ").forEach(animation => element.classList.add(animation));
                },
                typeof element.dataset.replaceIn !== "undefined" ? parseInt(element.dataset.replaceIn) : 1300 );

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

    function animateProposalSection() {

        let position = proposalSectionTitle.getBoundingClientRect().top + (window.innerHeight / 3);

        if (position < window.innerHeight && !proposalTitleShowed) {
            proposalTitleShowed = true;
            proposalSectionTitle.classList.remove('is-hidden');
        
            let prevHtml = proposalSectionTitle.innerHTML;

            proposalSectionTitle.innerHTML = `
            <span class="animated">Master</span>
            <span class="animated">the</span>
            <span class="title-acsent animated">Language</span>
            <span class="animated">with</span>
            <span class="animated">Our</span>
            <span class="animated">English</span>
            <span class="animated">Package!</span>
            `;
            setTimeout(() => {
            proposalSectionTitle.innerHTML = prevHtml;
            }, 1300);
            
        }
    }
    
})();