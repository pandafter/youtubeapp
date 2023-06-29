import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../utils/constants'
import ChannelDetail from './ChannelDetail'

const ChannelCard = ({channelDetail}) => {
  return (
    <Box
    sx={{boxShadow: '0px 0px 10px #580FE6', borderRadius: 'none',  width: { md: '320px', xs: '100%'}, height: 300}}>
        <Link to={`channel/${channelDetail?.id?.channelId}`}>
            <CardContent sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff'}}>
                <CardMedia image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                alt={channelDetail?.snippet?.title}
                sx={{ justifyContent: 'center', alignItems: 'center', borderRadius: '50%', height: '180px', width: '180px', mb: 2, ml: 6, border: '1px solid #e3e3e3'}}/>
                <Typography variant='h6'>
                    {channelDetail?.snippet?.title}
                    <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '5px'}}/>
                </Typography>
            </CardContent>
        </Link>
    </Box>
  )
}

export default ChannelCard