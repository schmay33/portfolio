import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Contact.module.scss';

/**
 * Contact form component using Formspree for handling submissions.
 * 
 * To set up:
 * 1. Create a free account at https://formspree.io/
 * 2. Create a new form and get your form ID
 * 3. Replace 'YOUR_FORM_ID' in the fetch URL with your actual form ID
 * 4. Formspree free tier allows 50 submissions per month
 */
const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Using Formspree for form submission
      const response = await fetch('https://formspree.io/f/xdkarypk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/nschmdt',
      icon: '📦'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/nathan-schmidt',
      icon: '💼'
    }
  ];

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <motion.div
          className={styles.contact__header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.contact__title}>Get in Touch</h2>
          <p className={styles.contact__description}>
            Have a project in mind? Let's work together to create something amazing.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className={styles.contact__form}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className={styles.form__group}>
            <label htmlFor="name" className={styles.form__label}>
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={styles.form__control}
              placeholder="Your name"
            />
          </div>

          <div className={styles.form__group}>
            <label htmlFor="email" className={styles.form__label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={styles.form__control}
              placeholder="your.email@example.com"
            />
          </div>

          <div className={styles.form__group}>
            <label htmlFor="message" className={styles.form__label}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className={styles.form__control}
              placeholder="Tell me about your project..."
              rows={6}
            />
          </div>

          <motion.button
            type="submit"
            className="btn btn-primary"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </motion.button>

          {submitStatus === 'success' && (
            <motion.p
              className={styles.form__success}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Message sent successfully! I'll get back to you soon.
            </motion.p>
          )}

          {submitStatus === 'error' && (
            <motion.p
              className={styles.form__error}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              There was an error sending your message. Please try again or email me directly at{' '}
              <a href="mailto:hello@nschmidt.me">hello@nschmidt.me</a>
            </motion.p>
          )}
        </motion.form>

        <motion.div
          className={styles.contact__alternative}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p>
            Prefer to email me directly?{' '}
            <a href="mailto:hello@nschmidt.me" className={styles.contact__email}>
              hello@nschmidt.me
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 