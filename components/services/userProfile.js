import * as baseService from './base';

function all() {
    return baseService.get(`/api/userProfile/${id}/selfies`);
}

function one(id) {
    return baseService.get(`/api/userProfile/${id}`);
}

export { all, one, insert, update, destroy };