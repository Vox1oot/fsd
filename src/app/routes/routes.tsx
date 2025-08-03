import { CategoryPage } from '@/pages';
import { createBrowserRouter } from 'react-router';

import { Layout } from '@app/layout/Layout';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            { index: true, element: <a>Main</a> },
            { path: 'community', element: <a>Community</a> },
            { path: ':category', Component: CategoryPage },
            {
                path: 'article',
                children: [{ path: ':alias', element: <a>Article</a> }],
            },
            {
                path: 'profile',
                children: [
                    { index: true, element: <a>Profile</a> },
                    { path: 'edit', element: <a>EditProfile</a> },
                ],
            },
        ],
    },
]);
