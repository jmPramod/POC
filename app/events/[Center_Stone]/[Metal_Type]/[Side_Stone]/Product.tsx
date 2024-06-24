'use client';
import React, { useEffect, useState } from 'react';
import Slider from './slider/Slider';
import axios from 'axios';
import { styles } from './styles';
import { Skeleton, Tooltip, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import options1 from '../../../../../options.json';
const Product = (props: any) => {
  const { Center_Stone, Metal_Type, Side_Stone } = props.params.params;
  const [productList, setProductList] = useState<any>();
  const [centerStone, setCenterStone] = useState('');
  const [metalType, setMetalType] = useState('');
  const [sideStone, setSideStone] = useState('');

  const [category, setCategory] = useState(
    decodeURIComponent(Center_Stone) + decodeURIComponent(Metal_Type)
  );
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const [lastChanged, setLastChanged] = useState('');
  const [options, setOptions] = useState<any>(null);
  // Fetch URL parameters from props and set initial state
  useEffect(() => {
    // console.log('props', props);

    if (Center_Stone && Metal_Type && Side_Stone) {
      setCenterStone(decodeURIComponent(Center_Stone));
      setMetalType(decodeURIComponent(Metal_Type));
      setSideStone(decodeURIComponent(Side_Stone));
    }
  }, [props.params]);
  // Combined useEffect for fetching options and products
  useEffect(() => {
    const fetchOptionsAndProduct = async () => {
      try {
        // Determine which parameter was changed last

        // Fetch options

        // Check if the selected values exist in the options

        // Fetch product data if the selection is valid
        if (category && metalType && sideStone) {
          const option: any = await axios.get(
            `https://next-poc-1.netlify.app/api/category/${category}`
          );
          // const option = options1.find((v) => v.key === category);

          console.log('option', option, category);

          setOptions(option.data?.data);
          if (option.data?.data?.val) {
            const response = await axios.get(
              `https://next-poc-1.netlify.app/api/events/${centerStone}/${metalType}/${sideStone}`
            );
            console.log('option true', response.data?.data);
            setProductList(response.data?.data);
          } else {
            console.log('option false');
          }
          // setProductList(null); // Clear product list if selection is invalid
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    if (centerStone && metalType && sideStone) {
      fetchOptionsAndProduct();
    }
  }, [centerStone, metalType, sideStone, category]);
  // Fetch product list whenever state changes
  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     const response = await axios.get(
  //       `https://next-poc-1.netlify.app/api/events/${centerStone}/${metalType}/${sideStone}`
  //     );
  //     setProductList(response.data?.data);
  //     setLoading(false);
  //   };

  //   if (centerStone && metalType && sideStone) {
  //     fetchProduct();
  //   }
  // }, [centerStone, metalType, sideStone]);
  // useEffect(() => {
  //   const fetchOptions = async () => {
  //     // const response = await axios.get(
  //     //   `https://next-poc-1.netlify.app/api/options/${changedValue}`
  //     // );
  //     // setOptions(response.data);
  //     const v = options1.filter((v) => {
  //       return v.key === centerStone;
  //     });
  //     console.log('options1', centerStone);

  //     console.log('v', v);

  //     setOptions(v[0]);
  //   };
  //   fetchOptions();
  // }, [centerStone]);
  // useEffect(() => {
  //   const fetchOptions = async () => {
  //     // const response = await axios.get(
  //     //   `https://next-poc-1.netlify.app/api/options/${changedValue}`
  //     // );
  //     // setOptions(response.data);
  //     const v = options1.filter((v) => {
  //       return v.key === metalType;
  //     });
  //     console.log('options1', metalType);

  //     console.log('v', v);

  //     setOptions(v[0]);
  //   };
  //   fetchOptions();
  // }, [metalType]);
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
            {/* <styles.titleContainer>
              <Tooltip title="Blue Sapphire">
                <styles.IconImage
                  src="https://demo.elbasoft.com/Nextjs_POC/images/Variations-Stone-Blue-Sapphire-A-45x45.png"
                  alt="Blue Sapphire"
                  onClick={() => handleCenterStoneChange('Blue Sapphire')}
                  style={{
                    border: getBorderStyle(centerStone, 'Blue Sapphire'),
                  }}
                />
              </Tooltip>
              <Tooltip title="Emerald">
                <styles.IconImage
                  src="https://demo.elbasoft.com/Nextjs_POC/images/Variations-Stone-Green-Emerald-A-45x45.png"
                  alt="Green Emerald"
                  onClick={() => handleCenterStoneChange('Emerald')}
                  style={{ border: getBorderStyle(centerStone, 'Emerald') }}
                />
              </Tooltip>
              <Tooltip title="Morganite">
                <styles.IconImage
                  src="https://demo.elbasoft.com/Nextjs_POC/images/Morganite-gemstone-45x45.png"
                  alt="Morganite"
                  onClick={() => handleCenterStoneChange('Morganite')}
                  style={{ border: getBorderStyle(centerStone, 'Morganite') }}
                />
              </Tooltip>
              <Tooltip title="Pink Sapphire">
                <styles.IconImage
                  src="https://demo.elbasoft.com/Nextjs_POC/images/pink-sapphaire-45x45.png"
                  alt="Pink Sapphire"
                  onClick={() => handleCenterStoneChange('Pink Sapphire')}
                  style={{
                    border: getBorderStyle(centerStone, 'Pink Sapphire'),
                  }}
                />
              </Tooltip>
              <Tooltip title="Ruby">
                <styles.IconImage
                  src="https://demo.elbasoft.com/Nextjs_POC/images/Variations-Stone-Red-Ruby-A-45x45.png"
                  alt="Red Ruby"
                  onClick={() => handleCenterStoneChange('Ruby')}
                  style={{ border: getBorderStyle(centerStone, 'Ruby') }}
                />
              </Tooltip>
              <Tooltip title="Tanzanite">
                <styles.IconImage
                  src="https://demo.elbasoft.com/Nextjs_POC/images/tanzanite-45x45.png"
                  alt="Tanzanite"
                  onClick={() => handleCenterStoneChange('Tanzanite')}
                  style={{ border: getBorderStyle(centerStone, 'Tanzanite') }}
                />
              </Tooltip>
            </styles.titleContainer> */}
            <styles.titleContainer>
              {options?.Center_Stone?.includes('Blue Sapphire') && (
                <Tooltip title="Blue Sapphire">
                  <styles.IconImage
                    src="https://demo.elbasoft.com/Nextjs_POC/images/Variations-Stone-Blue-Sapphire-A-45x45.png"
                    alt="Blue Sapphire"
                    onClick={() => {
                      handleCenterStoneChange('Blue Sapphire');
                      setCategory('Blue Sapphire' + metalType);
                    }}
                    style={{
                      border: getBorderStyle(centerStone, 'Blue Sapphire'),
                    }}
                  />
                </Tooltip>
              )}
              {options?.Center_Stone?.includes('Emerald') && (
                <Tooltip title="Emerald">
                  <styles.IconImage
                    src="https://demo.elbasoft.com/Nextjs_POC/images/Variations-Stone-Green-Emerald-A-45x45.png"
                    alt="Green Emerald"
                    onClick={() => {
                      handleCenterStoneChange('Emerald');
                      setCategory('Emerald' + metalType);
                    }}
                    style={{ border: getBorderStyle(centerStone, 'Emerald') }}
                  />
                </Tooltip>
              )}
              {options?.Center_Stone?.includes('Morganite') && (
                <Tooltip title="Morganite">
                  <styles.IconImage
                    src="https://demo.elbasoft.com/Nextjs_POC/images/Morganite-gemstone-45x45.png"
                    alt="Morganite"
                    onClick={() => {
                      handleCenterStoneChange('Morganite');
                      setCategory('Morganite' + metalType);
                    }}
                    style={{ border: getBorderStyle(centerStone, 'Morganite') }}
                  />
                </Tooltip>
              )}
              {options?.Center_Stone?.includes('Pink Sapphire') && (
                <Tooltip title="Pink Sapphire">
                  <styles.IconImage
                    src="https://demo.elbasoft.com/Nextjs_POC/images/pink-sapphaire-45x45.png"
                    alt="Pink Sapphire"
                    onClick={() => {
                      handleCenterStoneChange('Pink Sapphire');

                      setCategory('Pink Sapphire' + metalType);
                    }}
                    style={{
                      border: getBorderStyle(centerStone, 'Pink Sapphire'),
                    }}
                  />
                </Tooltip>
              )}
              {options?.Center_Stone?.includes('Ruby') && (
                <Tooltip title="Ruby">
                  <styles.IconImage
                    src="https://demo.elbasoft.com/Nextjs_POC/images/Variations-Stone-Red-Ruby-A-45x45.png"
                    alt="Ruby"
                    onClick={() => {
                      handleCenterStoneChange('Ruby');
                      setCategory('Ruby' + metalType);
                    }}
                    style={{ border: getBorderStyle(centerStone, 'Ruby') }}
                  />
                </Tooltip>
              )}{' '}
              {options?.Center_Stone?.includes('Tanzanite') && (
                <Tooltip title="Tanzanite">
                  <styles.IconImage
                    src="https://demo.elbasoft.com/Nextjs_POC/images/tanzanite-45x45.png"
                    alt="Tanzanite"
                    onClick={() => {
                      handleCenterStoneChange('Tanzanite');
                      setCategory('Tanzanite' + metalType);
                    }}
                    style={{ border: getBorderStyle(centerStone, 'Tanzanite') }}
                  />
                </Tooltip>
              )}
            </styles.titleContainer>
            <styles.titleContainer>
              <Typography variant="body1">Metal Type:</Typography>
              <Typography style={{ fontWeight: 'bold', fontSize: '16px' }}>
                {metalType}
              </Typography>
            </styles.titleContainer>
            <styles.titleContainer>
              {options?.Metal_Type?.includes('Rose Gold') && (
                <Tooltip title="Rose Gold">
                  <styles.IconImage
                    src="https://demo.elbasoft.com/Nextjs_POC/images/3-2-45x45.png"
                    alt="Rose Gold"
                    onClick={() => {
                      handleMetalTypeChange('Rose Gold');

                      setCategory('Rose Gold' + centerStone);
                    }}
                    style={{
                      border: getBorderStyle(metalType, 'Rose Gold'),
                    }}
                  />
                </Tooltip>
              )}
              {options?.Metal_Type?.includes('White Gold') && (
                <Tooltip title="White Gold">
                  <styles.IconImage
                    src="https://demo.elbasoft.com/Nextjs_POC/images/1-2-45x45.png"
                    alt="White Gold"
                    onClick={() => {
                      handleMetalTypeChange('White Gold');

                      setCategory('White Gold' + centerStone);
                    }}
                    style={{
                      border: getBorderStyle(metalType, 'White Gold'),
                    }}
                  />
                </Tooltip>
              )}
              {options?.Metal_Type?.includes('Yellow Gold') && (
                <Tooltip title="Yellow Gold">
                  <styles.IconImage
                    src="	https://demo.elbasoft.com/Nextjs_POC/images/2-2-45x45.png"
                    alt="Yellow Gold"
                    onClick={() => {
                      handleMetalTypeChange('Yellow Gold');

                      setCategory('Yellow Gold' + centerStone);
                    }}
                    style={{
                      border: getBorderStyle(metalType, 'Yellow Gold'),
                    }}
                  />
                </Tooltip>
              )}
            </styles.titleContainer>
            <styles.titleContainer>
              <Typography variant="body1">Side Stone:</Typography>
              <Typography style={{ fontWeight: 'bold', fontSize: '16px' }}>
                {sideStone}
              </Typography>
            </styles.titleContainer>
            <styles.titleContainer>
              <Tooltip title="Lab Diamond">
                <styles.IconImage
                  src="https://demo.elbasoft.com/Nextjs_POC/images/About1-45x45.png"
                  alt="Lab Diamond"
                  onClick={() => {
                    handleSideStoneChange('Lab Diamond');
                  }}
                  style={{ border: getBorderStyle(sideStone, 'Lab Diamond') }}
                />
              </Tooltip>
              <Tooltip title="White Diamond">
                <styles.IconImage
                  src="https://demo.elbasoft.com/Nextjs_POC/images/About-45x45.png"
                  alt="Natural Diamond"
                  onClick={() => handleSideStoneChange('White Diamond')}
                  style={{ border: getBorderStyle(sideStone, 'White Diamond') }}
                />
              </Tooltip>
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
