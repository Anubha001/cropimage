import React, { useState, useEffect, Fragment } from 'react';
import PhotoList from '../components/PhotoList'
import {
  Image,
  Segment,
  Header,
  Divider,
  Grid,
  Button
} from 'semantic-ui-react';
import {storage} from '../firebase';
import DropzoneInput from './DropzoneInput';
import CropperInput from './CropperInput';


const PhotosPage = ({
  loading
}) => {
  const [files, setFiles] = useState([]);
  const [cropResult, setCropResult] = useState('');
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    return () => {
      files.forEach(file => URL.revokeObjectURL(file.preview));
      URL.revokeObjectURL(cropResult);
      console.log(files[0],'files')
    };
  }, [files, cropResult]);
  console.log(files,'cropResult')

  const handleChange = e => {
    const files = e.target.files[0];
    if (files) {
      const fileType = files["type"];
      const validImageTypes = ["image/gif", "image/jpeg", "image/png"];
      if (validImageTypes.includes(fileType)) {
        setError("");
        setImage(files);
      } else {
        setError("Please select an image to upload");
      }
    }
  };

  const handleUpdate = () => {
    if (image) {
      console.log(image,'image')
      const uploadTask = storage.ref(`images/${files[0].name}`).put(image);

      uploadTask.on(
        "state_changed",
        snapshot => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        error => {
          setError(error);
        },
        () => {
          storage
            .ref("images")
            .child(files[0].name)
            .getDownloadURL()
            .then(url => {
              setUrl(url);
              setProgress(0);
            });
        }
      );
    } else {
      setError("Error please choose an image to upload");
    }
  };

  const handleCancelCrop = () => {
    setFiles([]);
    setImage(null);
    setCropResult('');
  };
  return (
    <Segment>
      <Header dividing size='large' content='Your Photos' />
      <Grid>
        <Grid.Row />
        <Grid.Column width={4}>
          <Header color='teal' sub content='Step 1 - Add Photo' />
          <DropzoneInput setFiles={setFiles} />
        </Grid.Column>
        <Grid.Column width={1} />
        <Grid.Column width={4}>
          <Header sub color='teal' content='Step 2 - Resize image' />
          {files.length > 0 && (
            <CropperInput
              imagePreview={files[0].preview}
              setCropResult={setCropResult}
              setImage={setImage}
            />
          )}
        </Grid.Column>
        <Grid.Column width={1} />
        <Grid.Column width={4}>
          <Header sub color='teal' content='Step 3 - Preview & Upload' />
          {files.length > 0 && (
            <Fragment>
              <Image
                src={cropResult}
                style={{ minHeight: '200px', minWidth: '200px' }}
              />
              <Button.Group>
                <Button
                 onClick={handleUpdate}
                 type="file" onChange={handleChange}
                  loading={loading}
                  style={{ width: '100px' }}
                  positive
                  icon='check'
                />
                <Button
                  disabled={loading}
                  onClick={handleCancelCrop}
                  style={{ width: '100px' }}
                  icon='close'
                />
              </Button.Group>
            </Fragment>
          )}
        </Grid.Column>
      
      </Grid>
      
      
     
      <Divider />
      <PhotoList 
      url={url} />
    </Segment>
  );
};


 export default PhotosPage