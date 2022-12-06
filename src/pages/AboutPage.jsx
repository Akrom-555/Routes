import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const AboutPage = () => {
    return (
        <div className= 'maps' >
            <YMaps>
               <Map className='map'
               defaultState={{
                center:[43.32470220611533,45.69294198241297],
                zoom: 10,
               }}>
                   
                <Placemark geometry={[43.32470220611533,45.69294198241297]} />

               </Map>
            </YMaps>
        </div>
    );
};
export default AboutPage;