import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="containeer mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold md-12 text-center">
                    About <span className="text-primary"> Me </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-7">
                        <h3 className="text-2xl font-semibold">Passionate Web Developer & Tech Creator</h3>
                        <p className="text-muted-foreground">
                            I have experience building modern web applications using HTML, CSS, JavaScript, React, Tailwind CSS, and Java. 
                            Through my studies and projects, I’ve developed responsive, well-structured, and maintainable solutions. Alongside 
                            development, I’ve created numerous UI/UX designs in Figma, enabling me to combine strong design principles with solid technical execution.
                        </p>
                        <p className="text-muted-foreground">
                            I design and build user-focused frontend experiences, creating clean, responsive, and intuitive interfaces. 
                            By combining UI/UX principles with modern frontend technologies like React and Tailwind, I focus on delivering high-quality, 
                            efficient, and visually polished solutions.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button"> Get In Touch </a>
                            <a href="/Alijon-Usmonov-CV.pdf" download="Alijon-Usmonov-CV.pdf"
                            className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"> Download CV </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 py-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Web Development </h4>
                                    <p className="text-muted-foreground">
                                        Creating responsive websites and web applications with modern frameworks.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> UI/UX Design </h4>
                                    <p className="text-muted-foreground">
                                        Designing intuitive user interfaces and seamless user experiences.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Project Management </h4>
                                    <p className="text-muted-foreground">
                                        Leading projects from conception to completion with agile methodologies.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};