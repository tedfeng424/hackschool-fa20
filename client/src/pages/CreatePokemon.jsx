import React, { useState } from 'react';
import './style.css';

import Navbar from '../components/Navbar';
import CanvasDraw from 'react-canvas-draw';

const CreatePokemon = () => {
    const [name, setName] = useState();
    const [color, setColor] = useState('#000');

    /**
     * Method to handle the creation of a Pokemon on form submit.
     */
    const handleCreatePokemon = () => {
        return;
    };

    /**
     * Method to generate a random Pokemon name.
     */
    const randName = () => {
        // use some API to generate random pokemon name
        setName("Henry");
    };

    return (
        <div>
            <Navbar />
            <div className="create-page">
                <div class="drawing">
                    <h2>Draw your Pokemon here!</h2>
                    <div className="canvas">
                        <CanvasDraw hideGrid={true}
                            hideInterface={true}
                            brushColor={color}
                            brushRadius={5}
                            style={{ width: '100%', height: '100%' }} />
                    </div>
                    <div className="color-picker">
                        <label for="select-color">Color</label>
                        <input type="color" id="select-color" value={color} onChange={(e) => setColor(e.target.value)}></input>
                    </div>
                </div>
                <div className="pokemon-form">
                    <h2>Create a Pokemon</h2>
                    <form onSubmit={handleCreatePokemon}>
                        <div class="name-row">
                            <label for="name">Name</label>
                            <input type="text" id="name" name="name" value={name}></input>
                            <button type="button" onClick={randName}>Generate Random Name</button>
                        </div>
                        <div class="desc-row">
                            <label for="desc">Description</label>
                            <input type="text" id="desc" name="desc"></input>
                        </div>
                        <div class="type-row">
                            <label for="type1">Type 1</label>
                            <select id="type1" name="type1">
                                <option>Normal</option>
                                <option>Fire</option>
                                <option>Water</option>
                                <option>Grass</option>
                                <option>Electric</option>
                                <option>Psychic</option>
                                <option>Ice</option>
                                <option>Dragon</option>
                                <option>Dark</option>
                                <option>Fairy</option>
                                <option>Fighting</option>
                                <option>Flying</option>
                                <option>Poison</option>
                                <option>Ground</option>
                                <option>Rock</option>
                                <option>Bug</option>
                                <option>Ghost</option>
                                <option>Steel</option>
                            </select>
                            <label for="type2">Type 2</label>
                            <select id="type2" name="type2">
                                <option value=""></option>
                                <option>Normal</option>
                                <option>Fire</option>
                                <option>Water</option>
                                <option>Grass</option>
                                <option>Electric</option>
                                <option>Psychic</option>
                                <option>Ice</option>
                                <option>Dragon</option>
                                <option>Dark</option>
                                <option>Fairy</option>
                                <option>Fighting</option>
                                <option>Flying</option>
                                <option>Poison</option>
                                <option>Ground</option>
                                <option>Rock</option>
                                <option>Bug</option>
                                <option>Ghost</option>
                                <option>Steel</option>
                            </select>
                        </div>
                        <div class="move-row">
                            <label for="move1">Move 1</label>
                            <input type="text" id="move1" name="move1"></input>
                            <label for="move1-type">Type</label>
                            <select id="move1-type" name="move1-type">
                                <option>Normal</option>
                                <option>Fire</option>
                                <option>Water</option>
                                <option>Grass</option>
                                <option>Electric</option>
                                <option>Psychic</option>
                                <option>Ice</option>
                                <option>Dragon</option>
                                <option>Dark</option>
                                <option>Fairy</option>
                                <option>Fighting</option>
                                <option>Flying</option>
                                <option>Poison</option>
                                <option>Ground</option>
                                <option>Rock</option>
                                <option>Bug</option>
                                <option>Ghost</option>
                                <option>Steel</option>
                            </select>
                            <label for="move1-power">Power</label>
                            <input type="number" id="move1-power" name="move1-power" min="0" max="100" defaultValue="0"></input>
                        </div>
                        <div class="move-row">
                            <label for="move2">Move 2</label>
                            <input type="text" id="move2" name="move2"></input>
                            <label for="move2-type">Type</label>
                            <select id="move2-type" name="move2-type">
                                <option>Normal</option>
                                <option>Fire</option>
                                <option>Water</option>
                                <option>Grass</option>
                                <option>Electric</option>
                                <option>Psychic</option>
                                <option>Ice</option>
                                <option>Dragon</option>
                                <option>Dark</option>
                                <option>Fairy</option>
                                <option>Fighting</option>
                                <option>Flying</option>
                                <option>Poison</option>
                                <option>Ground</option>
                                <option>Rock</option>
                                <option>Bug</option>
                                <option>Ghost</option>
                                <option>Steel</option>
                            </select>
                            <label for="move2-power">Power</label>
                            <input type="number" id="move2-power" name="move2-power" min="0" max="100" defaultValue="0"></input>
                        </div>
                        <div class="move-row">
                            <label for="move3">Move 3</label>
                            <input type="text" id="move3" name="move3"></input>
                            <label for="move3-type">Type</label>
                            <select id="move3-type" name="move3-type">
                                <option>Normal</option>
                                <option>Fire</option>
                                <option>Water</option>
                                <option>Grass</option>
                                <option>Electric</option>
                                <option>Psychic</option>
                                <option>Ice</option>
                                <option>Dragon</option>
                                <option>Dark</option>
                                <option>Fairy</option>
                                <option>Fighting</option>
                                <option>Flying</option>
                                <option>Poison</option>
                                <option>Ground</option>
                                <option>Rock</option>
                                <option>Bug</option>
                                <option>Ghost</option>
                                <option>Steel</option>
                            </select>
                            <label for="move3-power">Power</label>
                            <input type="number" id="move3-power" name="move3-power" min="0" max="100" defaultValue="0"></input>
                        </div>
                        <div class="move-row">
                            <label for="move4">Move 4</label>
                            <input type="text" id="move4" name="move4"></input>
                            <label for="move4-type">Type</label>
                            <select id="move4-type" name="move4-type">
                                <option>Normal</option>
                                <option>Fire</option>
                                <option>Water</option>
                                <option>Grass</option>
                                <option>Electric</option>
                                <option>Psychic</option>
                                <option>Ice</option>
                                <option>Dragon</option>
                                <option>Dark</option>
                                <option>Fairy</option>
                                <option>Fighting</option>
                                <option>Flying</option>
                                <option>Poison</option>
                                <option>Ground</option>
                                <option>Rock</option>
                                <option>Bug</option>
                                <option>Ghost</option>
                                <option>Steel</option>
                            </select>
                            <label for="move4-power">Power</label>
                            <input type="number" id="move4-power" name="move4-power" min="0" max="100" defaultValue="0"></input>
                        </div>
                        <input type="submit" value="Submit"></input>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreatePokemon;