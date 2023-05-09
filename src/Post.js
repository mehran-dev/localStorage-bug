import React from 'react'

export default function Post({ postId, postText, time }) {
  return (
    <div
      style={{
        margin: '10px',
        border: '2px solid green ',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <span>postId:{postId}</span>
      <br />
      <span>postText:{postText}</span>
      <br />
      <span>time:{time}</span>
    </div>
  )
}
