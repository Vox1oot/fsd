import { Navigate, createBrowserRouter } from 'react-router';

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
import { ROUTES } from '@/shared/routes';
import { Layout } from '@app/layout/Layout';

export const router = createBrowserRouter([
    {
        path: ROUTES.HOME,
        Component: Layout,
        children: [
            { index: true, Component: HomePage },
            {
                path: ROUTES.COURSES,
                children: [
                    { index: true, Component: CoursesPage },
                    { path: ROUTES.COURSE_ALIAS, Component: CoursePage },
                ],
            },
            { path: ROUTES.SKILLS, Component: SkillsPage },
            { path: ROUTES.PREMIUM, Component: PremiumPage },
            { path: ROUTES.COMMUNITY, Component: CommunityPage },
            { path: ROUTES.REFERRAL, Component: ReferralPage },
            { path: ROUTES.HELP, Component: HelpPage },
            {
                path: ROUTES.PROFILE,
                children: [
                    {
                        index: true,
                        element: <Navigate to={ROUTES.PROFILE_MY} replace />,
                    },
                    { path: ROUTES.PROFILE_MY, Component: ProfilePage },
                ],
            },
        ],
    },
]);
