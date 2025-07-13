import { useEffect, useRef, useState } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const useLocoScrollSections = () => {
  const scrollRef = useRef(null);
  const [activeSection, setActiveSection] = useState('');
  const [visibleSections, setVisibleSections] = useState([]);
  const scrollInstance = useRef(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    scrollInstance.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.1,
      smartphone: {
        smooth: true,
        breakpoint: 0
      },
      tablet: {
        smooth: true,
        breakpoint: 0
      }
    });

    const sections = scrollRef.current.querySelectorAll('.section');

    const handleScroll = () => {
      const newVisible = [];
      let newActive = '';

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionId = section.id;

        const isInViewport =
          rect.top < window.innerHeight * 0.7 && rect.bottom > window.innerHeight * 0.3;

        if (isInViewport) {
          newVisible.push(sectionId);
          section.classList.add('section-visible');

          if (!newActive || rect.top < window.innerHeight / 2) {
            newActive = sectionId;
          }
        }
      });

      setVisibleSections(newVisible);
      if (newActive && newActive !== activeSection) {
        setActiveSection(newActive);
      }
    };

    scrollInstance.current.on('scroll', handleScroll);
    setTimeout(() => {
      scrollInstance.current.update();
    }, 100);

    return () => {
      if (scrollInstance.current) scrollInstance.current.destroy();
    };
  }, []);

  return { scrollRef, activeSection, visibleSections };
};

export default useLocoScrollSections;