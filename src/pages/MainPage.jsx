import Card from "../components/Card";
import {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from 'react-router-dom'

function MainPage() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getData()
    }, [])

    function getData() {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                setProducts(response.data);    
            })
            .catch (error => {
                console.error(error);
            });
    } 

    const all = products.map((item, index) => {

        return (
            <Card key={index} data={item} />
        )
    })

    return (
        <div className="list">
            {all}
        </div>
      );
    }


export default MainPage;