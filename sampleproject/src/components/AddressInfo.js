import React,{ useState } from "react";
import { addAddress, updateAddress } from "../redux/action";

const AddressInfo = () => {
    // const [addressData, setAddressData] = useState({ street:'', state:'', country:'' });
    const [city, setCity] = useState(addressData ? addressData.city : '');
    const [state, setState] = useState(addressData ? addressData.state : '');
    const [country, setCountry] = useState(addressData ? addressData.country : '');

    // const handleChange = (e) => {
    //     setAddressData ({ ...addressData, [e.target.name] : e.target.value});
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (addressData) {
            updateAddress(addressData.id, { city, state, country });
        } else {
            addAddress({ city, state, country });
        }
    }

    return (
        <div>
            <h3></h3>
            <form onSubmit={handleSubmit}>
                <label>City : </label>
                <input type='text' name='city' autoComplete='off' value={city} onChange={(e) => setCity(e.target.value)} />
                <label>State : </label>
                <input type='text' name='state' autoComplete='off' value={state} onChange={(e) => setState(e.target.value)} />
                <label>Country : </label>
                <input type='text' name='country' autoComplete='off' value={country} onChange={(e) => setCountry(e.target.value)} />
                <button type='Submit'>{addressData ? 'Update Address' : 'Add Address'}</button>
            </form>
        </div>
    );
};

const mapDispatchToProps = {
    addAddress,
    updateAddress,
}

export default connect(null, mapDispatchToProps)(AddressInfo);