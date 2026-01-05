import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
                        <span className="opacity-0 animate-fade-in tracking-tight"> Hi, I'm </span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1"> Alijon </span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Usmonov </span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-o animate-fade-in-delay-3">
                        I’m a Software Engineering graduate driven by curiosity and a passion for building meaningful digital experiences.
                        I specialize in creating clean, intuitive, and responsive interfaces using modern frontend technologies.
                        If you’re looking for someone disciplined, motivated, and ready to grow with your team — I’m the one.

                    </p>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                    <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
                    <ArrowDown className="h-5 w-5 text-primary"/>
                </div>
            </div>
        </section> 
    );
};