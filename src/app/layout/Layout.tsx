import { Outlet } from 'react-router';

import { Footer } from '@/shared/ui/';

import styles from './Layout.module.css';

export function Layout() {
    return (
        <div className={styles.container}>
            <div>Меню</div>
            <Outlet />
            <Footer />
        </div>
    );
}
