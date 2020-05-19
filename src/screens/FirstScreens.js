import React from 'react'
import {Text} from 'react-native'

const FirstScreen = () => {

    return(
        <Text style = {styles.textStyle}>
            'Arzoo'
        </Text>
    )
};

const styles = StyleSheet.create({
   textStyle: {
    fontSize:28
    }
});
export default FirstScreen;