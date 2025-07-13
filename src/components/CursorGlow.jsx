import { useEffect, useRef } from 'react';

const CursorGlow = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        const cursorGlow = cursorRef.current;

        const handleMouseMove = (e) => {
            if (cursorGlow) {
                cursorGlow.style.left = `${e.clientX}px`;
                cursorGlow.style.top = `${e.clientY}px`;
            }
        };

        const handleMouseDown = () => {
            cursorGlow?.classList.add('active');
        };

        const handleMouseUp = () => {
            cursorGlow?.classList.remove('active');
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    return <div ref={cursorRef} id="cursor-glow" className="cursor-glow" />;
};

export default CursorGlow;