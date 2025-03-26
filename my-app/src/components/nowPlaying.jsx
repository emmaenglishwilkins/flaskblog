import React, { useEffect, useState } from 'react';
import querystring from 'querystring';
import { Buffer } from 'buffer';
import { AiOutlinePauseCircle } from 'react-icons/ai';
import { BiErrorCircle } from 'react-icons/bi';
import { HiOutlineStatusOffline } from 'react-icons/hi';
import './nowPlaying.css'; // Make sure to create this CSS file

// IMPORTANT: Replace these with your actual Spotify API credentials
const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const client_id = 'a121e1a816c54502aecbab099cf0992b';
const client_secret = '8fa99530c26046c192c938ef22bbb9bb';
const refresh_token = 'AQBsctC1MrxJ3_RZoFdcs8V1Cb55shV7C_1TW9s8UZcGaI5XUzf7MC8kw4RXfOthF2SE0uAXJxBQjHeh6LZvDVkaaanLxgiwwNFrjuKdWNBLbubcYo7ssjJSabjm1WCulNh_nwiRuSBgESr5TMTisck6mNjuSVJ_62La2EpV0NwNXfXkKoc8p1PDvxsEtF5HcedMkUwJXRpWZYrSwcYwtjnV9A5-plWi2w';

// Function to generate access token
const getAccessToken = async (client_id, client_secret, refresh_token) => {
  const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  });

  return response.json();
};

// Function to get currently playing song
const getNowPlaying = async () => {
  try {
    const { access_token } = await getAccessToken(client_id, client_secret, refresh_token);

    const response = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (response.status > 400) {
      throw new Error('Unable to Fetch Song');
    } else if (response.status === 204) {
      throw new Error('Currently Not Playing');
    }

    const song = await response.json();
    const albumImageUrl = song.item.album.images[0].url;
    const artist = song.item.artists.map((artist) => artist.name).join(', ');
    const isPlaying = song.is_playing;
    const songUrl = song.item.external_urls.spotify;
    const title = song.item.name;
    const timePlayed = song.progress_ms;
    const timeTotal = song.item.duration_ms;
    const artistUrl = song.item.artists[0].external_urls.spotify;

    return {
      albumImageUrl,
      artist,
      isPlaying,
      songUrl,
      title,
      timePlayed,
      timeTotal,
      artistUrl
    };
  } catch (error) {
    console.error('Error fetching currently playing song: ', error);
    return error.message.toString();
  }
};

// Main component
const NowPlaying = () => {
  const [nowPlaying, setNowPlaying] = useState(null);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      const data = await getNowPlaying();
      setNowPlaying(data);
    };

    // Fetch immediately and then set an interval
    fetchNowPlaying();
    const intervalId = setInterval(fetchNowPlaying, 10000); // Reduced to every 10 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Determine player state and time details
  let playerState = '';
  let secondsPlayed = 0, minutesPlayed = 0, secondsTotal = 0, minutesTotal = 0;
  let albumImageUrl = '/images/albumCover.png'; // Default image path
  let title = '';
  let artist = '';
  let songUrl = '';
  let artistUrl = '';

  if (nowPlaying != null && nowPlaying.title) {
    playerState = nowPlaying.isPlaying ? 'PLAY' : 'PAUSE';

    secondsPlayed = Math.floor(nowPlaying.timePlayed / 1000);
    minutesPlayed = Math.floor(secondsPlayed / 60);
    secondsPlayed = secondsPlayed % 60;

    secondsTotal = Math.floor(nowPlaying.timeTotal / 1000);
    minutesTotal = Math.floor(secondsTotal / 60);
    secondsTotal = secondsTotal % 60;

    albumImageUrl = nowPlaying.albumImageUrl;
    title = nowPlaying.title;
    artist = nowPlaying.artist;
    songUrl = nowPlaying.songUrl;
    artistUrl = nowPlaying.artistUrl;
  } else if (nowPlaying === 'Currently Not Playing') {
    playerState = 'OFFLINE';
    title = 'User is';
    artist = 'currently Offline';
  } else {
    title = 'Failed to';
    artist = 'fetch song';
  }

  // Padding function for time display
  const pad = (n) => {
    return (n < 10) ? ("0" + n) : n;
  };

  return (
    <a 
      href={playerState === 'PLAY' || playerState === 'PAUSE' ? songUrl : '#'} 
      style={{textDecoration: 'none', color: 'inherit'}}
    >
      <div className='nowPlayingCard'>
        <div className='nowPlayingImage'>
          <img 
            src={albumImageUrl} 
            alt="Album Cover" 
            onClick={songUrl ? () => window.open(songUrl, '_blank') : undefined}
          />
        </div>
        <div id='nowPlayingDetails'>
          <div className={`nowPlayingTitle ${title.length > 15 ? 'marquee-content' : ''}`}>
            {playerState === 'PLAY' || playerState === 'PAUSE' ? 
              <a href={songUrl} target="_blank" rel="noopener noreferrer">{title}</a> 
              : title}
          </div>
          <div className='nowPlayingArtist'>
            {playerState === 'PLAY' || playerState === 'PAUSE' ? 
              <a href={artistUrl} target="_blank" rel="noopener noreferrer">{artist}</a> 
              : artist}
          </div>
          <div className='nowPlayingTime'>
            {pad(minutesPlayed)}:{pad(secondsPlayed)} / {pad(minutesTotal)}:{pad(secondsTotal)}
          </div>
        </div>
        <div className='nowPlayingState'>
          {playerState === 'PLAY' ? (
            <img alt='soundbar' src='/images/soundbar.gif' title='Now Listening'/>
          ) : playerState === 'PAUSE' ? (
            <AiOutlinePauseCircle size={40} />
          ) : playerState === 'OFFLINE' ? (
            <HiOutlineStatusOffline size={40}/>
          ) : (
            <BiErrorCircle size={40}/>
          )}
        </div>
      </div>
    </a>
  );
};

export default NowPlaying;