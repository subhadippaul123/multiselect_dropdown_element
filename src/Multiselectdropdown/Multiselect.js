import React, {useState} from 'react';
import {Container} from 'react-bootstrap';
import MultiSelect from 'multiselect-react-dropdown';
function Multiselect(props){
    const [options, setOptions]= useState(['Australia', 'Bermuda', 'Canada', 'Cameroon', 'Denmark', 'France', 'Finland', 'Germany']);
    const [country, setCountry]= useState([]);
    return (<React.Fragment>
        <Container className="content">
            <div className = "row">
                <div className='col-sm-2'>
                    <h3 className="mt-3">Select MultiDropdown Checkbox</h3>
                    <from className="row g-3" method="post">
                        <div className= "col-md-5">
                            <label className="form-label">
                                <div className="text-dark">
                                    <MultiSelect
                                    isObject={false}
                                    onRemove={(event)=>{console.log(event)}}
                                    onSelect={(event)=>{console.log(event)}}
                                    options={options}
                                    selectedValues={props.value}
                                    showCheckbox={props.readonly}
                                    
                                    
                                    ></MultiSelect>
                                </div>
                            </label>
                        </div>
                    </from>

                </div>
            </div>
        </Container>
    </React.Fragment>)

}
export default Multiselect;