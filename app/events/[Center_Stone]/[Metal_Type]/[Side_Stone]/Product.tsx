'use client';
import React, { useEffect, useState } from 'react';
import Slider from './slider/Slider';
import axios from 'axios';
import { styles } from './styles';
import { Skeleton, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

const Product = (props: any) => {
  const [productList, setProductList] = useState<any>();
  const [centerStone, setCenterStone] = useState('');
  const [metalType, setMetalType] = useState('');
  const [sideStone, setSideStone] = useState('');
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Fetch URL parameters from props and set initial state
  useEffect(() => {
    console.log('props', props);
    const { Center_Stone, Metal_Type, Side_Stone } = props.params.params;

    if (Center_Stone && Metal_Type && Side_Stone) {
      setCenterStone(decodeURIComponent(Center_Stone));
      setMetalType(decodeURIComponent(Metal_Type));
      setSideStone(decodeURIComponent(Side_Stone));
    }
  }, [props.params]);

  // Fetch product list whenever state changes
  useEffect(() => {
    const fetchProduct = async () => {
      // setLoading(true);
      const response = await axios.get(
        `https://next-poc-1.netlify.app/api/events/${centerStone}/${metalType}/${sideStone}`
      );
      setProductList(response.data?.data);
      setLoading(false);
    };

    if (centerStone && metalType && sideStone) {
      fetchProduct();
    }
  }, [centerStone, metalType, sideStone]);

  const handleChange = (
    newCenterStone: string,
    newMetalType: string,
    newSideStone: string
  ) => {
    setCenterStone(newCenterStone);
    setMetalType(newMetalType);
    setSideStone(newSideStone);
    router.push(`/events/${newCenterStone}/${newMetalType}/${newSideStone}`);
  };

  const handleCenterStoneChange = (newCenterStone: string) => {
    if (newCenterStone !== centerStone) {
      handleChange(newCenterStone, metalType, sideStone);
    }
  };

  const handleMetalTypeChange = (newMetalType: string) => {
    if (newMetalType !== metalType) {
      handleChange(centerStone, newMetalType, sideStone);
    }
  };

  const handleSideStoneChange = (newSideStone: string) => {
    if (newSideStone !== sideStone) {
      handleChange(centerStone, metalType, newSideStone);
    }
  };

  const formatDescription = (description: string) => {
    return description?.split('@').map((line, index) => (
      <li style={{ listStyleType: 'disc' }} key={index}>
        <Typography key={index} variant="body1" style={{ color: '#525252' }}>
          {line}
        </Typography>
      </li>
    ));
  };

  const getBorderStyle = (type: string, value: string) => {
    return type === value ? '2px solid black' : '1px solid gray';
  };

  return (
    <>
      {loading ? (
        <styles.skelitonWrapper>
          <styles.skeletonContainer>
            <styles.skeletonLoader />
          </styles.skeletonContainer>
          <styles.skelitonInnerWrapper>
            <styles.skelitonRectangle
              variant="rectangular"
              height={60}
            ></styles.skelitonRectangle>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '3px',
                width: '40%',
              }}
            >
              <styles.skelitonRectangle1
                variant="rectangular"
                height={30}
              ></styles.skelitonRectangle1>
              <styles.skelitonRectangle2
                variant="rectangular"
                height={30}
              ></styles.skelitonRectangle2>
            </div>

            <styles.skelitonRectangle2
              variant="rectangular"
              height={20}
              width={'30%'}
            ></styles.skelitonRectangle2>
            <div
              style={{
                display: 'flex',
                gap: '15px',
              }}
            >
              <Skeleton variant="circular" width={60} height={60} />
              <Skeleton variant="circular" width={60} height={60} />
              <Skeleton variant="circular" width={60} height={60} />
              <Skeleton variant="circular" width={60} height={60} />
              <Skeleton variant="circular" width={60} height={60} />
              <Skeleton variant="circular" width={60} height={60} />
            </div>

            <styles.skelitonRectangle2
              variant="rectangular"
              height={20}
              width={'30%'}
            ></styles.skelitonRectangle2>
            <div
              style={{
                display: 'flex',
                gap: '15px',
              }}
            >
              <Skeleton variant="circular" width={60} height={60} />
              <Skeleton variant="circular" width={60} height={60} />
              <Skeleton variant="circular" width={60} height={60} />
            </div>
            <styles.skelitonRectangle2
              variant="rectangular"
              height={20}
              width={'30%'}
            ></styles.skelitonRectangle2>
            <div
              style={{
                display: 'flex',
                gap: '15px',
              }}
            >
              <Skeleton variant="circular" width={60} height={60} />
              <Skeleton variant="circular" width={60} height={60} />
            </div>
          </styles.skelitonInnerWrapper>
        </styles.skelitonWrapper>
      ) : (
        <styles.outerContainer>
          {/* image slider */}
          <styles.sliderContainer>
            <Slider selectedJewelry={productList} />
          </styles.sliderContainer>
          {/* Information slider */}
          <styles.infoContainer>
            <styles.titleMain>
              {productList?.description
                ? productList?.title
                : 'Sorry, no products matched your selection. Please choose a different combination.'}
            </styles.titleMain>
            <styles.startingAt variant="h5">
              Starting at: $489.00
            </styles.startingAt>
            <styles.titleContainer>
              <styles.imageText variant="body1">
                Center Stone :
              </styles.imageText>
              <styles.imageText
                style={{ fontWeight: 'bold', fontSize: '16px' }}
              >
                {centerStone}
              </styles.imageText>
            </styles.titleContainer>
            <styles.titleContainer>
              <styles.IconImage
                src="https://demo.elbasoft.com/Nextjs_POC/images/Variations-Stone-Blue-Sapphire-A-45x45.png"
                alt="Blue Sapphire"
                onClick={() => handleCenterStoneChange('Blue Sapphire')}
                style={{ border: getBorderStyle(centerStone, 'Blue Sapphire') }}
              />
              <styles.IconImage
                src="https://demo.elbasoft.com/Nextjs_POC/images/Variations-Stone-Green-Emerald-A-45x45.png"
                alt="Green Emerald"
                onClick={() => handleCenterStoneChange('Emerald')}
                style={{ border: getBorderStyle(centerStone, 'Emerald') }}
              />
              <styles.IconImage
                src="https://demo.elbasoft.com/Nextjs_POC/images/Morganite-gemstone-45x45.png"
                alt="Morganite"
                onClick={() => handleCenterStoneChange('Morganite')}
                style={{ border: getBorderStyle(centerStone, 'Morganite') }}
              />
              <styles.IconImage
                src="https://demo.elbasoft.com/Nextjs_POC/images/pink-sapphaire-45x45.png"
                alt="Pink Sapphire"
                onClick={() => handleCenterStoneChange('Pink Sapphire')}
                style={{ border: getBorderStyle(centerStone, 'Pink Sapphire') }}
              />
              <styles.IconImage
                src="https://demo.elbasoft.com/Nextjs_POC/images/Variations-Stone-Red-Ruby-A-45x45.png"
                alt="Red Ruby"
                onClick={() => handleCenterStoneChange('Ruby')}
                style={{ border: getBorderStyle(centerStone, 'Ruby') }}
              />
              <styles.IconImage
                src="https://demo.elbasoft.com/Nextjs_POC/images/tanzanite-45x45.png"
                alt="Tanzanite"
                onClick={() => handleCenterStoneChange('Tanzanite')}
                style={{ border: getBorderStyle(centerStone, 'Tanzanite') }}
              />
            </styles.titleContainer>
            <styles.titleContainer>
              <Typography variant="body1">Metal Type:</Typography>
              <Typography style={{ fontWeight: 'bold', fontSize: '16px' }}>
                {metalType}
              </Typography>
            </styles.titleContainer>
            <styles.titleContainer>
              <styles.IconImage
                src="https://demo.elbasoft.com/Nextjs_POC/images/3-2-45x45.png"
                alt="Rose Gold"
                onClick={() => handleMetalTypeChange('Rose Gold')}
                style={{ border: getBorderStyle(metalType, 'Rose Gold') }}
              />
              <styles.IconImage
                src="https://demo.elbasoft.com/Nextjs_POC/images/1-2-45x45.png"
                alt="White Gold"
                onClick={() => handleMetalTypeChange('White Gold')}
                style={{ border: getBorderStyle(metalType, 'White Gold') }}
              />
              <styles.IconImage
                src="https://demo.elbasoft.com/Nextjs_POC/images/2-2-45x45.png"
                alt="Yellow Gold"
                onClick={() => handleMetalTypeChange('Yellow Gold')}
                style={{ border: getBorderStyle(metalType, 'Yellow Gold') }}
              />
            </styles.titleContainer>
            <styles.titleContainer>
              <Typography variant="body1">Side Stone:</Typography>
              <Typography style={{ fontWeight: 'bold', fontSize: '16px' }}>
                {sideStone}
              </Typography>
            </styles.titleContainer>
            <styles.titleContainer>
              <styles.IconImage
                src="https://demo.elbasoft.com/Nextjs_POC/images/About1-45x45.png"
                alt="Lab Diamond"
                onClick={() => handleSideStoneChange('Lab Diamond')}
                style={{ border: getBorderStyle(sideStone, 'Lab Diamond') }}
              />
              <styles.IconImage
                src="https://demo.elbasoft.com/Nextjs_POC/images/About-45x45.png"
                alt="Natural Diamond"
                onClick={() => handleSideStoneChange('White Diamond')}
                style={{ border: getBorderStyle(sideStone, 'White Diamond') }}
              />
            </styles.titleContainer>
            <ul style={{ paddingLeft: '10px' }}>
              {formatDescription(
                productList?.description
                  ? productList?.description
                  : 'Description not available for product'
              )}
            </ul>

            <Typography
              variant="h4"
              style={{ fontWeight: '500', fontSize: '24px' }}
            >
              {productList?.description ? (
                <>${productList?.selling_price}</>
              ) : (
                ''
              )}
            </Typography>
          </styles.infoContainer>
        </styles.outerContainer>
      )}
    </>
  );
};

export default Product;
