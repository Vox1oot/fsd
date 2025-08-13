import React from 'react';

import styles from './Footer.module.css';

interface FooterProps {
    className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className }) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={`${styles.footer} ${className || ''}`}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.section}>
                        <h3 className={styles.title}>О нас</h3>
                        <p className={styles.text}>
                            Краткое описание компании или проекта
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h3 className={styles.title}>Контакты</h3>
                        <ul className={styles.list}>
                            <li>Email: info@example.com</li>
                            <li>Телефон: +7 (123) 456-78-90</li>
                        </ul>
                    </div>

                    <div className={styles.section}>
                        <h3 className={styles.title}>Социальные сети</h3>
                        <div className={styles.social}>
                            <a href="#" className={styles.link}>
                                VK
                            </a>
                            <a href="#" className={styles.link}>
                                Telegram
                            </a>
                            <a href="#" className={styles.link}>
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p className={styles.copyright}>
                        © {currentYear} Все права защищены
                    </p>
                </div>
            </div>
        </footer>
    );
};
