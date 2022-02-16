import React,{ useState } from "react";
import Cookies from 'js-cookie';
import Headline from "../Headline";
import Table from "../Table";
import EnterpriseDetail from "../EnterpriseDetail";
import FormEnterprise from "../FormEnterprise";
import Modal from "../Modal";

const csrftoken = Cookies.get('csrftoken');
const {pathname} = window.location;

export default function App({enterprises, enterprise}){
    const [displayModal,setDisplayModal] = useState(pathname.split('/')[2] == 'edit' ? true : false);
    const [titleModal, setTitleModal] = useState(pathname.split('/')[2] == 'edit' ? 'Actualizar Empresa' : null);
    let initState;
    let action;

    if(!!enterprise[0]){
      initState = enterprise[0].fields;
      initState.id = enterprise[0].pk;
      action = `update/${enterprise[0].pk}`;
    }
    
    const displayModalTrue = (title) => {
      setDisplayModal(true);
      setTitleModal(title);

    };
    
    const onCancel = ()=>{
      initState = null;
      setDisplayModal(false);
      if(pathname != '/main/') window.location.replace('http://' + window.location.hostname + ':8000/main/');
    };

    return (
      <div className="container">
        <div className="row">
          <div className={`col-sm-12 ${displayModal ? 'd-none' : ''}`}>
            <Headline openModal={displayModalTrue}>Empresas</Headline>
            <Table>
              {enterprises.map(({fields: enterprise, pk}) => {
                enterprise.id = pk;
                enterprise.onClick = () => {
                  window.location.replace(`http://${window.location.hostname}:8000/main/edit/${pk}`);
                };
                enterprise.onDelete = () => {
                  if(window.confirm(`Seguro desea eliminar la empresa ${enterprise.name}`)){
                    window.location.replace(`http://${window.location.hostname}:8000/main/delete/${pk}`);
                  }
                };
                return (<EnterpriseDetail key={pk} enterprise={enterprise}/>)
              })}
            </Table>
          </div>
          <Modal title={titleModal} display={displayModal}>
              <FormEnterprise 
                onCancel={onCancel} 
                csrftoken={csrftoken} 
                initState={initState}
                action={!action ? 'register' : action} />
          </Modal>
        </div>
      </div>
    )
  };
