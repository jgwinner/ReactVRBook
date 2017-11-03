import React, { Component } from 'react';

import {
    asset,
    Box,
    Model,
    Text,
    View
} from 'react-vr';


export default class Hedge extends Component {

    render() {
        return (
            <Model
                source={{
                    gltf2: asset('Long\\LongAlpha3.gltf'),
                }}
                style={{
                    transform: [
                        { translate: [this.props.X, -4, this.props.Z] },
                        { scale: [1, 1, 1] }
                    ]
                }}
            />
        );
    }
}
