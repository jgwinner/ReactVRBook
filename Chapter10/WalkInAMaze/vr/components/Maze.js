import React, { Component } from 'react';
var mersenneTwister = require('mersenne-twister');

import {
    View
} from 'react-vr';

import Hedge from './Hedge.js';
import Floor from './Floor.js';
import Gem from './Gem.js';

export default class Maze extends Component {

    constructor(props) {
        super(props);
        this.props = {
            cellSpacing: 3,
            sizeX: 4,
            sizeZ: 4,
            seed: 12345
        };
        this.state = {
            startX: 0,
            startZ: -4,
            mazeVertical: [],
            mazeHorizontal: [],
            curLine: [],
        };

    }
    componentWillMount() {
        this.GenerateMaze();
    }

    GenerateMaze() {
        var rng = new mersenneTwister(this.props.seed);
        var j = 0;
        var k = 0;

        var mazeVerti = [];
        var mazeHoriz = [];

        //jdg: we're doing some elementary type checking here ... also guards against bad usage
        //jdg: such as calling it with sizeX='4' ... because no one would do that :)
        sizeX = Math.min(Math.max(3, this.props.sizeX), 100);
        sizeZ = Math.min(Math.max(3, this.props.sizeZ), 100);
        var n = sizeX * sizeZ - 1;
        if (n < 0) { console.log("illegal maze dimensions"); return; } else { console.log("Generating" + sizeX + "x" + sizeZ + " Maze"); }
        for (j = 0; j < sizeX + 1; j++) mazeHoriz[j] = [];
        for (j = 0; j < sizeZ + 1; j++) mazeVerti[j] = [];
        var here = [Math.floor(rng.random() * sizeX), Math.floor(rng.random() * sizeZ)];
        var path = [here];
        var unvisited = [];
        var SizeZPlus1 = Math.floor(sizeZ) + 1;

        for (j = 0; j < sizeX + 2; j++) {
            unvisited[j] = [];
            for (k = 0; k < SizeZPlus1; k++) {
                unvisited[j].push(j > 0 && j < SizeZPlus1 && k > 0 && (j != here[0] + 1 || k != here[1] + 1));
            }
        }
        while (0 < n) {
            var potential = [
                [here[0] + 1, here[1]],
                [here[0], here[1] + 1],
                [here[0] - 1, here[1]],
                [here[0], here[1] - 1]];
            var neighbors = [];
            for (j = 0; j < 4; j++)
                if (unvisited[potential[j][0] + 1][potential[j][1] + 1]) {
                    neighbors.push(potential[j]);
                }
            if (neighbors.length) {
                n = n - 1;
                var randresult = rng.random();
                next = neighbors[Math.floor(randresult * neighbors.length)];
                unvisited[next[0] + 1][next[1] + 1] = false;
                if (next[0] === here[0]) {
                    mazeHoriz[next[0]][(next[1] + here[1] - 1) / 2] = true;
                }
                else {
                    mazeVerti[(next[0] + here[0] - 1) / 2][next[1]] = true;
                }
                path.push(here = next);
            } else
                here = path.pop();
        }

        this.setState({ mazeVertical: mazeVerti });
        this.setState({ mazeHorizontal: mazeHoriz });
    }


    render() {

        row = 0;
        var mazeHedges = [];
        console.log("Rendering maze of " + this.props.sizeX + "x" + this.props.sizeZ);
        for (j = 0; j < this.props.sizeX * 2 + 1; j++) {
            var line = [];
            if (0 === j % 2) {
                for (k = 0; k < this.props.sizeZ * 2 + 1; k++)
                    if (0 === k % 2) line[k] = 'x';
                    else if (j > 0 && this.state.mazeVertical[j / 2 - 1][Math.floor(k / 2)]) line[k] = ' ';
                    else line[k] = 'x';
            }
            else {
                for (k = 0; k < this.props.sizeZ * 2 + 1; k++)
                    if (0 === k % 2) {
                        if (k > 0 && this.state.mazeHorizontal[(j - 1) / 2][k / 2 - 1]) line[k] = ' ';
                        else line[k] = 'x';
                    } else line[k] = ' ';
            }
            //mark these as 1 and 2, so there's no gem there
            if (0 === j) line[1] = '1'; //end
            //start is always (props.SizeX * 2 -1) * this.props.CellSpacing + this.props.StartX ;
            //start  is always (props.SizeZ * 2) * this.props.CellSpacing + this.props.StartZ ;

            if (this.props.sizeX * 2 - 1 === j) line[2 * this.props.sizeZ] = '2';

            //TTD: Break into two
            var linestring = "";

            for (var i = 0; i < this.props.sizeX * 2 + 1; i++) {
                linestring += line[i];
                //let x = this.state.StartX + (this.props.CellSpacing * i);
                //let z = this.state.StartZ + (row * this.props.CellSpacing);
                let x = this.props.cellSpacing * i;
                let z = row * this.props.cellSpacing;
                var cellLoc = { X: x, Z: z };

                mazeHedges.push(<Floor {...cellLoc} />);
                if (line[i] == 'x') {
                    mazeHedges.push(<Hedge {...cellLoc} />);
                }
                else if (line[i] == ' ') {
                    mazeHedges.push(<Gem {...cellLoc} />);
                }
                else if (line[i] == '1') {
                    //this is our finish ... send an event to our parent for the win!
                }
                else if (line[i] == '2') {
                    //this is our start, send an event to our parent for the right position.
                }
            }
            console.log("Maze:" + linestring);
            ++row;
        }
        return (
            <View>
                {mazeHedges}
            </View>
        );
    }

}
