//Loading screen on Load
window.addEventListener("load", () => {
    const loadscreen = document.querySelector('.loading-wrapper');
        setTimeout(()=>{
            loadscreen.style.cssText ="opacity:0";
            setTimeout(()=>{
                loadscreen.style.display = "none";

                const container = document.querySelector('.carousel-items');
                const images = Array.from(container.children);
                const dotsCont = document.querySelector('.dots__container');
                const dots = Array.from(dotsCont.children);

                //get width ofcontainer
                // (regardles of device/size)
                const carouselWidth = images[0].getBoundingClientRect().width;
                const SetPosition = (image,index) =>{
                    image.style.left = carouselWidth * index + 'px';
                }
                images.forEach(SetPosition);

                const Dots = (currentDot,targetDot) =>{
                currentDot.classList.remove('current__dot');
                targetDot.classList.add('current__dot');
                }
                const Sliding = (currentSlide, targetSlide,container) => {
                    container.style.transform = 'translateX(-' + targetSlide.style.left; + ')';
                    currentSlide.classList.remove('active__img');
                    targetSlide.classList.add('active__img');
                }
                setInterval(()=>{
                    const currentSlide = container.querySelector('.active__img');
                    const nextSlide = currentSlide.nextElementSibling;
                    const currentDot = dotsCont.querySelector('.current__dot');
                    const nextDot = currentDot.nextElementSibling;
                    if(images.indexOf(nextSlide) === -1){
                        // const nextIndex = images.findIndex(image => image === nextSlide);
                        // if (nextSlide !== images.length){
                        //     return;
                        const nextSlide = images[0];
                        const nextDot = dots[0];
                        Dots(currentDot, nextDot);
                        Sliding(currentSlide, nextSlide,container);
                    }else{ 
                        Dots(currentDot, nextDot);
                        Sliding(currentSlide, nextSlide,container);
                    }
                 },2500);
        },500);
    },2000);
},{once:true});

// Auto carousel


