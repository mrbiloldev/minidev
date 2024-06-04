import React, { useState } from 'react'
import styles from './Filter.module.css'
import HomeIcons from '../../../../../assets/home-icon.svg'
import SettingLine from '../../../../../assets/setting-lines.svg'
import SearchIcons from '../../../../../assets/search-icon.svg'
import { Popover } from "antd";
import { Select } from "antd";

export default function FilterSearch() {
    const [list, setList] = useState([]);
    const [title, setTitle] = useState('Search');

    const { Option } = Select;

    const onChange = ({ target }) => {
        const { name, value } = target;
        // navigate(`${UseReplace(name, value)}`);
    };
    const advancedSearch = (
        <div className={styles.Popover}>
            <div className={styles.PopoverText}>
                Address
            </div>
            <div className={styles.Section}>
                <input onChange={onChange} name="country" placeholder={"Country"} />
                <input onChange={onChange} name="region" placeholder={"Region"} />
                <input onChange={onChange} name="city" placeholder={"City"} />
                <input onChange={onChange} name="zip_code" placeholder={"Zip Code"} />
            </div>
            <div className={styles.PopoverText}>
                Apartment info
            </div>
            <div className={styles.Section}>
                <input onChange={onChange} name="address" placeholder={"Address"} />
                <input
                    onChange={onChange}
                    name="house_name"
                    placeholder={"House name"}
                />
                <input onChange={onChange} name="rooms" placeholder={"Rooms"} />

            </div>
            <div className={styles.PopoverText}>
                Price
            </div>
            <div className={styles.Section}>
                <input onChange={onChange} name="min_price" placeholder={"Min Price"} />
                <input onChange={onChange} name="max_price" placeholder={"Max Price"} />
            </div>
            <div className={styles.SectionSearch}>
                <button className={styles.SearchBtn}>
                   Search
                </button>
            </div>

        </div>
    )
    return (
        <div>
            <div className={styles.Container}>
                <input
                    placeholder={"Enter an address, neighborhood, city, or ZIP code"}
                >

                </input>
                <Popover
                    placement="bottomRight"
                    content={advancedSearch}
                    trigger="click"
                >
                    <button className={styles.AdvanceBtn}>
                        <img src={SettingLine} alt="" /> Advanced
                    </button>
                </Popover>
                <button className={styles.SearchBtn}>
                    <img src={SearchIcons} alt="" />   Search
                </button>
            </div>
        </div>
    )
}
