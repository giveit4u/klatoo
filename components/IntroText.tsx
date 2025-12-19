'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const IntroText: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const titleLeftRef = useRef<HTMLHeadingElement>(null);
    const titleRightRef = useRef<HTMLHeadingElement>(null);
    const para1Ref = useRef<HTMLParagraphElement>(null);
    const para2Ref = useRef<HTMLParagraphElement>(null);
    const para3Ref = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            // Title animations
            gsap.fromTo(titleLeftRef.current,
                { opacity: 0, x: -100 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        end: "top 50%",
                        scrub: 1
                    }
                }
            );

            gsap.fromTo(titleRightRef.current,
                { opacity: 0, x: 100 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        end: "top 50%",
                        scrub: 1
                    }
                }
            );

            // Paragraph animations
            [para1Ref, para2Ref, para3Ref].forEach((ref, index) => {
                gsap.fromTo(ref.current,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: ref.current,
                            start: "top 85%",
                            end: "top 60%",
                            scrub: 1
                        }
                    }
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full min-h-screen bg-black text-white py-24 px-6 md:px-12">
            <div className="container mx-auto max-w-7xl">
                {/* Titles */}
                <div className="flex justify-between items-start mb-32">
                    <h2
                        ref={titleLeftRef}
                        className="text-6xl md:text-8xl font-black uppercase tracking-tighter"
                        style={{ fontWeight: 900 }}
                    >
                        NÉ POUR
                    </h2>
                    <h2
                        ref={titleRightRef}
                        className="text-6xl md:text-8xl font-black uppercase tracking-tighter"
                        style={{ fontWeight: 900 }}
                    >
                        BRILLER
                    </h2>
                </div>

                {/* Content */}
                <div className="max-w-2xl space-y-12">
                    <p ref={para1Ref} className="text-lg md:text-xl leading-relaxed text-gray-300">
                        De la rue aux plus grandes<br />
                        scènes du football mondial,<br />
                        Ousmane Dembélé n'a jamais<br />
                        cessé d'éblouir.
                    </p>

                    <p ref={para2Ref} className="text-lg md:text-xl leading-relaxed text-gray-300">
                        Un parcours fait d'instinct,<br />
                        de vitesse,<br />
                        de flair et de lumière.
                    </p>

                    <p ref={para3Ref} className="text-lg md:text-xl leading-relaxed text-gray-300">
                        Voici l'histoire d'un joueur unique,<br />
                        tracée entre les clubs qui ont<br />
                        façonné sa légende.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default IntroText;
