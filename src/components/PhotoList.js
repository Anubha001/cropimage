import React, { Component } from 'react'
import {
    Image,
    Segment,
    Header,
    Divider,
    Grid,
    Button
  } from 'semantic-ui-react';

export default class PhotoList extends Component {
    render() {
        console.log(this.props,'photolist')
        const {url,progress,error} = this.props
        return (
            <div>
                <Grid>  <Grid.Row />
        <div style={{ height: "100px" }}>
        {progress > 0 ? <progress value={progress} max="100" /> : ""}
        <p style={{ color: "red" }}>{error}</p>
      </div>
        <Grid.Column width={4}>
          <Header color='teal' sub content='horizontal : 755 x 450 ' />
      <div> {url ? (
        <img src={url} alt="Uploaded images" height="450" width="755" />
      ) : (
        <img src={'http://via.placeholder.com/755x450'} alt="Uploaded images" height="450" width="755"/>
      )}</div>
        </Grid.Column>
        <Grid.Column width={6} />
        <Grid.Column width={4}>
       <Header color='teal' sub content='horizontal small : 365 x 212 
' />
     
      <div> {url ? (
        <img src={url} alt="Uploaded images" height="365" width="212" />
      ) : (
        <img src={'http://via.placeholder.com/365x212'} alt="Uploaded images" height="365" width="212"/>
      )}</div>
        </Grid.Column>
        <Grid.Row />
        <Grid.Column width={4}>
          <Header color='teal' sub content='vertical : 365 x 450 ' />
      
      <div> {url ? (
        <img src={url} alt="Uploaded images" height="365" width="450" />
      ) : (
        <img src={'http://via.placeholder.com/365x450'} alt="Uploaded images" height="365" width="450"/>
      )}</div>
        </Grid.Column>
        <Grid.Column width={2} />
        <Grid.Column width={4}>
          <Header color='teal' sub content='gallery : 380 x 380' />
      
      <div> {url ? (
        <img src={url} alt="Uploaded images" height="300" width="400" />
      ) : (
        <img src={'http://via.placeholder.com/380x380'} alt="Uploaded images" height="380" width="380"/>
      )}</div>
        </Grid.Column></Grid>
            </div>
        )
    }
}
