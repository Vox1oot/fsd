import {
    CommunityPage,
    CoursePage,
    CoursesPage,
    HelpPage,
    HomePage,
    PremiumPage,
    ProfilePage,
    ReferralPage,
    SkillsPage,
} from '@/pages';
import { Navigate, createBrowserRouter } from 'react-router';

import { Layout } from '@app/layout/Layout';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            { index: true, Component: HomePage },
            {
                path: 'courses',
                children: [
                    { index: true, Component: CoursesPage },
                    { path: ':alias', Component: CoursePage },
                ],
            },
            { path: 'skills', Component: SkillsPage },
            { path: 'premium', Component: PremiumPage },
            { path: 'community', Component: CommunityPage },
            { path: 'referral', Component: ReferralPage },
            { path: 'help', Component: HelpPage },
            {
                path: 'profile',
                children: [
                    { index: true, element: <Navigate to="my" replace /> },
                    { path: 'my', Component: ProfilePage },
                ],
            },
        ],
    },
]);
