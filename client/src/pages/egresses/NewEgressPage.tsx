import React, { useEffect } from 'react'
import FormNewEgress from '../../components/egresses/FormNewEgress';
import Template from '../../components/ui/Template';
import {useDispatch} from 'react-redux';
import { getAllEgressesCategoriesAction } from '../../actions/egresses.action';

const NewEgressPage = () => {
  const dispatch = useDispatch();

  useEffect( () => {
    (() =>  dispatch<any>(getAllEgressesCategoriesAction()))();
  }, [])
  
  return (
      <Template title='Nuevo Egreso' description='Ingrese un nuevo egreso'>
         <FormNewEgress /> 
      </Template>
  );
}

export default NewEgressPage;