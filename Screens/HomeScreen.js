import react from 'React'
import { View,Text,Stylesheet,Platform,StatusBar,Image,Dimensions } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import {RFvalue} from 'react-native-fontsize'
let customfonts ={
    "Bubblegum-Sans":require("../assets/BubblegumSans-Regular.ttf")
} 
export default class HomeScreen extends React.Component{
    constructor(){
        super()
        this.state={fontsloaded:false}
    }
    async _loadfont(){
        await Font.loadAsync(customfonts)
        this.setState({fontsloaded:true})
    }
    componentDidMount(){
        this._loadfont()
    }
    render(){
        if(!this.state.fontsloaded){
            return(
                <AppLoading></AppLoading>
            )
        }
        else{}
    }
}
const Styles = StyleSheet.create({
    container: { flex: 1 }, cardContainer: { margin: RFValue(13), backgroundColor: "#2f345d", borderRadius: RFValue(20) },
})