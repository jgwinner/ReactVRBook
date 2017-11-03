import React, { Component } from 'react';

import {
    asset,
    Box,
    Model,
    Text,
    View
} from 'react-vr';

// This is our teleport UI; you stare at it, and then you'll be moved to here.

export default class Floor extends Component {

    constructor() {
        super();
        this.state = {
            Height: -5
        };

    }


    render() {
        return (
            <Model
                source={{
                    gltf2: asset('MazeFloor.gltf'),
                }}
                style={{
                    transform: [{ translate: [this.props.X, -4, this.props.Z] }]
                }}
            />
        );
    }
}
