'use client';
import React, { useEffect, useState } from 'react';
import Slider from './slider/Slider';
import axios from 'axios';
import { styles } from './styles';
import { Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

const Product = (props: any) => {
  // const { productList, setProductList } = props;
  const [productList, setProductList] = useState<any>();
  const [centerStone, setCenterStone] = useState('Blue Sapphire');
  const [metalType, setMetalType] = useState('Rose Gold');
  const [sideStone, setSideStone] = useState('Lab Diamond');
  const [selectedJewelry, setSelectedJewelry] = useState<any>(null);
  const router = useRouter();
  useEffect(() => {
    const fetchProduct = async () => {
      console.log('Fetching products...');

      const response = await axios.get(
        `http://localhost:3000/api/register?Side_Stone=${sideStone}&Metal_Type=${metalType}&Center_Stone=${centerStone}`
      );
      router.push(
        `product/?Side_Stone=${sideStone}&Metal_Type=${metalType}&Center_Stone=${centerStone}`
      );
      setProductList(response.data?.data);
      console.log('Fetched product list:', response);
    };
    fetchProduct();
  }, [sideStone, metalType, centerStone, router]);

  const formatDescription = (description: string) => {
    return description?.split('@').map((line, index) => (
      <li style={{ listStyleType: 'disc' }}>
        <Typography key={index} variant="body1">
          {line}
        </Typography>
      </li>
    ));
  };

  const getBorderStyle = (type: string, value: string) => {
    return type === value ? '2px solid black' : '1px solid gray';
  };

  return (
    <styles.outerContainer>
      {/* image slider */}
      <styles.sliderContainer>
        <Slider selectedJewelry={productList} />
      </styles.sliderContainer>
      {/* Information slider */}
      <styles.infoContainer>
        <styles.title variant="h4">
          {productList?.description
            ? productList?.title
            : 'Sorry, no products matched your selection. Please choose a different combination.'}
        </styles.title>
        <styles.startingAt variant="h5">Starting at: $489.00</styles.startingAt>
        <styles.titleContainer>
          <Typography variant="body1">Center Stone :</Typography>
          <Typography>{centerStone}</Typography>
        </styles.titleContainer>
        <styles.titleContainer>
          <styles.IconImage
            src="https://demo.elbasoft.com/Nextjs_POC/images/Variations-Stone-Blue-Sapphire-A-45x45.png"
            alt="Blue Sapphire"
            onClick={() => setCenterStone('Blue Sapphire')}
            style={{ border: getBorderStyle(centerStone, 'Blue Sapphire') }}
          />
          <styles.IconImage
            src="https://demo.elbasoft.com/Nextjs_POC/images/Variations-Stone-Green-Emerald-A-45x45.png"
            alt="Green Emerald"
            onClick={() => setCenterStone('Emerald')}
            style={{ border: getBorderStyle(centerStone, 'Emerald') }}
          />
          <styles.IconImage
            src="https://demo.elbasoft.com/Nextjs_POC/images/Morganite-gemstone-45x45.png"
            alt="Morganite"
            onClick={() => setCenterStone('Morganite')}
            style={{ border: getBorderStyle(centerStone, 'Morganite') }}
          />
          <styles.IconImage
            src="https://demo.elbasoft.com/Nextjs_POC/images/pink-sapphaire-45x45.png"
            alt="Pink Sapphire"
            onClick={() => setCenterStone('Pink Sapphire')}
            style={{ border: getBorderStyle(centerStone, 'Pink Sapphire') }}
          />
          <styles.IconImage
            src="https://demo.elbasoft.com/Nextjs_POC/images/Variations-Stone-Red-Ruby-A-45x45.png"
            alt="Red Ruby"
            onClick={() => setCenterStone('Ruby')}
            style={{ border: getBorderStyle(centerStone, 'Ruby') }}
          />
          <styles.IconImage
            src="https://demo.elbasoft.com/Nextjs_POC/images/tanzanite-45x45.png"
            alt="Tanzanite"
            onClick={() => setCenterStone('Tanzanite')}
            style={{ border: getBorderStyle(centerStone, 'Tanzanite') }}
          />
        </styles.titleContainer>
        <styles.titleContainer>
          <Typography variant="body1">Metal Type:</Typography>
          <Typography>{metalType}</Typography>
        </styles.titleContainer>
        <styles.titleContainer>
          <styles.IconImage
            src="https://demo.elbasoft.com/Nextjs_POC/images/3-2-45x45.png"
            alt="Rose Gold"
            onClick={() => setMetalType('Rose Gold')}
            style={{ border: getBorderStyle(metalType, 'Rose Gold') }}
          />
          <styles.IconImage
            src="https://demo.elbasoft.com/Nextjs_POC/images/1-2-45x45.png"
            alt="White Gold"
            onClick={() => setMetalType('White Gold')}
            style={{ border: getBorderStyle(metalType, 'White Gold') }}
          />
          <styles.IconImage
            src="https://demo.elbasoft.com/Nextjs_POC/images/2-2-45x45.png"
            alt="Yellow Gold"
            onClick={() => setMetalType('Yellow Gold')}
            style={{ border: getBorderStyle(metalType, 'Yellow Gold') }}
          />
        </styles.titleContainer>
        <styles.titleContainer>
          <Typography variant="body1">Side Stone:</Typography>
          <Typography>{sideStone}</Typography>
        </styles.titleContainer>
        <styles.titleContainer>
          <styles.IconImage
            src="https://demo.elbasoft.com/Nextjs_POC/images/About1-45x45.png"
            alt="Lab Diamond"
            onClick={() => setSideStone('Lab Diamond')}
            style={{ border: getBorderStyle(sideStone, 'Lab Diamond') }}
          />
          <styles.IconImage
            src="https://demo.elbasoft.com/Nextjs_POC/images/About-45x45.png"
            alt="Natural Diamond"
            onClick={() => setSideStone('White Diamond')}
            style={{ border: getBorderStyle(sideStone, 'White Diamond') }}
          />
        </styles.titleContainer>
        <ul style={{ paddingLeft: '10px' }}>
          {formatDescription(
            productList?.description
              ? productList?.description
              : 'Description not avalable for product'
          )}
        </ul>
      </styles.infoContainer>
    </styles.outerContainer>
  );
};

export default Product;
