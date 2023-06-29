import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Box} from '@mui/material'

import { NavBar, Feed, VideoDetail, ChannelDetail, SearchFeed } from './components';



function App() {
  return (
    
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#1A1C22'}}>
        <NavBar/>
        <Routes>
          <Route path='/' excact element={<Feed/>}/>
          <Route path='/video/:id' element={<VideoDetail/>}/>
          <Route path='/channel/:channelName' element={<ChannelDetail/>}/>
          <Route path='/search/:searchTerm' element={<SearchFeed/>}/>
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
