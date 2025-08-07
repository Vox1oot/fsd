import path from 'path';

export const ROUTES = {
    HOME: '/',
    COURSES: 'courses',
    COURSE_ALIAS: ':alias',
    SKILLS: 'skills',
    PREMIUM: 'premium',
    COMMUNITY: 'community',
    REFERRAL: 'referral',
    HELP: 'help',
    PROFILE: 'profile',
    PROFILE_MY: 'my',

    GET_COURSES() {
        return path.join(this.HOME, this.COURSES);
    },
    GET_COURSE(alias: string) {
        return path.join(this.GET_COURSES(), alias);
    },
    GET_SKILLS() {
        return path.join(this.HOME, this.SKILLS);
    },
    GET_PREMIUM() {
        return path.join(this.HOME, this.PREMIUM);
    },
    GET_COMMUNITY() {
        return path.join(this.HOME, this.COMMUNITY);
    },
    GET_REFERRAL() {
        return path.join(this.HOME, this.REFERRAL);
    },
    GET_HELP() {
        return path.join(this.HOME, this.HELP);
    },
    GET_PROFILE() {
        return path.join(this.HOME, this.PROFILE);
    },
    GET_PROFILE_MY() {
        return path.join(this.GET_PROFILE(), this.PROFILE_MY);
    },
};
