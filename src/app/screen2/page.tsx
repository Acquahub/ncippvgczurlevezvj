import React from 'react';
import Link from 'next/link';
import styles from './screen2.module.css';
import { Metadata } from "next";
import * as fonts from '../../agua/assets/fonts';

export const metadata: Metadata = {
                
}

function Screen2() {
    
    

    return(
        <div className={styles["Screen2"]}>
            
<Link href="/screen1">
<div className={""}>
    <div id="text-2-857fd81516f24eb3809bd9891f1838af" className={styles["text-2-857fd81516f24eb3809bd9891f1838af"]} >
        Have a nice day
    </div>
</div></Link>
        </div>
    );
}

export default Screen2;
            