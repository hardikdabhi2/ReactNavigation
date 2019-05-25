import {StyleSheet} from 'react-native';
import Dimensions from 'Dimensions';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#44a1b6'
    },
    viewTop:{
        flex:1,
        alignItems: 'center',
        paddingBottom: 35,
        justifyContent: 'flex-end',
    },
    textTop:{
        fontSize:40,
        color:'white',
        fontWeight: 'bold',
    },
    viewBottom:{
        flex:3,
        padding: 35,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    viewSquare:{
        height:width-30,
        width:width-50,
        backgroundColor:'white',
        borderRadius: 5,
        padding:25
    },
    viewSocial:{
        flex:1,
        // backgroundColor:'red',
        alignItems:'center'
    },
    textSignInWith:{
        color:'#909090',
        fontSize:20,
        fontWeight:'500',
    },
    viewSocialIcon:{
        flex:1,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center'
    },
    viewSocialButton:{
        flex:1,
        height:45,
        paddingRight:5,
        paddingLeft: 5,
    },
    viewFaceBook:{
        flex:1,
        height:45,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#333333',
        borderRadius:5
    },
    textFB:{
        color:'white',
        fontSize:17,
        fontWeight:'500'
    },
    viewDivider:{
        flex:0.3,
        width:width - 100,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    viewSubDivider:{
        flex:1,
        height:1,
        backgroundColor:'grey',
    },
    textOr:{
        padding:4,
        color:'grey',
        fontSize:14,
    },
    viewNormalLogin:{
        paddingTop: 10,
        flex:1.3,
        alignItems:'center',
        justifyContent:'space-between',
        // backgroundColor:'pink'
    },
    viewTextField:{
        flex:0.6,
        alignItems:'center',
        justifyContent:'space-between',
        width:width-100,
    },
    viewTextUserName:{
        flex:0.48,
        width:width-100,
        backgroundColor:'#EFEFEF',
        justifyContent:'center',
        paddingLeft:8,
        borderRadius:5
    },
    viewSubmitButton:{
        flex:0.3,
        width:width-100,
        backgroundColor:'#44a1b6',
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
    },
    textLogin:{
        fontSize:18,
        color:'white',
        fontWeight:'400'
    },
    viewForgotPass:{
        flex:0.2,
        flexDirection:'row',
        paddingTop:15,
        // backgroundColor:"red",
        alignItems:'center'
    },
    textForgotPass:{
        fontSize:15,
        fontWeight:'400',
        color:'white',
        paddingLeft:5
    }

});