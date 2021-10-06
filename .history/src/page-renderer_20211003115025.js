import React from 'react';
import { useRouteMatch } from 'react-router-dom';

const generatePage = page => {
    const component = () => require(`./pages/${page}`).default

/*---------            this generates each page dynamically         ---------*/
    try {
        return React.createElement(component())
    } catch (error) {
        console.warn(error);
 /*---------            this creates the 404 page seen         ---------*/       
        return React.createElement(() => 404)
    }
}

export default function PageRenderer() {

    const {
        params: { page }
    } = useRouteMatch()

    return generatePage(page)
}
