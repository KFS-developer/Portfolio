export const fadeIn = (direction, delay) => {
    return {
        hidden: {
            opacity: 0,
            y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
            x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
            transition: { delay }
        },
        show: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                type: 'tween',
                ease: [0.25, 0.25, 0.25, 0.75],
                delay: delay,
                duration: 1.2
            }
        }
    };
};

export const fadeInSpring = (direction, delay) => {
  return {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
      transition: { delay }
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 1.2,
        stiffness: 100,
        damping: 10,
        ease: [0.25, 0.25, 0.25, 0.75],
        delay: delay
      }
    }
  };
};