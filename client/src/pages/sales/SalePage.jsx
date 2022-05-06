import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { getSaleByIdAction } from '../../actions/saleActions';

const SalePage = () => {
    const params = useParams()
    const dispatch = useDispatch()

    const sale = useSelector(({sales})=>sales.sale)
    useEffect(() => {
        const getSale = () => dispatch(getSaleByIdAction(params.id));
        getSale()
    }, [])
    
  return (
      <div>
          SalePage desde {params.id}
          <h1>{sale.document}</h1>
      </div>
  );
}

export default SalePage