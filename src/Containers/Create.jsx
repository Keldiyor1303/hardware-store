import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import API from '../utils/axios';

import { Select, MenuItem, TextField, InputLabel, FormControl, TextareaAutosize, Button } from "@mui/material"
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import WatchIcon from '@mui/icons-material/Watch';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import Zoom from 'react-reveal/Zoom';

const Create = ({ postApi }) => {
    const [title, setTitle] = useState("")
    const [model, setModel] = useState("")
    const [price, setPrice] = useState("")
    const [stars, setStars] = useState("")
    const [type, setType] = useState("laptop")
    const [file, setFile] = useState(null)
    const [description, setDescription] = useState("")

    const navigate = useNavigate()


    function submit() {
        const form = new FormData()

        form.append("title", title)
        form.append("model", model)
        form.append("price", price)
        form.append("stars", stars)
        form.append("type", type)
        form.append("image", file)
        form.append("description", description)


        API.post("product", form)
            .then(res => {
                postApi()
                navigate("/")
            })

    }

    return (
        <Wrapper>
            <Zoom bottom cascade>
                <div className="info">

                    <TextField required color="info" label="Mahsulot nomi" variant="outlined" type="text" onChange={({ target }) => setTitle(target.value)} />

                    <TextField required color="info" label="Modeli" variant="outlined" type="text" onChange={({ target }) => setModel(target.value)} />

                    <TextField required color="info" label="Sotiladigan narxi" variant="outlined" type="text" onChange={({ target }) => setPrice(target.value)} />

                    <FormControl>
                        <InputLabel id="demo-simple-select-autowidth-label">Taniqlilik</InputLabel>
                        <Select onChange={({ target }) => setStars(target.value)} label="Taniqlilik">
                            <MenuItem value="0">0</MenuItem>
                            <MenuItem value="0.5">0.5</MenuItem>
                            <MenuItem value="1">1</MenuItem>
                            <MenuItem value="1.5">1.5</MenuItem>
                            <MenuItem value="2">2</MenuItem>
                            <MenuItem value="2.5">2.5</MenuItem>
                            <MenuItem value="3">3</MenuItem>
                            <MenuItem value="3.5">3.5</MenuItem>
                            <MenuItem value="4">4</MenuItem>
                            <MenuItem value="4.5">4.5</MenuItem>
                            <MenuItem value="5">5</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl>
                        <InputLabel id="demo-simple-select-autowidth-label">Turi</InputLabel>
                        <Select onChange={({ target }) => setType(target.value)} label="Turi">
                            <MenuItem className='select1' value="laptop"><LaptopMacIcon /> kompyuter </MenuItem>
                            <MenuItem value="mobile"><SmartphoneIcon /> telefon</MenuItem>
                            <MenuItem value="watch"><WatchIcon /> soat</MenuItem>
                        </Select>
                    </FormControl>

                    <TextField required color="info" variant="outlined" type="file" onChange={({ target }) => setFile(target.files[0])} />

                    <TextareaAutosize required color='info' variant="outlined" minRows={5} className="textarea" placeholder="Mahsulot haqida qisqacha ma`lumot" onChange={({ target }) => setDescription(target.value)} />

                    <Button variant="contained" color="success" className='btn' onClick={submit}><AddShoppingCartIcon /> Qo`shish</Button>

                </div>
            </Zoom>
        </Wrapper >
    );
}

export default Create;

const Wrapper = styled.div`
    padding: 40px;

    .info {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 32px;
    }



    .textarea {
        grid-column: span 3;
        padding: 8px;
        resize: none;
        font-size: 16px;
    }

    .btn {
        grid-column: 3/4;
        height: 50px;
    }

    .select1 {
        display: flex;
        align-items: center;
    }
`