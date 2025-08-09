import { StyleSheet } from 'react-native';
import colors from './Colors';
import typography from './Typography';

import fonts from './Fonts';

const Styles = StyleSheet.create({


  container: { 
    flex: 1, 
    backgroundColor: colors.white 
  },
    

  inputContainer1: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 40,
        
        
        borderWidth: 0.5,
        borderColor: colors.grey2,
        borderRadius: 10,
    },

    inputContainerSeller: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '65%',
        height: 40,
        borderWidth: 0.5,
        borderColor: colors.grey4,
        borderRadius: 3,
    },


    buttonContainer1: {
    width: 110,
    height: 33,
    backgroundColor: colors.primary,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },


    dropdownSelector:{
        width:'100%',
         height: 40,
        borderRadius:3,
        borderWidth:0.5,
        borderColor:colors.grey2,
        // alignSelf:'center',
        
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:10,
        


    },


dropdownArea:{
        width:'100%',
        height: 100,
        borderRadius:10,
        // marginTop:20,
        backgroundColor:colors.white,
        
        // elevation:5,
        // alignSelf:'center'
        
    },

dropDownItem:{
        width:'100%',
        height: 50,
        borderBottomWidth:0.5,
        borderBottomColor:colors.grey1,
        alignSelf:'center',
        // alignItems:'center',
        justifyContent:'center',
        paddingLeft:10,
        borderRadius:5
    },


modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: colors.white,
    paddingTop: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    width: '90%',
    paddingBottom: 106,
    // alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.grey7,
    maxHeight: 672,
  },



  textHeaderContainer:{
        width: '95%',
        // borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignSelf:'center',
        // gap:10,
        overflow:'hidden'
  },


  linearTextHeader:{
       width: 115, height: 2 ,borderRadius:1
  },


  SwitchOffContainer:{
    width:38,
    height:20,
    borderRadius:20,
    backgroundColor:colors.white,
    paddingHorizontal:2,
    justifyContent:'center',
    // borderWidth:10,
  },

  SwitcInnerOffContainer:{
    width:16,
    height:16,
    borderRadius:32,
    backgroundColor:colors.primary,
  }

      
      

});

export default Styles;