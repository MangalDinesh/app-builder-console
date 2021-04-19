import React from 'react';
import {
  makeStyles,
  createStyles, Button
} from '@material-ui/core';
import type { LogoStateType, LogoType } from '../pages/console';


interface UploadProps {
  name: LogoType;
  handler: (file: LogoStateType, name: LogoType) => void;

}

const useStyles = makeStyles(() =>
  createStyles({
    uploadBox: {
      background: "#FFFFFF",
      border: "1px solid #DEE5EF",
      borderRadius: "4px",
      height: " 40px",
      marginRight: "10px",
      width: "70%",


    },
    uploadBox_text: {
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "15px",
      color: "#8D959D",
      display: "flex",
      alignItems: "center"
    },
    mainHading: {
      fontWeight: 500,
      fontSize: "22px",
      color: "#222222",
      marginBottom: "24px"
    },
    Text: {
      fontWeight: "normal",
      fontSize: " 18px",
      color: "#222222",
      marginBottom: "16px"
    },
    uploadBtn: {

      width: "25%",
      height: "40px",
    },


  }),
);

export default function Upload(props: UploadProps) {
  const classes = useStyles();
  const [SelectedImg, setSelectedImg] = React.useState<LogoStateType | any>(null);
  const hiddenInputElement = React.useRef<any>(null);
  console.log("SelectedImg", SelectedImg)
  const [base64Image, setBase64Image] = React.useState<String | any>();
  function blobToDataURL(blob: Blob, callback: (e: any) => void) {
    var a = new FileReader();
    a.onload = function (e: any) {
      callback(e.target.result);
    };
    a.readAsDataURL(blob);
  }
  React.useEffect(() => {
    if (SelectedImg && SelectedImg !== null) {
      debugger;
      blobToDataURL(SelectedImg, function (dataurl: string) {
        setBase64Image(dataurl);
      });
    } else { console.log("hello") }
  }, [SelectedImg]);
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    debugger;
    const file = (event.target.files && event.target.files.length > 0) ? event.target.files[0] : SelectedImg;
    setSelectedImg(file);
  };

  const onSubmitClick = () => {
    debugger;
    props.handler(base64Image, props.name);
  };

  const extensions: string[] = [
    'jpeg',
    'jpg',
    'png',
    'webp',
    'tiff',
    'tif',
    'gif',
    'svg',
  ];

  return (
    <>
      <input
        ref={hiddenInputElement}
        type="file"
        onChange={handleFileUpload}
        style={{ display: 'none' }}
        accept={extensions.reduce(
          (acc, curr, idx) => `${idx === 1 ? '.' : ''}${acc},.${curr}`,
        )}
      />
      <Button
        variant="outlined"
        color="primary"
        component="label"
        className={classes.uploadBox}
        onClick={() => { hiddenInputElement.current.click(); }}
      >

        <div color="primary" style={{ textAlign: 'center', margin: '8px auto 12px auto', textOverflow: "ellipsis", overflow: "hidden", height: "20px", width: "120px" }}>
          {base64Image ? SelectedImg && SelectedImg.name : 'Select a file'}
        </div>
        {SelectedImg && <img src="./Delete.svg" alt="..." onClick={(event) => {
          event.stopPropagation();
          setBase64Image(() => null);
          setSelectedImg(() => null);
          props.handler(null, props.name);
        }} />}

      </Button>
      <Button
        variant="outlined"
        color="primary"
        component="label"
        className={classes.uploadBtn}
        onClick={onSubmitClick}>Upload</Button>

    </>
  );
}
