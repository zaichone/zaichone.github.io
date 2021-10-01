import logo from './logo.svg';
import './App.scss';
import {useEffect, useState} from 'react';

import Bio from './components/Bio';
import Projects from './components/Projects';

import Avatar from '@material-ui/core/Avatar';

import { ThemeProvider, createTheme } from '@material-ui/core/styles';

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: [
        'Prompt',
      ].join(','),
    },});
  const url = 'https://api.github.com/users/zaichone';

  const [profile, setProfile] = useState();

  useEffect(() => {
    async function getProfile(){
      const profile = await fetch(url);
      const result = await profile.json();
      //console.log('profile', result);
      setProfile(result);
    }
    getProfile();
  },[]);
  return (
    <ThemeProvider theme={theme}>
      {profile && <Bio profile={profile}/>}
    </ThemeProvider>
  );
}

export default App;
