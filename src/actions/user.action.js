export const LOAD_USER = 'load user';

export const loadUserAction = (payload) => ({ type: LOAD_USER, payload })

export const RESET = 'reset';

export const reset = () => ({ type: RESET });

export const DONE = 'DONE';

export const done = () => ({ type: DONE });
