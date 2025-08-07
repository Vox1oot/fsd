import path from 'path';

export const ROUTES = {
    HOME: '/',
    GET_COURSES() {
        return path.join(this.HOME, 'courses');
    },
    GET_COURSE(alias: string) {
        return path.join(this.GET_COURSES(), alias);
    },
    GET_SKILLS() {
        return path.join(this.HOME, 'skills');
    },
    GET_PREMIUM() {
        return path.join(this.HOME, 'premium');
    },
    GET_COMMUNITY() {
        return path.join(this.HOME, 'community');
    },
    GET_REFERRAL() {
        return path.join(this.HOME, 'referral');
    },
    GET_HELP() {
        return path.join(this.HOME, 'help');
    },
    GET_PROFILE() {
        return path.join(this.HOME, 'profile');
    },
    GET_PROFILE_MY() {
        return path.join(this.GET_PROFILE(), 'my');
    },
};
