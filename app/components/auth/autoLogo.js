import React from "react";
import {View, Image} from "react-native";

import LogoImage from "../../asset/imgs/winthiary_login_logo";

const LogoComponent = () => {
    <View style = {{alignItems : 'center'}}>
        <Image
            source ={LogoImage}
            resizeMode = {'contain'}
            style = {{
                width : 300,
                height : 88,
            }}
        />
    </View>
};

export default LogoComponent;


