import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import googleMapStyles from '../helpers/contacts.map.styles';
import useDetectDevice from '../hooks/useDetectDevice';

const Maps = ({ initialCenter, center, google }) => {

    let bp = useDetectDevice(),
    width;

    switch (bp) {
        case 'tablet':
            width = '133.333333%';
            break;
        case 'mobile':
            width = '100%';
            break;
        case 'desktop':
            width = '125%';
            break
        default:
            break;
    }

    const containerStyle = {
        position: 'absolute',
        left: '0',  
        width: width,
        height: 'calc(50vh + 100rem / 13)',
    }

    const _mapLoaded = (mapProps, map) => {
        map.setOptions({
           styles: googleMapStyles
        })
    }

    const onMarkerClick = ({mapCenter}) => {
        window.open(`https://www.google.com/maps/dir//${mapCenter.lat},${mapCenter.lng}/@${mapCenter.lat},${mapCenter.lng},12z`, '_blank');
    }

    return (
        <Map
            google={google}
            disableDefaultUI={true}
            disableDoubleClickZoom={true}
            draggable={false}
            scrollwheel={false}
            zoomControl={false}
            zoom={17}
            containerStyle={containerStyle}
            initialCenter={initialCenter}
            center={center}
            onReady={(mapProps, map) => _mapLoaded(mapProps, map)}
        >
            <Marker
                onClick={onMarkerClick}
                position={center}
                icon={{
                    path: 'M0,5a5,5 0 1,0 10,0a5,5 0 1,0 -10,0',
                    anchor: new google.maps.Point(5, 5), // eslint-disable-line
                    fillColor: '#091cab',
                    fillOpacity: 1,
                    strokeWeight: 0,
                    scale: 3
                }}
            />
        </Map>
    );
}


export default GoogleApiWrapper({
    apiKey: 'AIzaSyC7Afu_rm-rA-Himb31xutRVnkb5t0xwSk'
})(Maps);
