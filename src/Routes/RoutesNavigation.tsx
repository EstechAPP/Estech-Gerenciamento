import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationOptions} from "@react-navigation/native-stack";
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import IconAnt from 'react-native-vector-icons/AntDesign'
import Icon from 'react-native-vector-icons/MaterialIcons'


//Screens Component
import SplashScreen from '../pages/StackNavigations/SplashScreen';
import TelaLogin from '../pages/StackNavigations/TelaLogin';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import TelaHome  from '../pages/TabNavigations/TelaHome';
import { Pendentes } from '../pages/TabNavigations/Pendentes';
import { TelaAgenda } from '../pages/TabNavigations/Agenda';
import Perfil from '../pages/TabNavigations/Perfil';
import { AlterarEmpresa } from '../pages/StackNavigations/AlterarEmpresa';
import { Servicos } from '../pages/StackNavigations/Servicos';
import { Funcionarios } from '../pages/StackNavigations/Funcionarios';
import { Categorias } from '../pages/StackNavigations/Categorias';
import { FormasPagamento } from '../pages/StackNavigations/FormasPagamento';
import { AddServico } from '../pages/StackNavigations/Servicos/AddServico';
import { AddFuncionario } from '../pages/StackNavigations/Funcionarios/AddFuncionario';
import { VincularFuncionariosServico } from '../pages/StackNavigations/Servicos/VincularFuncionariosServico';




function TabNavigation(){
  const theme = useTheme();
  const Tab = createBottomTabNavigator();
  function NavigatorOptions(): BottomTabNavigationOptions{
    const options : BottomTabNavigationOptions ={
      headerShown: false,
      tabBarStyle:{
        backgroundColor: theme.colors.background_bege,
      },
      tabBarActiveTintColor: theme.colors.black,
      tabBarInactiveTintColor: theme.colors.cinza_titulo,
      tabBarLabelStyle: {
        fontSize: 13
      }
    }
    return options;
  }

  return(
    <Tab.Navigator screenOptions={NavigatorOptions}>
      <Tab.Screen
        name='Inicio'
        component={TelaHome}
        options={{tabBarIcon: ({color, size}) => (<IconAnt name='home' color={color} size={size}/>)}}
      />
      <Tab.Screen
        name='Pendentes'
        component={Pendentes}
        options={{tabBarIcon: ({color, size}) => (<IconAnt name='exception1' color={color} size={size}/>)}}
      />
      <Tab.Screen
        name='Agenda'
        component={TelaAgenda}
        options={{tabBarIcon: ({color, size}) => (<IconAnt name='calendar' color={color} size={size}/>)}}
      />
      <Tab.Screen
        name='Perfil'
        component={Perfil}
        options={{tabBarIcon: ({color, size}) => (<IconAnt name='user' color={color} size={size}/>)}}
      />
    </Tab.Navigator>
  )
}


function RoutesNavigator() {
    const navigation = useNavigation();
    const Stack = createNativeStackNavigator();
    function StackOptions(): NativeStackNavigationOptions{
      const options : NativeStackNavigationOptions = {
        headerTransparent: true,
        headerTitle: '',
        headerLeft: (props) => (
          navigation.canGoBack() && (
          <TouchableOpacity style={{width: 37, height: 37, backgroundColor: '#FFF', borderRadius: 18.5, alignItems: 'center', justifyContent: 'center'}} onPress={() => {navigation.goBack()}}>
            <Icon name='chevron-left' size={RFValue(28)} />
          </TouchableOpacity>
          )
        )
      }
      return options;
    }
    
  
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TelaLogin"
          component={TelaLogin}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TabNavigation"
          component={TabNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AlterarEmpresa"
          component={AlterarEmpresa}
          options={StackOptions}
        />
        <Stack.Screen
          name="Servicos"
          component={Servicos}
          options={StackOptions}
        />
        <Stack.Screen
          name="AddServico"
          component={AddServico}
          options={StackOptions}
        />
        <Stack.Screen
          name="VincularFuncionariosServico"
          component={VincularFuncionariosServico}
          options={StackOptions}
        />
        <Stack.Screen
          name="AddFuncionario"
          component={AddFuncionario}
          options={StackOptions}
        />
        <Stack.Screen
          name="Funcionarios"
          component={Funcionarios}
          options={StackOptions}
        />
        <Stack.Screen
          name="Categorias"
          component={Categorias}
          options={StackOptions}
        />
        <Stack.Screen
          name="FormasPagamento"
          component={FormasPagamento}
          options={StackOptions}
        />

      </Stack.Navigator>
    );
  }
  
  export default RoutesNavigator;