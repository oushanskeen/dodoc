   
    import React, {useState,useEffect} from 'react';
    import {
        GlobalStyle,Container,Grid,AreaBox,Text,
        TextBox,Button,ParamBox,naked,
        NavbarDropdown,NavbarDropdownContent,link
    } from '../css/style.js';
    const Ownerdic = () => (
        <div>
        <GlobalStyle/>
        <Container>
            <Grid>
                <AreaBox g={[2,2,10,5]} fd="column"> 
                    <div>СПРАВОЧНИК НАШИХ ФИРМ:</div>
                    <select id="ownerDicSelector">
                        <option value="OOO UKI">ООО УКИ</option>
                        <option value="IP Popov">ИП Попов</option>
                    </select>
                </AreaBox>
            </Grid>
        </Container>
        </div>
    );
    export default Ownerdic;

