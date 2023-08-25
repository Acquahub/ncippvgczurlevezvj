import React from 'react';
import { Link } from 'next/link';
import styles from './screen1.module.css';
import * as fonts from '../../../agua/assets/fonts';import Image from 'next/image';

export const metadata: Metadata = {
                title: 'Example',
description: 'This is just an example website',
keywords: 'example,website',
author: 'Agua',
copyright: 'Private',

}

function Screen1() {
    
    

    return(
        <div className={styles["Screen1"]}>
            

<div className={""}>
    <div id="text-1-dc670a37e6294758b95a29017d426244" className={styles["text-1-dc670a37e6294758b95a29017d426244"]} >
        Hello
    </div>
</div>
<div className={styles["imageview-1-3ee41782c3df43b68d6721b3911929cb"]}  >
    <Image id="imageview-1-3ee41782c3df43b68d6721b3911929cb" style={{ objectFit: 'contain' }} fill={true} alt="imageview-1" src='/assets/real.png' />
</div>
        </div>
    );
}

export default Screen1;
            