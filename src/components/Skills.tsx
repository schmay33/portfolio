import React from 'react';
import { motion } from 'framer-motion';
import styles from './Skills.module.scss';

interface SkillCategory {
  title: string;
  skills: string[];
  icon: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: ['HTML/CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind', 'Astro', 'Pug', 'SASS'],
    icon: '🎨'
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'C#', 'ASP.NET Core'],
    icon: '⚙️'
  },
  {
    title: 'Database',
    skills: ['SQL', 'Sequelize', 'REST API'],
    icon: '🗄️'
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'VS Code', 'Coda.io', 'API Integration', 'JADU', 'JIRA', 'Confluence'],
    icon: '🛠️'
  }
];

const Skills: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <motion.div
          className={styles.skills__header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.skills__title}>Technical Skills</h2>
          <p className={styles.skills__description}>
            With a strong foundation in both frontend and backend technologies,
            I specialize in creating scalable and maintainable web applications
            that deliver exceptional user experiences.
          </p>
        </motion.div>

        <motion.div
          className={styles.skills__grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className={styles['skill-card']}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className={styles['skill-card__header']}>
                <span className={styles['skill-card__icon']}>{category.icon}</span>
                <h3 className={styles['skill-card__title']}>{category.title}</h3>
              </div>

              <motion.ul className={styles['skill-card__list']}>
                {category.skills.map((skill, i) => (
                  <motion.li
                    key={i}
                    className={styles['skill-card__item']}
                    variants={skillVariants}
                  >
                    <motion.div
                      className={styles['skill-card__item-dot']}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    />
                    <span>{skill}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 