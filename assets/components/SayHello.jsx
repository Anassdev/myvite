import React, {useEffect} from 'react';

import { ServiceAxios, PostData } from '../utils/servicesApi.js';

const SayHello = () => {
    useEffect(() => {
        const data = PostData()
        console.log('data', data)
    
      
    }, [])
    
    
    return (
        <>
            hey yew yew HELLOOOO MF .... test watch --
        </>
    );
};

export default SayHello;

