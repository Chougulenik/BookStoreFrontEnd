import React from 'react';
import Header from '../Dashboard/Navbar/Navbar';
import './UserDetails.css';
import './CustomerDetails.css';
import { Card } from '@mui/material';

import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Footer from '../Footer/Footer';


export const CustomerDetails = () => {
  return (
    <div>
        <Header></Header>
        <div>
       <Card className='card'>
       <div className="myCartTextBox"><span>Customer Details</span></div>
       <div className="userDetailsMainBox">
            <div className="custDetailTextBox">
                <span>Customer Details</span>
            </div>
            <div className="NamePhNoBox">
                <div className="NameBox">
                    <div className="smallTextBox">Full Name</div>
                    <div className="FNinputBox"><OutlinedInput style={{ width: "100%", height: "100%", borderRadius: "1px" }}  autoFocus/></div>

                </div>
                <div className="PhoneBox">

                    <div className="smallTextBox">Mobile Number</div>
                    <div className="FNinputBox"><OutlinedInput style={{ width: "100%", height: "100%", borderRadius: "0px" }} /></div>
                </div>
            </div>

            <div className="AddressBox">
                <div className="smallTextBox">Address</div>
                <div className="addressinputBox"><TextField multiline rows={2} style={{ width: "100%", height: "100%", borderRadius: "0px" }} /></div>
            </div>

            <div className="LocationDetailsBox">
                <div className="cityBox">
                    <div className="smallTextBox">city/town</div>
                    <div className="FNinputBox"><OutlinedInput style={{ width: "100%", height: "100%", borderRadius: "0px" }} /></div>
                </div>
                <div className="stateBox">
                    <div className="smallTextBox">State</div>
                    <div className="FNinputBox"><OutlinedInput style={{ width: "100%", height: "100%", borderRadius: "0px" }} /></div>
                </div>
            </div>
            <div className="custTypeDetailsBox">
                <div className="smallTextBox">Type</div>
                <div className="radioInputBoxes">
                    <RadioGroup row >
                        <FormControlLabel value="Home" control={<Radio size="small"/>} label="Home" />
                        <FormControlLabel value="Work" control={<Radio size="small"/>} label="Work" />
                        <FormControlLabel value="Other" control={<Radio size="small"/>} label="Other" />
                    </RadioGroup>
                </div>
            </div>


            <div className="buttonBox">
            {
                 <Button variant="contained" style={{ width: "100%" }} >CONTINUE</Button> 
            }
                

            </div>
        </div>

      
       </Card>
      </div> 
      <Footer></Footer>
    </div>
    
  )
}

export default CustomerDetails;
