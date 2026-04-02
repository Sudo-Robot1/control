import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "../screens/HomeScreen";
import EntidadesScreen from "../screens/EntidadesScreen";
import ContarPagarScreen from "../screens/ContarPagarScreen";
import ContasReceberScreen from "../screens/ContasReceberScreen";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Entidades" component={EntidadesScreen} />
            <Drawer.Screen name="Contas a Pagar" component={ContarPagarScreen} />
            <Drawer.Screen name="Contas a Receber" component={ContasReceberScreen} />
        </Drawer.Navigator>
    );
}