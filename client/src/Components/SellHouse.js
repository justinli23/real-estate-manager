import React, {useState} from 'react';

function SellHouse() {
    const [formData, setFormData]= useState({

        name: "",
        address: "",
        price: "",
        rooms: "",
        sq_ft: "",
        image: "",
        description: "",
     });

    function handleChange(event) {
        setFormData({
            ...formData,[event.target.name]: event.target.value,
        })
    }

    function handleSubmit(event) {
        fetch("http://localhost:3000/proprties", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                type: formData.name,
                address: formData.address,
                price: formData.price,
                rooms: formData.rooms,
                sq_ft: formData.sq_ft,
                image: formData.image,
                description: formData.description,
            }),
        });
    }
return (
    <div className="sell-house">
        <h2>Sell House</h2>
        <form onSubmit={handleSubmit} >
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
            <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
            <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} />
            <input type="number" name="rooms" placeholder="Rooms" value={formData.rooms} onChange={handleChange} />
            <input type="number" name="sq_ft" placeholder="Square Feet" value={formData.sq_ft} onChange={handleChange} />
            <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} />
            <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
            <input type="submit" value="Add House" />
        </form>
    </div>
);
        }
    
export default SellHouse;




   