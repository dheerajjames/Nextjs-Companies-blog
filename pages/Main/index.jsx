import React, {useState, useEffect} from 'react';
// import Nav from '../../components/Nav/Nav'
import Image from "next/image";
import Link from "next/link";
import apiCall from '../../data/apiCall'

export default function Main(){

	let [links, setLinks] = useState([]);

	useEffect(async () => {
				const url = "https://dheerajjames.github.io/json-data/companies.json";
				let data = await apiCall(url);
				setLinks(data);
        console.log("data",data);
	}, []);


    return(
    <div className="container">
      {/* <h1>Companies</h1> */}
      {
      links.map((company) =>{
        return(
            <Link href={company.URL} key={company.id}>
          <div className="card">
            <h1>{company.title}</h1>
          </div>
            </Link>
        )
      })
    }
    </div>
    )
}


