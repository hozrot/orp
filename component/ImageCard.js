import React from 'react';
import { SafeAreaView } from 'react-native';
import ImagedCardView from "react-native-imaged-card-view";

function ImageCard(props) {
    return (
        <SafeAreaView style={{top:30}}> 
            <ImagedCardView 
            stars={5}
            reviews={0}
            ratings={5}
            title="Yosemite"
            rightSideValue="$990"
            subtitle="California"
            leftSideValue="3 Days"
            backgroundColor="#ff6460"
            source={require("../assets/logo.jpeg")}/>
        </SafeAreaView>
    );
}

export default ImageCard;