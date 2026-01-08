import { ExternalLink, Github, ArrowRight, Figma, Spline} from "lucide-react";

const projects = [
    {
        id: 1,
        title: "SaaS Landing Page",
        description: "A beautiful landing page for a Crypto project.",
        image: "/projects/CryptoProject.png",
        tags: ["Figma"],
        figmaURL: "https://www.figma.com/design/4ya30lrmbRikaPUjemsYWY/SaaS-LP---BitApp?node-id=0-1&t=Jt4qP2emlDobVQva-1",
        githubURL: "https://github.com/alijonusmnvvv/SaaS-Landing-Page.git",
    },
    {
        id: 2,
        title: "NFT Marketplace",
        description: "A modern NFT marketplace for digital art.",
        image: "/projects/NFTProject.png",
        tags: ["Figma"],
        figmaURL: "https://www.figma.com/design/Afb0Z8ouHqodUzL2Fx1uOQ/NFT-Marketplace?node-id=0-1&t=bOUN5R20Rnp8fbMv-1",
        githubURL: "https://github.com/alijonusmnvvv/NFT-Marketplace.git",
    },
    {
        id: 3,
        title: "Investooms",
        description: "A sleek platform for stock trading and investment management.",
        image: "/projects/Investooms.png",
        tags: ["Figma", "HTML/CSS", "JavaScript"],
        figmaURL: "https://www.figma.com/design/eeFOFzA7e18q8sVWeh57Yp/Final?node-id=0-1&t=eAI7AID4KDmAnASg-1",
        githubURL: "https://github.com/alijonusmnvvv/Investooms.git",
        demoURL: "https://alijonusmnvvv.github.io/Investooms/",
    },
    {
        id: 4,
        title: "3D Website",
        description: "A modern 3D landing page, featuring smooth animations and a premium UI.",
        image: "/projects/3D-Website.png",
        tags: ["React", "Tailwind CSS", "Spline",],
        figmaURL: "https://www.figma.com/design/HHgh6yK2TbHxDANxpxQDpB/3D-Website?node-id=0-1&t=UJc40DzD60kxxxFh-1",
        splineURL: "https://app.spline.design/file/082cb0b0-a4a3-43f9-b1d1-c7317f104c4b", 
        githubURL: "https://github.com/alijonusmnvvv/3D-Website.git",
        demoURL: "https://alijonusmnvvv.github.io/3D-Website/",
    },

];

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            
                                <h3 className="text-xl font-semibold mb-1">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        {project.figmaURL && (
                                            <a
                                                href={project.figmaURL}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                            >
                                                <Figma size={20} />
                                            </a>
                                        )}
                                        {project.splineURL && (
                                            <a
                                                href={project.splineURL}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                            >
                                                <Spline size={20} />
                                            </a>
                                        )}
                                        {project.githubURL && (
                                            <a
                                                href={project.githubURL}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                            >
                                                <Github size={20} />
                                            </a>
                                        )}
                                        {project.demoURL && (
                                            <a
                                                href={project.demoURL}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                            >
                                                <ExternalLink size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/alijonusmnvvv" target="_blank">
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};