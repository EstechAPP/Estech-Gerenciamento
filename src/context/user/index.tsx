import { useNavigation } from "@react-navigation/native";
import React, {createContext, useState} from "react";
import { IUserContextProps } from "../../types/user";

const Default_Value = {
    userState: {
        id: 0,
        nome: "",
        sobrenome: "",
        email: "",
        celular: "",
        cep: "",
        uf: "",
        cidade: "",
        foto_base64: "",
        dataCadastro: "",
        tipos_Usuarioid: 0,
        donoEmpresa: 0,
        funcionarioEmpresa: 0
    },
    setUserState: () => {},
    logout: () => {}
};

export const AuthContext = createContext<IUserContextProps>(Default_Value);


// Contexto de Autenticação : Onde constará os dados do usuário logado e funcionalidades de autenticação.

// Funções de login podem ser feitas aqui;
// utilizar useState para retornar no value Provider para fazer verificações;
// Funções para limpar o useState por exemplo tbm.


const AuthContextProvider : React.FC = ({ children }) => {
    const navigation = useNavigation();
    const [userState, setUserState] = useState(Default_Value.userState);

    function logout(){
        setUserState(Default_Value.userState);
        navigation.reset({index: 0, routes: [{name: 'TelaLogin'}]})
    }

    return(
        <AuthContext.Provider value={{userState, setUserState, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContextProvider};
export default AuthContext;