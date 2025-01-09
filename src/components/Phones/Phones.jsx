// https://openapi.programming-hero.com/api/phones?search=iphone


import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';


const Phones = () => {
    const [phone, setPhone] = useState([]);
    console.log(phone)
    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => setPhone(data.data))

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phoneData = data.data.data;
                // console.log(phoneData)
                const phoneFakeData = phoneData.map(phones => {
                    const obj = {
                        name: phones.phone_name,
                        price: parseInt(phones.slug.split('-')[1])
                    }
                    return obj;
                })
                // console.log(phoneFakeData)
                setPhone(phoneFakeData);
            })
    }, [])
    return (
        <div className="container mx-auto">
            <h2 className="text-5xl my-14">Phone Length : {phone.length}</h2>
            <BarChart width={900} height={400} data={phone}>
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Cell></Cell>
                <Legend></Legend>
                <CartesianGrid></CartesianGrid>
                <Bar dataKey='price' fill="#82ca9d"></Bar>
            </BarChart>
        </div>
    );
};



export default Phones;