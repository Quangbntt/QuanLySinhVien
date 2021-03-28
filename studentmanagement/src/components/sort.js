import React from 'react';
class Sort extends React.Component {
    render() {
        return (
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6 ml-15">

                <div class="dropdown open">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        Sắp Xếp
                </button>
                    <div class="dropdown-menu" aria-labelledby="triggerId">
                        <button class="dropdown-item" href="#">A-Z</button>
                    </div>
                </div>

            </div>

        )
    }
}

export default Sort;