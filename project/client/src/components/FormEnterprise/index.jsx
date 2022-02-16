import React from "react";

export default class FormEnterprise extends React.Component{
    constructor(props) {
        super(props);
        this.state = !this.props.initState ? {
            name: '',
            nit: '',
            address: '',
            phone: ''
        } : this.props.initState;
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.onCancel = this.onCancel.bind(this);
      }
    
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    onCancel(){
        this.setState({
            name: '',
            nit: '',
            address: '',
            phone: ''
        });
        this.props.onCancel();
    }

    render(){
        return(
            <form method="POST" action={`http://localhost:8000/main/${this.props.action}/`}>
                <input type="hidden" value={this.props.csrftoken} id="csrfmiddlewaretoken" name="csrfmiddlewaretoken" />
                <div className="form-group row">
                    <label className="col-2 col-form-label">Nombre: </label> 
                    <div className="col-10">
                        <input
                            placeholder="Empresa SA"
                            name="name"
                            type="text"
                            required
                            value={this.state.name}
                            onChange={this.handleInputChange}
                            className="form-control" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-2 col-form-label">NIT: </label>
                    <div className="col-10">
                        <input
                            placeholder="800.197.268-4"
                            name="nit"
                            type="text"
                            pattern="[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]"
                            required
                            value={this.state.nit}
                            onChange={this.handleInputChange} 
                            className="form-control" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-2 col-form-label">Dirección: </label>
                    <div className="col-10">
                        <input
                            placeholder="Crr 18 #10-20"
                            name="address"
                            type="text"
                            value={this.state.address}
                            onChange={this.handleInputChange} 
                            className="form-control" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-2 col-form-label">Teléfono: </label>
                    <div className="col-10">
                        <input
                            placeholder="1234567890"
                            name="phone"
                            type="tel"
                            pattern="[0-9]{10}"
                            value={this.state.phone}
                            onChange={this.handleInputChange} 
                            className="form-control" />
                    </div>
                </div>
                <div className="d-flex justify-content-end">
                    <button 
                        type="submit"
                        className="btn btn-success col-1 mr-1">
                            {this.props.action == 'update' ? 'Actualizar' : 'Registrar'}
                    </button>
                    <button 
                        type="button" 
                        onClick={this.onCancel} 
                        className="btn btn-danger col-1">
                            Cancelar
                    </button>
                </div>
            </form>
        )
    }
}