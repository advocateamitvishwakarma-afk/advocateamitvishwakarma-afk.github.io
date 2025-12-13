// Animate approach steps on scroll
document.addEventListener('DOMContentLoaded', function() {
    const steps = document.querySelectorAll('.approach-step');
    
    // Function to check if element is in viewport
    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    // Function to handle scroll animation
    const handleScroll = () => {
        steps.forEach((step, index) => {
            if (isInViewport(step) && !step.classList.contains('animate')) {
                // Add delay based on index for staggered animation
                setTimeout(() => {
                    step.classList.add('animate');
                }, index * 200);
            }
        });
    };

    // Initial check
    handleScroll();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
});
