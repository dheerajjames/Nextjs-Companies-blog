import React from 'react';
import Nav from '../../components/Nav/Nav'
// import styles from '../../styles/styles.css'
import apiCall from '../../data/apiCall'


export default function Raw(props){
    return(
        <div className="main">
            <Nav />
			<div  className="mainBody">
            <img src={props.data.logoURL} className="img"></img>
			<h2>{props.data.content}</h2>
			<h3>{props.data.body}</h3>
			</div>
        </div>
    )
}


export const getStaticProps = async (context) => {
	const url = "https://dheerajjames.github.io/json-data/companies/raweng.json";
	const data = await apiCall(url);
	if (data instanceof Error) {
		return {
			props: {
				hasError: true,
			},
		};
	}
	return {
		props: { data },
	};
};