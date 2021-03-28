import React from 'react';
class Search extends React.Component {
    render() {
        return (
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6">
                <div class="row ">
                    <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9 col-9">
                        <div className="form-group">
                            <input type="text" className="form-control" name id aria-describedby="helpId"
                                placeholder="Nhập từ Khóa..." />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 col-3">
                        <button type="button" class="btn btn-primary"><i class="fas fa-search"></i> Tìm</button>
                    </div>
                </div>

            </div>

        )
    }
}

export default Search;