import React from 'react';
import Layout from '../../common/component/Layout'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Person from '../../assets/person_women.svg'
import PersonGlasses from '../../assets/person_glasses.svg'
import PersonMan from '../../assets/person_man.svg'
import Profile from '../../assets/profile_avatar.svg'
import './style.css';

const AceResult = () => {
  return (
    <Layout>
      <div className="aces-result">

        <div className="mob-profile">
          <img className="avatar" src={Profile} alt="profile" />
          <Button className="filter-btn" variant="outlined">Meet you peopel-speak list  </Button>
        </div>
        <Grid className="row" container spacing={8}>
          <Grid item xs={12} sm={12} md={6}>
            <div>
              <Typography variant="h2" className="title" >
                #REQUISTED TOPIC
              </Typography>
              <FormControl variant="outlined" className="">
                <InputLabel htmlFor="outlined-age-native-simple">Sort Result By</InputLabel>
                <Select
                  label="Age"
                  inputProps={{
                    name: 'age',
                    id: 'outlined-age-native-simple',
                  }} >
                  <option aria-label="None" value="" />
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </Select>
              </FormControl>
              <div className="result-info">
                <div>
                  <img src={Person} className="mob-img" alt="img"></img>
                </div>
                <div className="aces-user">
                  <img src={Person} className="aces-user-img" alt="img"></img>
                  <Typography variant="p" class="discription">
                    Mary Smith - Rep Score for Topic Snippet from topic registration Next available appointment Some Experience - $25/hour Chat SMS  Voice  Video.
                  </Typography>
                </div>
                <div>
                  <Button className="book">Book</Button>
                </div>
              </div>
              <div className="result-info">
                <div>
                  <img src={PersonGlasses} className="mob-img" alt="img"></img>
                </div>
                <div className="aces-user">
                  <img src={PersonGlasses} className="aces-user-img" alt="img"></img>
                  <Typography variant="p" class="discription">
                    Mary Smith - Rep Score for Topic Snippet from topic registration Next available appointment Some Experience - $25/hour Chat SMS  Voice  Video.
                  </Typography>
                </div>
                <div>
                  <Button className="book">Book</Button>
                </div>
              </div>
              <div className="result-info">
                <div>
                  <img src={PersonMan} className="mob-img" alt="img"></img>
                </div>
                <div className="aces-user">
                  <img src={PersonMan} className="aces-user-img" alt="img"></img>
                  <Typography variant="p" class="discription">
                    Mary Smith - Rep Score for Topic Snippet from topic registration Next available appointment Some Experience - $25/hour Chat SMS  Voice  Video.
                  </Typography>
                </div>
                <div>
                  <Button className="book">Book</Button>
                </div>
              </div>
            </div>
            <Button className="btn-primary">I need to expand my Search</Button>
          </Grid>

        </Grid>
      </div>
    </Layout>
  )
}

export default AceResult
