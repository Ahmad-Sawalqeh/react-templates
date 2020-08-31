import React from "react";
import "./form.scss";

const Form = props => {
  const { loadweather, error } = props;

  return (
    <div className="container">
      <form onSubmit={loadweather}>
        <div>
          {
            error && (
              <div className="alert alert-danger font-weight-bold">
                Please Enter Both City and Country ... !
              </div>  
            )      
          }
        </div>
        <div className="row">
          <div className="col-md-4">
            <input type="text" name="city" placeholder="City" className="form-control" />
          </div>
          <div className="col-md-4">
            <input type="text" name="country" placeholder="Country" className="form-control" />
          </div>
          <div className="col-md-4">
            <button className="btn btn-success">Get Weather</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;