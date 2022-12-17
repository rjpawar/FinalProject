import React, {useState} from "react";
import { useHistory } from "react-router";
import {FaSearchLocation} from "react-icons/all";

export default function SearchBar({updateText}) {
    const [searchText, setSearchText] = useState('');

    const history = useHistory();
    const updateSearchText = (text) => {
        console.log(`setting address to: ${text}`);
        history.push(`/search/${text}`);
    }

    return(
        <div className='wd-search-section' >
            <div id="cover">
                <div className="wd-tb search-tb">
                    <div className="wd-td search-td">
                        <input 
                            value={searchText}
                            onInput={e => setSearchText(e.target.value)}
                            className="wd-combo-input wd-combo-search-box"
                            type="text" 
                            placeholder=" Where to?" 
                            required/>
                    </div>
                    <div className="wd-td search-td" id="s-cover">
                        <button type="submit" className="wd-search-button" onClick={event => updateSearchText(searchText)}>
                            <FaSearchLocation />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}