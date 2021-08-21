import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Layout from '../../common/component/Layout'
import Clock from '../../assets/clock.svg'
import Doller from '../../assets/doller_Icon.svg'
import Star from '../../assets/star.svg'
import Twitch from '../../assets/twitch.png'
import './style.css';

const AdvanceSearch = () => {
  const [topic, setTopic] = useState(false)
  return (
    <Layout>
      <div className="advance-search">
        <Grid container spacing={8}>
          <Grid item xs={12} sm={12} md={8} lg={6}>
            <div>
              {!topic ?
                <div className="search-input" >
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    placeholder="Help me with ...(topic)"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                :
                <Typography variant="h2" className="title" >
                  #Topic  (if not topic entered yet , this wouls b Search bar )
                </Typography>
              }
              <Grid className="row" container spacing={0}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="p" className="" >
                    i dont like meet durning
                  </Typography>
                  <div className="select-opt">
                    <div>
                      <FormControlLabel
                        control={<Checkbox name="checkedB" color="primary" />} label="8am to Noon" />
                      <FormControlLabel
                        control={<Checkbox name="checkedB" color="primary" />} label="Noon to 4PM" />
                      <FormControlLabel
                        control={<Checkbox name="checkedB" color="primary" />} label="4PCM to 8PM" />
                      <FormControlLabel
                        control={<Checkbox name="checkedB" color="primary" />} label="8PM to Midnight" />
                      <FormControlLabel
                        control={<Checkbox name="checkedB" color="primary" />} label="Midnight to 8PM " />
                    </div>
                    <div>  <img src={Clock} alt="img" /> </div>
                  </div>
                  <div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="p" className="" >
                    i dont like meet durning
                  </Typography>
                  <div className="select-opt">
                    <div>
                      <FormControlLabel
                        control={<Checkbox name="checkedB" color="primary" />} label="5 Star " />
                      <FormControlLabel
                        control={<Checkbox name="checkedB" color="primary" />} label="5 Star" />
                      <FormControlLabel
                        control={<Checkbox name="checkedB" color="primary" />} label="5 Star" />
                      <FormControlLabel
                        control={<Checkbox name="checkedB" color="primary" />} label="5 Star" />
                      <FormControlLabel
                        control={<Checkbox name="checkedB" color="primary" />} label="5 Star " />
                    </div>
                    <div> <img src={Star} alt="img" /></div>
                  </div>
                  <div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="p" className="" >
                    My Ace's Reputation Score Should be..
                  </Typography>
                  <div className="select-opt">
                    <div>
                      <FormControlLabel
                        control={<Checkbox name="checkedB" color="primary" />} label="Newbie" />
                      <FormControlLabel
                        control={<Checkbox name="checkedB" color="primary" />} label="Some Exprience" />
                      <FormControlLabel
                        control={<Checkbox name="checkedB" color="primary" />} label="Solid Pro" />
                      <FormControlLabel
                        control={<Checkbox name="checkedB" color="primary" />} label="Worte the Book " />

                    </div>
                    <div> <img src={Doller} alt="img" /></div>
                  </div>
                  <div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="p" className="" >
                    I dont like Connect using...
                  </Typography>
                  <div className="select-opt">
                    <div>
                      <FormControlLabel
                        control={<Checkbox name="checkedB" color="primary" />} label="Chat" />
                      <FormControlLabel
                        control={<Checkbox name="checkedB" color="primary" />} label="Voice " />
                      <FormControlLabel
                        control={<Checkbox name="checkedB" color="primary" />} label="Video" />
                      <FormControlLabel
                        control={<Checkbox name="checkedB" color="primary" />} label="SMS" />

                    </div>
                    <div> <img src={Twitch} alt="img" /></div>
                  </div>
                  <div>
                  </div>
                </Grid>
              </Grid>
              <Button component={Link} to="ace_results" className="show-aces">Show me the Aces! </Button>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={6} >
          </Grid>
        </Grid>
      </div>
    </Layout>
  )
}

export default AdvanceSearch
