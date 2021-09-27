import React, {useState, useEffect} from 'react';
import Link from "next/link";
import apiCall from '../../data/apiCall'
import styles from "../../styles/Nav.module.css"


export default function Nav(){
	let [links, setLinks] = useState([]);

	useEffect(async () => {
				const url = "https://dheerajjames.github.io/json-data/companies.json";
				let data = await apiCall(url);
				setLinks(data);
	}, []);


    return (

            <div className={styles["header"]}>
                 <Link href='/' >
                    <div className={styles["navitem"]}>Home</div>
                </Link>
                
       { links.map((elem) =>{
            return (
                
                <Link href={elem.URL} >                        
                <div className={styles["navitem"]} >{elem.title}</div>
                </Link>
               
               )
               
            })
}
                    {/* <img className={styles["menu"]} src="https://dheerajjames.github.io/images/menu-white.png" alt="humburger menu"/> */}
            </div>
        )
}

