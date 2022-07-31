import React,{useState, useRef} from 'react'
import { styles } from './styles';
import Iframe from 'react-iframe';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { FormLabel } from '@mui/material';

export default function ApplicationForm() {

  const divForScroll = useRef(null)

  const [creds, setCreds] = useState({ Fname: '',Lname:"",mobile:"",email:"",designation:"",gstin:"", password: '',nameBa:"",streetHouseNoBa:"",regionBa:"",postalCodeBa:"",cityBa:"",countryBa:"",areaBa:"" });

  const [showPassword, setShowPassword] = useState(false)

  const [check, setCheck] = useState("yes")

  const handleChange = (key) => {
    key.preventDefault();
    setCreds({ ...creds, [key.target.id]: key.target.value });
    console.log(key);
  };

  const [val,setVal] = useState({namePa:"",streetHouseNoPa:"",postalCodePa:"",cityPa:"",regionPa:"",countryPa:"",areaPa:""})

  const matchValue =(key)=>{
    key.preventDefault();
    setVal({
    namePa:creds.nameBa,
    streetHouseNoPa:creds.streetHouseNoBa,
    postalCodePa:creds.postalCodeBa,
    cityPa:creds.cityBa,
    regionPa:creds.regionBa,
    countryPa:creds.countryBa,
    areaPa:creds.areaBa
  })
  }


  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    
  }
  
  const mediaQuery = window.matchMedia("(max-width: 550px)");

  return (
    <>
        <div ref={divForScroll}></div>
        <Container maxWidth="xl" sx={styles.container}>
            <img  style={styles.imgLogo} src={require('../../assets/image/logo.png')} alt="" srcset="" />
            <Typography
                sx={styles.head} >
                Bulk Generation System
            </Typography>
            <Typography
                sx={styles.signupText} >
               Personal Info
            </Typography>
           <Box sx={styles.row}>
                <TextField
                id="Fname"
                type="text"
                label="First Name"
                placeholder="First Name"
                value={creds.Fname || ''}
                onChange={handleChange}
                sx={styles.inputField}
            />
            <TextField
                id="Lname"
                type="text"
                label="Last Name"
                placeholder="Last Name"
                value={creds.Lname || ''}
                onChange={handleChange}
                sx={styles.inputField}
            />
           </Box>
           <Box sx={styles.row}>
                <TextField
                id="mobile"
                type="number"
                label="Mobile Number"
                placeholder="Mobile Number"
                value={creds.mobile || ''}
                onChange={handleChange}
                sx={styles.inputField}
            />
            <TextField
                id="email"
                type="email"
                label="Email Id"
                placeholder="Email Id"
                value={creds.email || ''}
                onChange={handleChange}
                sx={styles.inputField}
            />
           </Box>
           <Box sx={styles.row}>
                <TextField
                id="designation"
                type="text"
                label="Designation"
                placeholder="Designation"
                value={creds.designation || ''}
                onChange={handleChange}
                sx={styles.inputField}
            />
                    <TextField
                    id="gstin"
                    type="number"
                    label="GSTIN"
                    placeholder="GSTIN"
                    value={creds.gstin || ''}
                    onChange={handleChange}
                    sx={styles.inputField}
                />
           </Box>
           <Box sx = {styles.row}>
           <FormControl variant="outlined" sx={styles.inputField}>
          <InputLabel htmlFor="outlined-adornment-password">Create Passsword</InputLabel>
          <OutlinedInput
            id="password"
            placeholder="*****"
            type={showPassword ? 'text' : 'password'}
            value={creds.password || ''}
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Create Password"
          />
        </FormControl>
        <FormControl variant="outlined" sx={styles.inputField}>
          <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
          <OutlinedInput
            id="confirmPassword"
            placeholder="*****"
            type={showPassword ? 'text' : 'password'}
            value={creds.confirmPassword || ''}
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Confirm Password"
          />
        </FormControl>
           </Box>
       
           <Box sx={styles.gstUploadRow}>
            <Typography sx={styles.inputBtnText}>
                Upload your GSTIN Document
            </Typography>
            <input style={styles.inputBtn} type={"file"}></input>
            </Box>

            <Typography
                sx={styles.signupText} >
               Billing Address
            </Typography>
           <Box sx={styles.row}>
           <TextField
                id="nameBa"
                type="text"
                label="Name"
                placeholder="Name"
                value={creds.nameBa || ''}
                onChange={handleChange}
                sx={styles.inputField}
            />
                <TextField
                id="streetHouseNoBa"
                type="text"
                label="Street/House Number"
                placeholder="Street/House Number"
                value={creds.streetHouseNoBa || ''}
                onChange={handleChange}
                sx={styles.inputField}
            />
            
           </Box>
           <Box sx={styles.row}>
           <TextField
                id="Region"
                type="text"
                label="Region"
                placeholder="34 Jharkhand"
                value="34 Jharkhand"
                onChange={handleChange}
                sx={styles.inputFieldRO}
            />
           <TextField
                id="postalCodeBa"
                type="number"
                label="Postal Code"
                placeholder="Postal Code"
                value={creds.postalCodeBa || ''}
                onChange={handleChange}
                sx={styles.inputField}
            />
           </Box>
           
           <Box sx={styles.row}>
                <TextField
                id="cityBa"
                type="text"
                label="City"
                placeholder="Jamshedpur"
                value={creds.cityBa||"Jamshedpur"}
                onChange={handleChange}
                sx={styles.inputFieldRO}
            />
            <TextField
                id="countryBa"
                type="text"
                label="Country"
                placeholder="India"
                value={creds.countryBa||"India"}
                onChange={handleChange}
                sx={styles.inputFieldRO}
            />
           </Box>
           
           <Box sx={styles.row}>
              <FormControl sx={styles.inputField} fullWidth>
            <InputLabel id="AREA">area</InputLabel>
            <Select
              labelId="AREA"
              id="areaBa"
              value={creds.areaBa || ''}
              label="Area"
              onChange={handleChange}
            >
              <MenuItem value={"RD"}>Ramdasbhatta</MenuItem>
              <MenuItem value={"KSD"}>Kashidih</MenuItem>
              <MenuItem value={"NT"}>Northern Town</MenuItem>
              <MenuItem value={"BRD"}>Baridih</MenuItem>
              <MenuItem value={"BRM"}>Burmamines</MenuItem>
            </Select>
          </FormControl>
          <Box sx={styles.inputField}></Box>
           </Box>

































        
           <Typography
                sx={styles.signupText} >
               Pickup Address
            </Typography>


            <FormGroup>
              <FormControlLabel control={<Checkbox onChange={matchValue}/>}  label="Address same as Billing Address" />
              {console.log()}
            </FormGroup>



           <Box sx={styles.row}>
           <TextField
                id="namePa"
                type="text"
                label="Name"
                placeholder="Name"
                value={val.namePa || ''}
                onChange={handleChange}
                sx={styles.inputField}
            />


                <TextField
                id="streetHouseNoPa"
                type="text"
                label="Street/House Number"
                placeholder="Street/House Number"
                value={val.streetHouseNoPa || ''}
                onChange={handleChange}
                sx={styles.inputField}
            />


           </Box>






           <Box sx={styles.row}>
           <TextField
                id="postalCodePa"
                type="number"
                label="Postal Code"
                placeholder="Postal Code"
                value={val.postalCodePa || ''}
                onChange={handleChange}
                sx={styles.inputField}
            />
                <TextField
                id="cityPa"
                type="text"
                label="City"
                placeholder="Jamshedpur"
                value={val.cityPa || 'Jamshedpur'}
                onChange={handleChange}
                sx={styles.inputFieldRO}
            />
           
           </Box>
           <Box sx={styles.row}>
           <TextField
                id="regionPa"
                type="text"
                label="Region"
                placeholder="34 Jharkhand"
                value={val.regionPa || "34 Jharkhand"}
                onChange={handleChange}
                sx={styles.inputFieldRO}
            />
             <TextField
                id="country"
                type="text"
                label="Country"
                placeholder="India"
                value={val.countryPa || "India"}
                onChange={handleChange}
                sx={styles.inputFieldRO}
            />
           </Box>
           <Box sx={styles.row}>
           <FormControl sx={styles.inputField} fullWidth>
        <InputLabel id="Area">area</InputLabel>
        <Select
          labelId="Area"
          id="areaPa"
          value={val.areaPa || ''}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={"RD"}>Ramdasbhatta</MenuItem>
          <MenuItem value={"KSD"}>Kashidih</MenuItem>
          <MenuItem value={"NT"}>Northern Town</MenuItem>
          <MenuItem value={"BRD"}>Baridih</MenuItem>
          <MenuItem value={"BRM"}>Burmamines</MenuItem>
        </Select>
      </FormControl>
      <Box sx={styles.inputField}></Box>
           </Box>
           <Box sx={styles.row}>
                <TextField
                id="Longitude"
                type="text"
                label="Longitude"
                placeholder="22.804565"
                value={val.Longitude || ''}
                onChange={handleChange}
                sx={styles.inputField}
            />
           <TextField
                id="Latitude"
                type="text"
                label="Latitude"
                placeholder="86.202873"
                value={val.Latitude || ''}
                onChange={handleChange}
                sx={styles.inputField}
            />
           </Box>
            <Typography  sx={styles.signupText}>Select On Map</Typography>
           <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117711.91484915413!2d86.17577080000002!3d22.7840284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e31989f0e2b5%3A0xeeec8e81ce9b344!2sJamshedpur%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1659242270720!5m2!1sen!2sin"
            width="100%"
            height="450px"
            id="map"
            className="myClassname"
            display="initial"
            position="relative"
            allow = "fullscreen"
            />

            

<FormControl>
  <FormLabel id="Frequency" sx={styles.signupText}>Frequency of Collection per day</FormLabel>
  <RadioGroup
    row
    sx = {styles.radioGroup}
    aria-labelledby="Frequency of Collection per day"
    defaultValue="Once"
    name="frequency"
  >
    <FormControlLabel value="Once" control={<Radio />} label="Once" />
    <FormControlLabel value="Twice" control={<Radio />} label="Twice" />
  </RadioGroup>
</FormControl>


        <Button 
        variant="contained" 
        sx={styles.submitBtn} 
        onClick={submitHandler}
        >Submit Application
        </Button>
        <IconButton onClick={()=>{divForScroll.current.scrollIntoView({behavior: "smooth"})}} sx={styles.topScrollBtn} color="primary" aria-label="upload picture" component="label">
        <KeyboardArrowUpIcon />
      </IconButton>
        </Container>
       
    </>
  )
}
