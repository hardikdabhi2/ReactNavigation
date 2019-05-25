import {StyleSheet} from 'react-native';
import Dimensions from 'Dimensions';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#44a1b6',
    },
    viewTop:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 25,
    },
    textTop:{
        fontSize:40,
        color:'white',
        fontWeight: 'bold',
    },
    viewBottom:{
        flex:3,
        paddingTop: 30,
        paddingLeft: 15,
        paddingRight: 15,
    },
    viewCard:{
        height:width,
        width:width - 30,
        backgroundColor:'white',
        borderRadius: 5,
        marginBottom: 15,
    },
    viewCardTitle:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    textSignupTitle:{
        color:'#44a1b6',
        fontSize:22,
        fontWeight:'600'
    },
    viewCardCenter:{
        flex:5,
        alignItems:'center',
        justifyContent:'space-between',
    },
    viewTextField:{
        backgroundColor:'#EFEFEF',
        flex:1,
        margin: 4,
        borderRadius:5
    },
    textInput:{
        flex:1,
        width:width-80,
        paddingLeft:5
    },
    viewCardButtonSubmit:{
        flex:1.5,
        alignItems:'center',
        justifyContent:'center',
        paddingTop:8,
        paddingBottom:8,
    },
    viewButtonSubmit:{
            flex:0.6,
            width:width - 80,
            backgroundColor:'#44a1b6',
            borderRadius:5,
            alignItems:'center',
            justifyContent:'center'
    },
    textSignUp:{
        color:'white',
        fontSize:18,
        fontWeight: '600',
    },
    viewAlreadyAccount:{
        flex:0.3,
        height:30,
        alignItems:'center',
        justifyContent:'center',
        flexDirection: 'row',
    },
    textAlreadyAccount:{
        paddingLeft:5,
        fontSize:18,
        color:'white'
    }
});