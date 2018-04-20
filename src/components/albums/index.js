import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { getPhotos } from '../../helper';
import './albums.css';

class Albums extends React.Component {
    constructor() {
        super();

        this.state = {
            albums: []
        };
    }

    componentDidMount() {
        let _this = this,
            newAlbums;
        getPhotos().then((albums) => {
            newAlbums = albums.data.reduce((prev, cur) => {
                prev[cur.albumId] = prev[cur.albumId] || [];
                prev[cur.albumId].push(cur);
                return prev;
            }, Object.create(null));
            _this.setState({ albums: newAlbums });
        });
    }

    render() {
        let albums = Object.keys(this.state.albums).map((key) => {
            return (
                <Button bsSize="large">{key}</Button>
            )
        });

        return (
            <section className="container">
                <h1>Lista de álbuns</h1>
                <ButtonToolbar>
                    {albums}
                </ButtonToolbar>
            </section>
        )
    }
}

export default Albums;
