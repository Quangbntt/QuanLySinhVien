import React from 'react';
import Search from './search';
import Sort from './sort';
class FormControl extends React.Component {
    render() {
        return (
            <div>
               
                <div className="row mt-15 mb-15">
                    {/*search*/}
                    <Search></Search>
                    {/*sort*/}
                    <Sort></Sort>
                </div>

            </div>

        )
    }
}

export default FormControl;