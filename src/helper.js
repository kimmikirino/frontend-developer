import routes from './config/config';
import axios from 'axios';

const photosRoute = routes.api + 'photos';

export function getPhotos(){
    return axios.get(photosRoute, {
        headers: {
            crossdomain: true,
            'Access-Control-Allow-Origin': '*'
        }
    });
}