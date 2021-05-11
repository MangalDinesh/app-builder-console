import React from 'react';
import {
  Box,
  makeStyles,
  createStyles,
  Typography,
  withStyles,
  Theme,
  TextField,
  Select,
  FormControl,
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Switch, {SwitchClassKey, SwitchProps} from '@material-ui/core/Switch';
// import {strValidation} from './validation';
import type {FormState} from '../pages/console';
interface ProductInfoProps {
  children?: React.ReactNode;
  onClickBack: VoidFunction;
  handleValueChange?: any;
  value: FormState;
  handleCheckChange?: any;
  errorHandler:any;
  setErrorHandler:Function;
}

interface Styles extends Partial<Record<SwitchClassKey, string>> {
  focusVisible?: string;
}

interface Props extends SwitchProps {
  classes: Styles;
}

const IOSSwitch = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 42,
      height: 26,
      padding: 0,
      margin: theme.spacing(1),
    },
    switchBase: {
      padding: 1,
      '&$checked': {
        transform: 'translateX(16px)',
        color: theme.palette.common.white,
        '& + $track': {
          backgroundColor: '#29A9F9',
          opacity: 1,
          border: 'none',
        },
      },
      '&$focusVisible $thumb': {
        color: '#29A9F9',
        border: '6px solid #fff',
      },
    },
    thumb: {
      width: 24,
      height: 24,
    },
    track: {
      borderRadius: 26 / 2,
      border: `1px solid ${theme.palette.grey[400]}`,
      backgroundColor: '#BCBCBC',
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
  }),
)(({classes, onChange, checked, name}: Props) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      onChange={onChange}
      checked={checked}
      name={name}
    />
  );
});

export default function ProductInfo(props: ProductInfoProps) {
  const {
    onClickBack,
    value,
    handleCheckChange,
    handleValueChange,
    errorHandler
  } = props;

  const region = [
    'US_EAST_1',
    'US_EAST_2',
    'US_WEST_1',
    'US_WEST_2',
    'EU_WEST_1',
    'EU_WEST_2',
    'EU_WEST_3',
    'EU_CENTRAL_1',
    'AP_SOUTHEAST_1',
    'AP_SOUTHEAST_2',
    'AP_NORTHEAST_1',
    'AP_NORTHEAST_2',
    'SA_EAST_1',
    'CA_CENTRAL_1',
    'AP_SOUTH_1',
    'CN_NORTH_1',
    'CN_NORTHWEST_1',
    'US_GOV_WEST_1',
  ];
  const useStyles = makeStyles(() =>
    createStyles({
      backBtn: {
        display: 'flex',
        marginBottom: '35px',
        cursor:"pointer",
                width:"fit-content"
      },
      backArrow: {
        color: '#0B9DFC',
        marginRight: '10px',
      },
      mainHading: {
        fontWeight: 500,
        fontSize: '22px',
        color: '#222222',
        marginBottom: '24px',
      },
      SwitchText: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '15px',
        color: '#394A64',
        marginRight: '12px',
      },
      SwitchContainer: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        marginBottom: '27px',
      },
      Setting: {
        marginRight: 'auto',
      },
      pstnText: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '15px',
        color: '#8D959D',
      },
      pstnLink: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '15px',
        color: '#29A9F9',
        marginLeft: '9px',
      },
      TurboUser: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '15px',
        color: '#394A64',
        marginBottom: '15px',
      },
      textField: {
        background: '#F1F1F1',
        borderRadius: '4px',
        display: 'flex',
        borderColor: '#099DFD80',
        marginTop: '14px',
        marginBottom: '17px',
      },
      validation: {
        color: '#CF4040',
        fontSize: '12px',
        fontWeight: 400,
        marginBottom: '20px',
      },
    }),
  );
  const classes = useStyles();
  // const [BUCKET_NAME, setBUCKET_NAME] = React.useState<boolean>(false);
  const [tIdErr, setTIdErr] = React.useState<string>('');
  const [tPassErr, setTPassErr] = React.useState<string>('');
  const [customerIdErr, setCustomerIdErr] = React.useState<string>('');
  const [customerCertiErr, setCustomerCertiErr] = React.useState<string>('');
  const [bucketErr,setBucketErr] = React.useState<string>('');
  const [accessKeyErr,setAccessKeyErr] = React.useState<string>('');
  const [accessSecretErr,setAccessSecretErr] = React.useState<string>('');
  React.useEffect(() => {
    if (value.pstn) {
      setTIdErr(errorHandler.ConferencingScreen.PSTN.TId);
      setTPassErr(errorHandler.ConferencingScreen.PSTN.TPassword);
    } else {
      setTIdErr('');
      setTPassErr('');
    }
    if(value.cloudRecording){
      setCustomerIdErr(errorHandler.ConferencingScreen.Cloud.CustomerID);
      setCustomerCertiErr(errorHandler.ConferencingScreen.Cloud.CustomerCertificate);
      setBucketErr(errorHandler.ConferencingScreen.Cloud.BucketName);
      setAccessKeyErr(errorHandler.ConferencingScreen.Cloud.BucketAccessKey);
      setAccessSecretErr(errorHandler.ConferencingScreen.Cloud.BucketAccessSecret);
    }
    else {
      setCustomerIdErr('');
      setCustomerCertiErr('');
      setBucketErr('');
      setAccessKeyErr('');
      setAccessSecretErr('');
    }
  }, [errorHandler.ConferencingScreen]);

  return (
    <>
      <Box component="div" className={classes.backBtn} onClick={onClickBack}>
        <ArrowBackIcon className={classes.backArrow} />
        <Box component="span">back</Box>
      </Box>
      <Typography
        variant="caption"
        className={classes.mainHading}
        component="h1">
        Conferencing Screen
      </Typography>
      <Box component="div" className={classes.SwitchContainer}>
        <Typography
          variant="caption"
          className={classes.SwitchText}
          component="p">
          PSTN Dial-in
        </Typography>
        <svg
          className={classes.Setting}
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.5 6.25C6.80964 6.25 6.25 6.80964 6.25 7.5C6.25 8.19036 6.80964 8.75 7.5 8.75C8.19036 8.75 8.75 8.19036 8.75 7.5C8.75 6.80964 8.19036 6.25 7.5 6.25ZM5 7.5C5 6.11929 6.11929 5 7.5 5C8.88071 5 10 6.11929 10 7.5C10 8.88071 8.88071 10 7.5 10C6.11929 10 5 8.88071 5 7.5Z"
            fill="#959595"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.5 1.25C7.33424 1.25 7.17527 1.31585 7.05806 1.43306C6.94085 1.55027 6.875 1.70924 6.875 1.875V1.98374C6.87371 2.30675 6.778 2.62233 6.59965 2.89163C6.4213 3.16094 6.1681 3.37222 5.87121 3.49946C5.81836 3.52211 5.76276 3.53731 5.70601 3.54473C5.43624 3.6392 5.14583 3.66248 4.86313 3.61123C4.5375 3.55218 4.23703 3.39695 4.00046 3.16554L3.99553 3.16072L3.95806 3.12319C3.90001 3.06508 3.83084 3.01874 3.75496 2.98728C3.67909 2.95583 3.59776 2.93964 3.51562 2.93964C3.43349 2.93964 3.35216 2.95583 3.27629 2.98728C3.20041 3.01874 3.13148 3.06484 3.07344 3.12295L3.07295 3.12344C3.01484 3.18148 2.96874 3.25041 2.93728 3.32629C2.90583 3.40216 2.88964 3.48349 2.88964 3.56562C2.88964 3.64776 2.90583 3.72909 2.93728 3.80496C2.96874 3.88084 3.01484 3.94977 3.07295 4.00781L3.11557 4.05043C3.34698 4.287 3.50218 4.5875 3.56123 4.91313C3.61909 5.23227 3.58196 5.56123 3.45466 5.85923C3.33868 6.16333 3.13561 6.42667 2.87065 6.61618C2.60034 6.80951 2.27811 6.91706 1.94587 6.92483L1.93125 6.925H1.875C1.70924 6.925 1.55027 6.99085 1.43306 7.10806C1.31585 7.22527 1.25 7.38424 1.25 7.55C1.25 7.71576 1.31585 7.87473 1.43306 7.99194C1.55027 8.10915 1.70924 8.175 1.875 8.175H1.98374C2.30675 8.17629 2.62233 8.272 2.89163 8.45035C3.16 8.62808 3.37075 8.88015 3.49813 9.1757C3.63068 9.47766 3.67007 9.81234 3.61123 10.1369C3.55218 10.4625 3.39695 10.763 3.16554 10.9995L3.16072 11.0045L3.12319 11.0419C3.06508 11.1 3.01874 11.1692 2.98728 11.245C2.95583 11.3209 2.93964 11.4022 2.93964 11.4844C2.93964 11.5665 2.95583 11.6478 2.98728 11.7237C3.01874 11.7996 3.06484 11.8685 3.12295 11.9266L3.12344 11.9271C3.18148 11.9852 3.25041 12.0313 3.32629 12.0627C3.40216 12.0942 3.48349 12.1104 3.56562 12.1104C3.64776 12.1104 3.72909 12.0942 3.80496 12.0627C3.88084 12.0313 3.94977 11.9852 4.00781 11.9271L4.05043 11.8844C4.28701 11.653 4.5875 11.4978 4.91313 11.4388C5.23227 11.3809 5.56122 11.418 5.85923 11.5453C6.16333 11.6613 6.42667 11.8644 6.61618 12.1293C6.80951 12.3997 6.91706 12.7219 6.92483 13.0541L6.925 13.0688V13.125C6.925 13.2908 6.99085 13.4497 7.10806 13.5669C7.22527 13.6842 7.38424 13.75 7.55 13.75C7.71576 13.75 7.87473 13.6842 7.99194 13.5669C8.10915 13.4497 8.175 13.2908 8.175 13.125V13.0188L8.175 13.0163C8.17629 12.6933 8.272 12.3777 8.45035 12.1084C8.62809 11.84 8.88019 11.6292 9.17577 11.5018C9.47772 11.3693 9.81237 11.3299 10.1369 11.3888C10.4625 11.4478 10.763 11.6031 10.9995 11.8345L11.0045 11.8393L11.0419 11.8768C11.1 11.9349 11.1692 11.9813 11.245 12.0127C11.3209 12.0442 11.4022 12.0604 11.4844 12.0604C11.5665 12.0604 11.6478 12.0442 11.7237 12.0127C11.7996 11.9813 11.8685 11.9352 11.9266 11.8771L11.9271 11.8766C11.9852 11.8185 12.0313 11.7496 12.0627 11.6737C12.0942 11.5978 12.1104 11.5165 12.1104 11.4344C12.1104 11.3522 12.0942 11.2709 12.0627 11.195C12.0313 11.1192 11.9852 11.0502 11.9271 10.9922L11.8844 10.9496C11.653 10.713 11.4978 10.4125 11.4388 10.0869C11.3799 9.76237 11.4193 9.42772 11.5518 9.12577C11.6792 8.83019 11.89 8.57809 12.1584 8.40035C12.4277 8.222 12.7433 8.12629 13.0663 8.125L13.0688 8.125L13.125 8.125C13.2908 8.125 13.4497 8.05915 13.5669 7.94194C13.6842 7.82473 13.75 7.66576 13.75 7.5C13.75 7.33424 13.6842 7.17527 13.5669 7.05806C13.4497 6.94085 13.2908 6.875 13.125 6.875H13.0188L13.0163 6.875C12.6933 6.87371 12.3777 6.778 12.1084 6.59965C11.8391 6.4213 11.6278 6.1681 11.5005 5.87121C11.4779 5.81836 11.4627 5.76276 11.4553 5.70601C11.3608 5.43623 11.3375 5.14583 11.3888 4.86313C11.4478 4.5375 11.6031 4.23703 11.8345 4.00046L11.8393 3.99553L11.8768 3.95806C11.9349 3.90001 11.9813 3.83084 12.0127 3.75496C12.0442 3.67909 12.0604 3.59776 12.0604 3.51562C12.0604 3.43349 12.0442 3.35216 12.0127 3.27629C11.9813 3.20041 11.9352 3.13148 11.8771 3.07344L11.8766 3.07295C11.8185 3.01484 11.7496 2.96874 11.6737 2.93728C11.5978 2.90583 11.5165 2.88964 11.4344 2.88964C11.3522 2.88964 11.2709 2.90583 11.195 2.93728C11.1192 2.96874 11.0502 3.01484 10.9922 3.07295L10.9496 3.11557C10.713 3.34698 10.4125 3.50218 10.0869 3.56123C9.76234 3.62007 9.42766 3.58068 9.1257 3.44813C8.83014 3.32075 8.57808 3.11 8.40035 2.84163C8.222 2.57233 8.12629 2.25675 8.125 1.93374L8.125 1.93125V1.875C8.125 1.70924 8.05915 1.55027 7.94194 1.43306C7.82473 1.31585 7.66576 1.25 7.5 1.25ZM12.125 9.375L12.6968 9.62735C12.664 9.70161 12.6542 9.78399 12.6687 9.86386C12.683 9.94285 12.7204 10.0158 12.7762 10.0735L12.8104 10.1078C12.8104 10.1077 12.8105 10.1079 12.8104 10.1078C12.9847 10.2819 13.1231 10.4888 13.2174 10.7164C13.3118 10.944 13.3604 11.188 13.3604 11.4344C13.3604 11.6808 13.3118 11.9248 13.2174 12.1524C13.1231 12.38 12.9848 12.5868 12.8104 12.7609L12.3688 12.3187L12.8109 12.7604C12.6368 12.9348 12.43 13.0731 12.2024 13.1674C11.9748 13.2618 11.7308 13.3104 11.4844 13.3104C11.238 13.3104 10.994 13.2618 10.7664 13.1674C10.5388 13.0731 10.3321 12.9349 10.1581 12.7607C10.1581 12.7608 10.158 12.7606 10.1581 12.7607L10.1235 12.7262C10.0658 12.6704 9.99285 12.633 9.91386 12.6187C9.83399 12.6042 9.75161 12.614 9.67735 12.6468L9.67122 12.6495C9.5984 12.6807 9.53628 12.7325 9.49253 12.7986C9.44896 12.8644 9.4255 12.9414 9.425 13.0203V13.125C9.425 13.6223 9.22746 14.0992 8.87582 14.4508C8.52419 14.8025 8.04728 15 7.55 15C7.05272 15 6.57581 14.8025 6.22417 14.4508C5.87254 14.0992 5.675 13.6223 5.675 13.125V13.0777C5.67204 12.9982 5.64579 12.9213 5.59946 12.8565C5.55204 12.7902 5.48577 12.7397 5.40926 12.7116C5.3969 12.707 5.38469 12.7021 5.37265 12.6968C5.29839 12.664 5.21601 12.6542 5.13614 12.6687C5.05713 12.683 4.98417 12.7205 4.92644 12.7762L4.89219 12.8104C4.89227 12.8104 4.89211 12.8105 4.89219 12.8104C4.7181 12.9847 4.51115 13.1231 4.28364 13.2174C4.05602 13.3118 3.81203 13.3604 3.56562 13.3604C3.31922 13.3604 3.07523 13.3118 2.84761 13.2174C2.62021 13.1232 2.41359 12.985 2.23955 12.8109C2.06522 12.6368 1.92692 12.43 1.83257 12.2024C1.73821 11.9748 1.68964 11.7308 1.68964 11.4844C1.68964 11.238 1.73821 10.994 1.83257 10.7664C1.92692 10.5387 2.06522 10.332 2.23955 10.1578L2.27382 10.1235C2.32955 10.0658 2.36696 9.99286 2.38128 9.91386C2.39576 9.83399 2.38599 9.75161 2.35321 9.67735L2.3505 9.67122C2.31929 9.5984 2.2675 9.53628 2.20145 9.49253C2.13565 9.44896 2.05859 9.4255 1.97969 9.425H1.875C1.37772 9.425 0.900805 9.22746 0.549175 8.87582C0.197544 8.52419 0 8.04728 0 7.55C0 7.05272 0.197544 6.57581 0.549175 6.22417C0.900805 5.87254 1.37772 5.675 1.875 5.675H1.92227C2.00177 5.67204 2.0787 5.64579 2.14347 5.59946C2.20977 5.55204 2.26028 5.48577 2.28841 5.40926C2.29296 5.3969 2.29789 5.38469 2.30321 5.37265C2.33599 5.29839 2.34576 5.21601 2.33128 5.13614C2.31696 5.05714 2.27955 4.98417 2.22381 4.92644L2.18955 4.89219C2.01522 4.71805 1.87693 4.51126 1.78257 4.28364C1.68821 4.05602 1.63964 3.81203 1.63964 3.56562C1.63964 3.31922 1.68821 3.07523 1.78257 2.84761C1.87688 2.6201 2.01509 2.41339 2.18931 2.23931C2.36339 2.06509 2.5701 1.92688 2.79761 1.83257C3.02523 1.73821 3.26922 1.68964 3.51562 1.68964C3.76203 1.68964 4.00602 1.73821 4.23364 1.83257C4.46126 1.92693 4.66805 2.06522 4.84219 2.23955L4.87644 2.27381C4.93418 2.32955 5.00714 2.36696 5.08614 2.38128C5.16601 2.39576 5.24839 2.38599 5.32265 2.35321C5.36267 2.33555 5.40433 2.32218 5.44692 2.31326C5.49049 2.28368 5.52811 2.24577 5.55747 2.20145C5.60104 2.13565 5.62451 2.05859 5.625 1.97969V1.875C5.625 1.37772 5.82254 0.900805 6.17418 0.549175C6.52581 0.197544 7.00272 0 7.5 0C7.99728 0 8.47419 0.197544 8.82582 0.549175C9.17745 0.900805 9.375 1.37772 9.375 1.875V1.92969C9.37549 2.00859 9.39896 2.08565 9.44253 2.15145C9.48628 2.2175 9.54839 2.26933 9.62121 2.30054L9.62737 2.30318C9.70163 2.33595 9.78399 2.34576 9.86386 2.33128C9.94286 2.31696 10.0158 2.27955 10.0735 2.22382L10.1078 2.18955C10.2819 2.01522 10.4887 1.87692 10.7164 1.78257C10.944 1.68821 11.188 1.63964 11.4344 1.63964C11.6808 1.63964 11.9248 1.68821 12.1524 1.78257C12.38 1.87693 12.5868 2.01522 12.7609 2.18955C12.935 2.36359 13.0732 2.5702 13.1674 2.79761C13.2618 3.02523 13.3104 3.26922 13.3104 3.51562C13.3104 3.76203 13.2618 4.00602 13.1674 4.23364C13.0731 4.46115 12.9349 4.66786 12.7607 4.84194C12.7608 4.84186 12.7606 4.84202 12.7607 4.84194L12.7262 4.87644C12.6705 4.93417 12.633 5.00714 12.6187 5.08614C12.6042 5.16601 12.614 5.24839 12.6468 5.32265C12.6645 5.36267 12.6778 5.40433 12.6867 5.44692C12.7163 5.49049 12.7542 5.52811 12.7986 5.55747C12.8644 5.60104 12.9414 5.62451 13.0203 5.625H13.125C13.6223 5.625 14.0992 5.82254 14.4508 6.17418C14.8025 6.52581 15 7.00272 15 7.5C15 7.99728 14.8025 8.47419 14.4508 8.82582C14.0992 9.17745 13.6223 9.375 13.125 9.375H13.0703C12.9914 9.37549 12.9144 9.39896 12.8486 9.44253C12.7825 9.48628 12.7307 9.54839 12.6995 9.62121L12.125 9.375Z"
            fill="#959595"
          />
        </svg>
        <IOSSwitch
          checked={value.pstn}
          onChange={handleCheckChange}
          name="pstn"
        />
      </Box>
      {value.pstn ? (
        <Box component="div">
          <Typography
            variant="caption"
            className={classes.pstnText}
            component="p">
            PSTN will not work with channel encrption at the moment
          </Typography>
          <Box component="div" display="flex" mt={2} mb={10}>
            <img src="./file.svg" />
            <a
              className={classes.pstnLink}
              target="_blank"
              href="https://github.com/AgoraIO-Community/app-builder-docs/wiki/How-to-Setup-PSTN">
              Read PSTN docs
            </a>
          </Box>
          <Typography
            variant="caption"
            className={classes.TurboUser}
            component="p">
            Turbobridge Username
          </Typography>
          <TextField
            error={tIdErr && tIdErr.length > 0 ? true : false}
            className={classes.textField}
            label="Turbobridge user name"
            name="PSTN_USERNAME"
            variant="outlined"
            value={value.PSTN_USERNAME}
            onChange={handleValueChange}
            helperText={tIdErr}
          />
          <Typography
            variant="caption"
            className={classes.TurboUser}
            component="p">
            Turbobridge Password
          </Typography>
          <TextField
          error={tPassErr && tPassErr.length > 0 ? true : false}
            type="password"
            className={classes.textField}
            label="Turbobridge Password"
            name="PSTN_PASSWORD"
            variant="outlined"
            value={value.PSTN_PASSWORD}
            onChange={handleValueChange}
            style={{marginBottom: '27px'}}
            helperText={tPassErr}
          />
        </Box>
      ) : (
        ''
      )}
      <Box component="div" className={classes.SwitchContainer}>
        <Typography
          variant="caption"
          className={classes.SwitchText}
          component="p"
          style={{marginRight: 'auto'}}>
          Precall Screen
        </Typography>
        <IOSSwitch
          checked={value.precall}
          onChange={handleCheckChange}
          name="precall"
        />
      </Box>
      <Box component="div" className={classes.SwitchContainer}>
        <Typography
          variant="caption"
          className={classes.SwitchText}
          component="p"
          style={{marginRight: 'auto'}}>
          Chat
        </Typography>
        <IOSSwitch
          checked={value.chat}
          onChange={handleCheckChange}
          name="chat"
        />
      </Box>
      <Box component="div" className={classes.SwitchContainer}>
        <Typography
          variant="caption"
          className={classes.SwitchText}
          component="p">
          Cloud Recording
        </Typography>
        <svg
          className={classes.Setting}
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.5 6.25C6.80964 6.25 6.25 6.80964 6.25 7.5C6.25 8.19036 6.80964 8.75 7.5 8.75C8.19036 8.75 8.75 8.19036 8.75 7.5C8.75 6.80964 8.19036 6.25 7.5 6.25ZM5 7.5C5 6.11929 6.11929 5 7.5 5C8.88071 5 10 6.11929 10 7.5C10 8.88071 8.88071 10 7.5 10C6.11929 10 5 8.88071 5 7.5Z"
            fill="#959595"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.5 1.25C7.33424 1.25 7.17527 1.31585 7.05806 1.43306C6.94085 1.55027 6.875 1.70924 6.875 1.875V1.98374C6.87371 2.30675 6.778 2.62233 6.59965 2.89163C6.4213 3.16094 6.1681 3.37222 5.87121 3.49946C5.81836 3.52211 5.76276 3.53731 5.70601 3.54473C5.43624 3.6392 5.14583 3.66248 4.86313 3.61123C4.5375 3.55218 4.23703 3.39695 4.00046 3.16554L3.99553 3.16072L3.95806 3.12319C3.90001 3.06508 3.83084 3.01874 3.75496 2.98728C3.67909 2.95583 3.59776 2.93964 3.51562 2.93964C3.43349 2.93964 3.35216 2.95583 3.27629 2.98728C3.20041 3.01874 3.13148 3.06484 3.07344 3.12295L3.07295 3.12344C3.01484 3.18148 2.96874 3.25041 2.93728 3.32629C2.90583 3.40216 2.88964 3.48349 2.88964 3.56562C2.88964 3.64776 2.90583 3.72909 2.93728 3.80496C2.96874 3.88084 3.01484 3.94977 3.07295 4.00781L3.11557 4.05043C3.34698 4.287 3.50218 4.5875 3.56123 4.91313C3.61909 5.23227 3.58196 5.56123 3.45466 5.85923C3.33868 6.16333 3.13561 6.42667 2.87065 6.61618C2.60034 6.80951 2.27811 6.91706 1.94587 6.92483L1.93125 6.925H1.875C1.70924 6.925 1.55027 6.99085 1.43306 7.10806C1.31585 7.22527 1.25 7.38424 1.25 7.55C1.25 7.71576 1.31585 7.87473 1.43306 7.99194C1.55027 8.10915 1.70924 8.175 1.875 8.175H1.98374C2.30675 8.17629 2.62233 8.272 2.89163 8.45035C3.16 8.62808 3.37075 8.88015 3.49813 9.1757C3.63068 9.47766 3.67007 9.81234 3.61123 10.1369C3.55218 10.4625 3.39695 10.763 3.16554 10.9995L3.16072 11.0045L3.12319 11.0419C3.06508 11.1 3.01874 11.1692 2.98728 11.245C2.95583 11.3209 2.93964 11.4022 2.93964 11.4844C2.93964 11.5665 2.95583 11.6478 2.98728 11.7237C3.01874 11.7996 3.06484 11.8685 3.12295 11.9266L3.12344 11.9271C3.18148 11.9852 3.25041 12.0313 3.32629 12.0627C3.40216 12.0942 3.48349 12.1104 3.56562 12.1104C3.64776 12.1104 3.72909 12.0942 3.80496 12.0627C3.88084 12.0313 3.94977 11.9852 4.00781 11.9271L4.05043 11.8844C4.28701 11.653 4.5875 11.4978 4.91313 11.4388C5.23227 11.3809 5.56122 11.418 5.85923 11.5453C6.16333 11.6613 6.42667 11.8644 6.61618 12.1293C6.80951 12.3997 6.91706 12.7219 6.92483 13.0541L6.925 13.0688V13.125C6.925 13.2908 6.99085 13.4497 7.10806 13.5669C7.22527 13.6842 7.38424 13.75 7.55 13.75C7.71576 13.75 7.87473 13.6842 7.99194 13.5669C8.10915 13.4497 8.175 13.2908 8.175 13.125V13.0188L8.175 13.0163C8.17629 12.6933 8.272 12.3777 8.45035 12.1084C8.62809 11.84 8.88019 11.6292 9.17577 11.5018C9.47772 11.3693 9.81237 11.3299 10.1369 11.3888C10.4625 11.4478 10.763 11.6031 10.9995 11.8345L11.0045 11.8393L11.0419 11.8768C11.1 11.9349 11.1692 11.9813 11.245 12.0127C11.3209 12.0442 11.4022 12.0604 11.4844 12.0604C11.5665 12.0604 11.6478 12.0442 11.7237 12.0127C11.7996 11.9813 11.8685 11.9352 11.9266 11.8771L11.9271 11.8766C11.9852 11.8185 12.0313 11.7496 12.0627 11.6737C12.0942 11.5978 12.1104 11.5165 12.1104 11.4344C12.1104 11.3522 12.0942 11.2709 12.0627 11.195C12.0313 11.1192 11.9852 11.0502 11.9271 10.9922L11.8844 10.9496C11.653 10.713 11.4978 10.4125 11.4388 10.0869C11.3799 9.76237 11.4193 9.42772 11.5518 9.12577C11.6792 8.83019 11.89 8.57809 12.1584 8.40035C12.4277 8.222 12.7433 8.12629 13.0663 8.125L13.0688 8.125L13.125 8.125C13.2908 8.125 13.4497 8.05915 13.5669 7.94194C13.6842 7.82473 13.75 7.66576 13.75 7.5C13.75 7.33424 13.6842 7.17527 13.5669 7.05806C13.4497 6.94085 13.2908 6.875 13.125 6.875H13.0188L13.0163 6.875C12.6933 6.87371 12.3777 6.778 12.1084 6.59965C11.8391 6.4213 11.6278 6.1681 11.5005 5.87121C11.4779 5.81836 11.4627 5.76276 11.4553 5.70601C11.3608 5.43623 11.3375 5.14583 11.3888 4.86313C11.4478 4.5375 11.6031 4.23703 11.8345 4.00046L11.8393 3.99553L11.8768 3.95806C11.9349 3.90001 11.9813 3.83084 12.0127 3.75496C12.0442 3.67909 12.0604 3.59776 12.0604 3.51562C12.0604 3.43349 12.0442 3.35216 12.0127 3.27629C11.9813 3.20041 11.9352 3.13148 11.8771 3.07344L11.8766 3.07295C11.8185 3.01484 11.7496 2.96874 11.6737 2.93728C11.5978 2.90583 11.5165 2.88964 11.4344 2.88964C11.3522 2.88964 11.2709 2.90583 11.195 2.93728C11.1192 2.96874 11.0502 3.01484 10.9922 3.07295L10.9496 3.11557C10.713 3.34698 10.4125 3.50218 10.0869 3.56123C9.76234 3.62007 9.42766 3.58068 9.1257 3.44813C8.83014 3.32075 8.57808 3.11 8.40035 2.84163C8.222 2.57233 8.12629 2.25675 8.125 1.93374L8.125 1.93125V1.875C8.125 1.70924 8.05915 1.55027 7.94194 1.43306C7.82473 1.31585 7.66576 1.25 7.5 1.25ZM12.125 9.375L12.6968 9.62735C12.664 9.70161 12.6542 9.78399 12.6687 9.86386C12.683 9.94285 12.7204 10.0158 12.7762 10.0735L12.8104 10.1078C12.8104 10.1077 12.8105 10.1079 12.8104 10.1078C12.9847 10.2819 13.1231 10.4888 13.2174 10.7164C13.3118 10.944 13.3604 11.188 13.3604 11.4344C13.3604 11.6808 13.3118 11.9248 13.2174 12.1524C13.1231 12.38 12.9848 12.5868 12.8104 12.7609L12.3688 12.3187L12.8109 12.7604C12.6368 12.9348 12.43 13.0731 12.2024 13.1674C11.9748 13.2618 11.7308 13.3104 11.4844 13.3104C11.238 13.3104 10.994 13.2618 10.7664 13.1674C10.5388 13.0731 10.3321 12.9349 10.1581 12.7607C10.1581 12.7608 10.158 12.7606 10.1581 12.7607L10.1235 12.7262C10.0658 12.6704 9.99285 12.633 9.91386 12.6187C9.83399 12.6042 9.75161 12.614 9.67735 12.6468L9.67122 12.6495C9.5984 12.6807 9.53628 12.7325 9.49253 12.7986C9.44896 12.8644 9.4255 12.9414 9.425 13.0203V13.125C9.425 13.6223 9.22746 14.0992 8.87582 14.4508C8.52419 14.8025 8.04728 15 7.55 15C7.05272 15 6.57581 14.8025 6.22417 14.4508C5.87254 14.0992 5.675 13.6223 5.675 13.125V13.0777C5.67204 12.9982 5.64579 12.9213 5.59946 12.8565C5.55204 12.7902 5.48577 12.7397 5.40926 12.7116C5.3969 12.707 5.38469 12.7021 5.37265 12.6968C5.29839 12.664 5.21601 12.6542 5.13614 12.6687C5.05713 12.683 4.98417 12.7205 4.92644 12.7762L4.89219 12.8104C4.89227 12.8104 4.89211 12.8105 4.89219 12.8104C4.7181 12.9847 4.51115 13.1231 4.28364 13.2174C4.05602 13.3118 3.81203 13.3604 3.56562 13.3604C3.31922 13.3604 3.07523 13.3118 2.84761 13.2174C2.62021 13.1232 2.41359 12.985 2.23955 12.8109C2.06522 12.6368 1.92692 12.43 1.83257 12.2024C1.73821 11.9748 1.68964 11.7308 1.68964 11.4844C1.68964 11.238 1.73821 10.994 1.83257 10.7664C1.92692 10.5387 2.06522 10.332 2.23955 10.1578L2.27382 10.1235C2.32955 10.0658 2.36696 9.99286 2.38128 9.91386C2.39576 9.83399 2.38599 9.75161 2.35321 9.67735L2.3505 9.67122C2.31929 9.5984 2.2675 9.53628 2.20145 9.49253C2.13565 9.44896 2.05859 9.4255 1.97969 9.425H1.875C1.37772 9.425 0.900805 9.22746 0.549175 8.87582C0.197544 8.52419 0 8.04728 0 7.55C0 7.05272 0.197544 6.57581 0.549175 6.22417C0.900805 5.87254 1.37772 5.675 1.875 5.675H1.92227C2.00177 5.67204 2.0787 5.64579 2.14347 5.59946C2.20977 5.55204 2.26028 5.48577 2.28841 5.40926C2.29296 5.3969 2.29789 5.38469 2.30321 5.37265C2.33599 5.29839 2.34576 5.21601 2.33128 5.13614C2.31696 5.05714 2.27955 4.98417 2.22381 4.92644L2.18955 4.89219C2.01522 4.71805 1.87693 4.51126 1.78257 4.28364C1.68821 4.05602 1.63964 3.81203 1.63964 3.56562C1.63964 3.31922 1.68821 3.07523 1.78257 2.84761C1.87688 2.6201 2.01509 2.41339 2.18931 2.23931C2.36339 2.06509 2.5701 1.92688 2.79761 1.83257C3.02523 1.73821 3.26922 1.68964 3.51562 1.68964C3.76203 1.68964 4.00602 1.73821 4.23364 1.83257C4.46126 1.92693 4.66805 2.06522 4.84219 2.23955L4.87644 2.27381C4.93418 2.32955 5.00714 2.36696 5.08614 2.38128C5.16601 2.39576 5.24839 2.38599 5.32265 2.35321C5.36267 2.33555 5.40433 2.32218 5.44692 2.31326C5.49049 2.28368 5.52811 2.24577 5.55747 2.20145C5.60104 2.13565 5.62451 2.05859 5.625 1.97969V1.875C5.625 1.37772 5.82254 0.900805 6.17418 0.549175C6.52581 0.197544 7.00272 0 7.5 0C7.99728 0 8.47419 0.197544 8.82582 0.549175C9.17745 0.900805 9.375 1.37772 9.375 1.875V1.92969C9.37549 2.00859 9.39896 2.08565 9.44253 2.15145C9.48628 2.2175 9.54839 2.26933 9.62121 2.30054L9.62737 2.30318C9.70163 2.33595 9.78399 2.34576 9.86386 2.33128C9.94286 2.31696 10.0158 2.27955 10.0735 2.22382L10.1078 2.18955C10.2819 2.01522 10.4887 1.87692 10.7164 1.78257C10.944 1.68821 11.188 1.63964 11.4344 1.63964C11.6808 1.63964 11.9248 1.68821 12.1524 1.78257C12.38 1.87693 12.5868 2.01522 12.7609 2.18955C12.935 2.36359 13.0732 2.5702 13.1674 2.79761C13.2618 3.02523 13.3104 3.26922 13.3104 3.51562C13.3104 3.76203 13.2618 4.00602 13.1674 4.23364C13.0731 4.46115 12.9349 4.66786 12.7607 4.84194C12.7608 4.84186 12.7606 4.84202 12.7607 4.84194L12.7262 4.87644C12.6705 4.93417 12.633 5.00714 12.6187 5.08614C12.6042 5.16601 12.614 5.24839 12.6468 5.32265C12.6645 5.36267 12.6778 5.40433 12.6867 5.44692C12.7163 5.49049 12.7542 5.52811 12.7986 5.55747C12.8644 5.60104 12.9414 5.62451 13.0203 5.625H13.125C13.6223 5.625 14.0992 5.82254 14.4508 6.17418C14.8025 6.52581 15 7.00272 15 7.5C15 7.99728 14.8025 8.47419 14.4508 8.82582C14.0992 9.17745 13.6223 9.375 13.125 9.375H13.0703C12.9914 9.37549 12.9144 9.39896 12.8486 9.44253C12.7825 9.48628 12.7307 9.54839 12.6995 9.62121L12.125 9.375Z"
            fill="#959595"
          />
        </svg>
        <IOSSwitch
          checked={value.cloudRecording}
          onChange={handleCheckChange}
          name="cloudRecording"
        />
      </Box>
      {value.cloudRecording ? (
        <Box component="div">
          <Typography
            variant="caption"
            className={classes.TurboUser}
            component="p">
            Agora Customer ID
          </Typography>
          <TextField
            error={customerIdErr && customerIdErr.length > 0 ? true : false}
            className={classes.textField}
            label="Agora Customer ID"
            name="CUSTOMER_ID"
            variant="outlined"
            value={value.CUSTOMER_ID}
            onChange={handleValueChange}
            helperText={customerIdErr}
          />
          <Typography
            variant="caption"
            className={classes.TurboUser}
            component="p">
            Agora Customer Certificate
          </Typography>
          <TextField
            error={customerCertiErr && customerCertiErr.length > 0 ? true : false}
            className={classes.textField}
            label="Agora Customer Certificate"
            name="CUSTOMER_CERTIFICATE"
            variant="outlined"
            value={value.CUSTOMER_CERTIFICATE}
            onChange={handleValueChange}
            helperText={customerCertiErr}
          />
          <Typography
            variant="caption"
            className={classes.TurboUser}
            component="p">
            S3 Bucket Region
          </Typography>
          <FormControl
            variant="outlined"
            style={{width: '100%', marginBottom: '17px'}}>
            <Select
              native
              onChange={handleValueChange}
              value={value.RECORDING_REGION}
              name="RECORDING_REGION">
              {region.map((value, index) => (
                <option value={index} key={index}>
                  {value}
                </option>
              ))}
            </Select>
          </FormControl>
          <Typography
            variant="caption"
            className={classes.TurboUser}
            component="p">
            AWS S3 Bucket Name
          </Typography>
          <TextField
            error={bucketErr && bucketErr.length > 0 ? true : false}
            className={classes.textField}
            label="AWS S3 Bucket Name"
            name="BUCKET_NAME"
            variant="outlined"
            value={value.BUCKET_NAME}
            onChange={(event) => {
              handleValueChange(event);
              // if (/^$|^[A-Za-z0-9]+$/.test(event.target.value)) {
              //   setBUCKET_NAME(false);
              // } else {
              //   setBUCKET_NAME(true);
              // }
            }}
            helperText={bucketErr}
          />
          <Typography
            variant="caption"
            className={classes.TurboUser}
            component="p">
            AWS S3 Bucket Access Key
          </Typography>
          <TextField
          error={accessKeyErr && accessKeyErr.length > 0 ? true : false}
            className={classes.textField}
            label="AWS S3 Bucket Access Key"
            name="BUCKET_ACCESS_KEY"
            variant="outlined"
            value={value.BUCKET_ACCESS_KEY}
            onChange={handleValueChange}
            helperText={accessKeyErr}
          />
          <Typography
            variant="caption"
            className={classes.TurboUser}
            component="p">
            AWS S3 Bucket Access Secret
          </Typography>
          <TextField
          error={accessSecretErr && accessSecretErr.length > 0 ? true : false}
            className={classes.textField}
            label="AWS S3 Bucket Access Secret"
            name="BUCKET_ACCESS_SECRET"
            variant="outlined"
            value={value.BUCKET_ACCESS_SECRET}
            onChange={handleValueChange}
            style={{marginBottom: '27px'}}
            helperText={accessSecretErr}
          />
        </Box>
      ) : (
        ''
      )}
      <Box component="div" className={classes.SwitchContainer}>
        <Typography
          variant="caption"
          className={classes.SwitchText}
          component="p"
          style={{marginRight: 'auto'}}>
          Screen sharing
        </Typography>
        <IOSSwitch
          checked={value.screenSharing}
          onChange={handleCheckChange}
          name="screenSharing"
        />
      </Box>
      <Box component="div" className={classes.SwitchContainer}>
        <Typography
          variant="caption"
          className={classes.SwitchText}
          component="p"
          style={{marginRight: 'auto'}}>
          Video Encryption
        </Typography>
        <IOSSwitch
          checked={value.encryption}
          onChange={handleCheckChange}
          name="encryption"
        />
      </Box>
    </>
  );
}
