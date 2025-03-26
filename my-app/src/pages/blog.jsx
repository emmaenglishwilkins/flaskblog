// github link https://github.com/react95-io/React95

import React, { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { 
  Window, 
  WindowHeader, 
  WindowContent, 
  Button, 
  Toolbar,
  MenuList, 
  MenuListItem, 
  Separator, 
  styleReset 
} from 'react95';
// pick a theme of your choice
import original from 'react95/dist/themes/original';
// original Windows95 font (optionally)
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
    background-color: #008080;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
  }
`;

// Sample blog post data
const blogPosts = [
  {
    id: 1,
    title: 'First Blog Post',
    content: 'This is the content of the first blog post. Learn more about our exciting journey!'
  },
  {
    id: 2,
    title: 'Second Blog Post',
    content: 'Dive into our second blog post and discover amazing insights and stories.'
  },
  {
    id: 3,
    title: 'Third Blog Post',
    content: 'Our third blog post brings you the latest updates and interesting perspectives.'
  }
];

export function Blog() {
  const [openWindows, setOpenWindows] = useState(
    blogPosts.reduce((acc, post) => ({ ...acc, [post.id]: true }), {})
  );

  const toggleWindow = (postId) => {
    setOpenWindows(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={original}>
        {blogPosts.map((post) => (
          openWindows[post.id] && (
            <Window key={post.id} style={{ width: 300, margin: '10px' }}>
              <WindowHeader active={true} className="window-header">
                <span>{post.title}</span>
                <Button 
                  onClick={() => toggleWindow(post.id)}
                  style={{ position: 'absolute', right: 2, top: 2 }}
                >
                  ✕
                </Button>
              </WindowHeader>
              <Toolbar>
                <Button variant='menu' size='sm'>
                  File
                </Button>
                <Button variant='menu' size='sm'>
                  Edit
                </Button>
                <Button variant='menu' size='sm'>
                  View
                </Button>
              </Toolbar>
              <WindowContent>
                <p>{post.content}</p>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'flex-end', 
                  marginTop: '20px' 
                }}>
                  <Button onClick={() => toggleWindow(post.id)}>
                    Close
                  </Button>
                </div>
              </WindowContent>
            </Window>
          )
        ))}
      </ThemeProvider>
    </>
  );
}