import { GET_PUBLICATIONS } from "./actionTypes";

export const getPublications = (publications) => ({
    type: GET_PUBLICATIONS,
    publications,
});

export const fecthPublications = (id, dispatch) => {
    return async () => {
        const res = await fetch(`/authors/${id}/publications`);
        const publications = await res.json();
        dispatch(getPublications(publications.data));
    }
};