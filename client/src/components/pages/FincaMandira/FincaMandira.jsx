import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { getShops, getShopId, getShopData } from '../../../redux/shopActions';
import { resetShopId, resetShopData } from '../../../redux/shopSlice';

import CardProductContainer from '../../common/CardProductContainer/CardProductContainer'
import Redes from '../../common/redesSociales/redes/Redes'
import style from './FincaMandira.module.css'
import CardShop from '../../common/shopsDos/cardShop/CardShop'
import Reviews from '../../common/Reviews/Reviews';
import Footer from '../../common/Footer/Footer';



//importamos el array que simula los datos que llegan del back-componente redes sociales
import { arrayRedes } from './arrayRedes'

//importamos elementos que simula los datos que llegan del estado global
import { descriptions, name, imagen } from './descriptions'
import ShopContact from '../Contact/ShopContact'

export default function FincaMandira() {

  const shopId = useSelector(state => state.shops.shopId);
  const shopData = useSelector(state => state.shops.shopData);
  const dispatch = useDispatch();
  const location = useLocation();


  useEffect( () => {
    dispatch(getShopId(location.pathname));
    dispatch(getShopData(location.pathname));
    return () => {
      dispatch(resetShopId(0));
      dispatch(resetShopData({}));
    };
  }, []);



  // useEffect( () => {
  //   dispatch(getShops(location.pathname));
  // }, []);
  // useEffect( () => {
  //   const shopFiltered = shops.filter(shop => shop.path === location.pathname);
  //   if (shopFiltered.at(0)) setShopId(shopFiltered[0]['id_shop']);
  // }, [shops]);

  return (
    <div className={style.page}>
      <section className={style.titleSection}>
        <div>
          <CardShop description={shopData.summary} name={shopData.name} image={shopData.image} />
        </div>
      </section>
      <section className={style.Cajaredes}>
        <Redes socialmedia={arrayRedes} />
        {/*aca enviamos por props el array que importamos
                                                    simulando los datos que llegarian del back*/}
      </section>
      <div className={style.cardProductContainerContainer}>
        < div >
          <CardProductContainer />
        </div>
      </div>
      <section>
        <div className='container text-center'>
          <h4>Nuestros clientes</h4>
        </div>
        { shopId && <Reviews shopId={shopId}/> }
      </section>
      
      <section className={style.contactSection}>
        <ShopContact />
      </section>
      <section>
        <Footer socialmedia={arrayRedes}/>
      </section>
    </div>
  )
}
