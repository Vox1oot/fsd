import { Outlet } from 'react-router';

export function Layout() {
    return (
        <div>
            <div>Шапка</div>
            <Outlet />
            <div>Подвал</div>
        </div>
    );
}
