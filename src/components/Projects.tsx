import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ProjectPlaceholder from './ProjectPlaceholder';
import styles from './Projects.module.scss';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: 'Wayan Bali Tour Service',
    description: 'Commercial tourism website with responsive design and SEO optimization.',
    technologies: ['Astro', 'HTML', 'CSS', 'JavaScript'],
    features: ['Responsive design', 'SEO optimized', 'Performance optimized'],
    image: '/portfolio/images/wayanbaliguide.png',
    liveUrl: 'https://wayanbaliguide.com'
  },
  {
    title: 'Application Form Portal (MassAbility)',
    description: 'Application Form for MassAbility constiuents.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'ASP.NET Core', 'C#', 'OnBase'],
    features: ['Form validation', 'User authentication', 'REST API integration'],
    image: '/portfolio/images/onemrc.png',
    liveUrl: 'https://massmrc.hylandcloud.com/customcode/MRConemrc'
  },
  {
    title: 'DIA Microfilm Search',
    description: 'Search for insurance documents for the Department of Industrial Accidents.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'JADU', 'OnBase'],
    features: ['JADU', 'Hyland OnBase Integration'],
    image: '/portfolio/images/dia.png',
    liveUrl: 'https://workerscompinfo.mass.gov/insurancemicrofilm'
  },
  {
    title: 'Coda.io Pack - ClickUp',
    description: 'API integration pack in Coda\'s core bundle.',
    technologies: ['JavaScript', 'REST API', 'Coda.io'],
    features: ['API integration', 'Data synchronization', 'Automation'],
    image: '/portfolio/images/clickup.png',
    liveUrl: 'https://coda.io/packs/clickup-16422'
  },
  {
    title: 'MassAbility Portal',
    description: 'Portal for Massachusetts agency MassAbility',
    technologies: ['JADU', 'HTML', 'CSS', 'JavaScript', 'OnBase'],
    features: ['JADU', 'Hyland OnBase Integration'],
    image: '/portfolio/images/massability.png',
    liveUrl: 'https://inclusivecareersandcommunity.mass.gov',
  },
  {
    title: 'Course Library',
    description: 'React frontend with course API backend.',
    technologies: ['Node', 'Express', 'Sequelize', 'Pug', 'React'],
    features: ['Course management', 'User authentication', 'RESTful API'],
    image: '/portfolio/images/courselibrary.png'
  },
  {
    title: 'Book Collection',
    description: 'Book collection management system with pagination.',
    technologies: ['Node', 'Express', 'PUG', 'Sequelize'],
    features: ['CRUD operations', 'Pagination', 'Search functionality'],
    image: '/portfolio/images/bookcollection.png'
  },
  {
    title: 'Student / Course API',
    description: 'School database administration API.',
    technologies: ['Node', 'Express', 'Sequelize'],
    features: ['RESTful API', 'Data validation', 'Error handling'],
    image: '/portfolio/images/courseapi.png'
  }
];

// Add project filtering capability
const ProjectFilters: React.FC<{
  activeFilter: string;
  setFilter: (filter: string) => void;
  technologies: string[];
}> = ({ activeFilter, setFilter, technologies }) => {
  return (
    <div className={styles.projects__filters}>
      <button 
        className={`${styles.filterButton} ${activeFilter === 'all' ? styles.active : ''}`}
        onClick={() => setFilter('all')}
      >
        All
      </button>
      {technologies.map(tech => (
        <button
          key={tech}
          className={`${styles.filterButton} ${activeFilter === tech ? styles.active : ''}`}
          onClick={() => setFilter(tech)}
        >
          {tech}
        </button>
      ))}
    </div>
  );
};

const Projects: React.FC = () => {
  // Extract unique technologies for filters
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Get unique technologies from all projects
  const allTechnologies = [...new Set(projects.flatMap(p => p.technologies))].sort().slice(0, 20); // Limit to top 6
  
  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.technologies.includes(activeFilter));

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };
  
  useEffect(() => {
    // Add structured data for projects
    const projectsStructuredData = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": projects.map((project, index) => ({
        "@type": "SoftwareApplication",
        "position": index + 1,
        "name": project.title,
        "description": project.description,
        "applicationCategory": "WebApplication",
        "operatingSystem": "Any",
        "url": project.liveUrl || "",
        "softwareRequirements": project.technologies.join(", "),
        "featureList": project.features.join(", ")
      }))
    };

    // Add structured data to head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(projectsStructuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <motion.div
          className={styles.projects__header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.projects__title}>Featured Projects</h2>
          <p className={styles.projects__description}>
            Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
          </p>
        </motion.div>

        <motion.div
          className={styles.projects__filters_container}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <ProjectFilters 
            activeFilter={activeFilter} 
            setFilter={handleFilterChange}
            technologies={allTechnologies}
          />
        </motion.div>

        <motion.div
          key={activeFilter}
          className={styles.projects__grid}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
        >
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              className={styles.project}
              variants={cardVariants}
              layout
            >
              <div className={styles.project__image}>
                <motion.div
                  className={styles.project__image_overlay}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
                {project.image.startsWith('/projects/') ? (
                  <ProjectPlaceholder index={index} />
                ) : (
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className={styles.project__image_img}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </div>

              <div className={styles.project__content}>
                <h3 className={styles.project__title}>{project.title}</h3>
                <p className={styles.project__description}>{project.description}</p>

                <div className={styles.project__section}>
                  <h4 className={styles.project__section_title}>Technologies</h4>
                  <div className={styles.project__tags}>
                    {project.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        className="tag"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className={styles.project__section}>
                  <h4 className={styles.project__section_title}>Features</h4>
                  <ul className={styles.project__features}>
                    {project.features.slice(0, 3).map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i }}
                      >
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className={styles.project__buttons}>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      View Live
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                    >
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 