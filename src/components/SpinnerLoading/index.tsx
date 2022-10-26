import AnimatedLottieView from 'lottie-react-native';
import React from 'react';


import {
 Container, Texto
} from './styles';

export function SpinnerLoading({titulo} : {titulo: string}){
return (
   <Container>
    <AnimatedLottieView
      source={require('../../../assets/barberloading.json')}
      loop
      autoPlay
      style={{
        width: 62,
        height: 62
      }}
    />
        <Texto>{titulo}</Texto>
   </Container>
  );
}