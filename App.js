import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableHighlight, document, Image} from 'react-native';
import Button from 'react-native-button';
import PopupDialog, {SlideAnimation, DialogTitle, Height, Width}from 'react-native-popup-dialog';
import update from 'immutability-helper';
import RNRestart from 'react-native-restart';

var buttonimages =  ['https://cdn.discordapp.com/attachments/379254373068570625/384062046309842945/h_.png','https://cdn.discordapp.com/attachments/379254373068570625/384060959616139265/e1_.png'];
var imagestate = false;
const slideAnimation = new SlideAnimation({
  slideFrom: 'bottom',
})
export default class ExampleComponent extends Component {
  constructor(props){
    super(props); 
    this.state = {
      array: [-1,-1,-1,-1,-1,-1,-1,-1,-1],
      buttonimage1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxwF5vSEVmWoo-mUlRTVO11aezCjxhn1XZ8uChW5DEhDCqgpzb",
      buttonimage2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxwF5vSEVmWoo-mUlRTVO11aezCjxhn1XZ8uChW5DEhDCqgpzb",
      buttonimage3:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxwF5vSEVmWoo-mUlRTVO11aezCjxhn1XZ8uChW5DEhDCqgpzb",
      buttonimage4:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxwF5vSEVmWoo-mUlRTVO11aezCjxhn1XZ8uChW5DEhDCqgpzb",
      buttonimage5:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxwF5vSEVmWoo-mUlRTVO11aezCjxhn1XZ8uChW5DEhDCqgpzb",
      buttonimage6:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxwF5vSEVmWoo-mUlRTVO11aezCjxhn1XZ8uChW5DEhDCqgpzb",
      buttonimage7:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxwF5vSEVmWoo-mUlRTVO11aezCjxhn1XZ8uChW5DEhDCqgpzb",
      buttonimage8:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxwF5vSEVmWoo-mUlRTVO11aezCjxhn1XZ8uChW5DEhDCqgpzb",
      buttonimage9:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxwF5vSEVmWoo-mUlRTVO11aezCjxhn1XZ8uChW5DEhDCqgpzb",
      pressed1: false,
      pressed2: false,
      pressed3: false,
      pressed4: false,
      pressed5: false,
      pressed6: false,
      pressed7: false,
      pressed8: false,
      pressed9: false,
      imagestate: false,
      count: 0}; 
  }

  _handlePress() {
    this.popupDialog.show();
    //window.location.reload(true);
    console.log('Won!');

    this.setState(function(prevState, props){
      return {
        array: [-1,-1,-1,-1,-1,-1,-1,-1,-1],
      buttonimage1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxwF5vSEVmWoo-mUlRTVO11aezCjxhn1XZ8uChW5DEhDCqgpzb",
      buttonimage2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxwF5vSEVmWoo-mUlRTVO11aezCjxhn1XZ8uChW5DEhDCqgpzb",
      buttonimage3:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxwF5vSEVmWoo-mUlRTVO11aezCjxhn1XZ8uChW5DEhDCqgpzb",
      buttonimage4:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxwF5vSEVmWoo-mUlRTVO11aezCjxhn1XZ8uChW5DEhDCqgpzb",
      buttonimage5:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxwF5vSEVmWoo-mUlRTVO11aezCjxhn1XZ8uChW5DEhDCqgpzb",
      buttonimage6:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxwF5vSEVmWoo-mUlRTVO11aezCjxhn1XZ8uChW5DEhDCqgpzb",
      buttonimage7:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxwF5vSEVmWoo-mUlRTVO11aezCjxhn1XZ8uChW5DEhDCqgpzb",
      buttonimage8:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxwF5vSEVmWoo-mUlRTVO11aezCjxhn1XZ8uChW5DEhDCqgpzb",
      buttonimage9:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxwF5vSEVmWoo-mUlRTVO11aezCjxhn1XZ8uChW5DEhDCqgpzb",
      pressed1: false,
      pressed2: false,
      pressed3: false,
      pressed4: false,
      pressed5: false,
      pressed6: false,
      pressed7: false,
      pressed8: false,
      pressed9: false,
      imagestate: false,
      count: 0
      }
    }) 
  }
 
  _Draw(){
    this.popupDialog1.show();
    //window.location.reload(true);
    console.log('Draw!');

    this.setState(function(prevState, props){
      return {
        array: [-1,-1,-1,-1,-1,-1,-1,-1,-1],
      buttonimage1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxwF5vSEVmWoo-mUlRTVO11aezCjxhn1XZ8uChW5DEhDCqgpzb",
      buttonimage2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxwF5vSEVmWoo-mUlRTVO11aezCjxhn1XZ8uChW5DEhDCqgpzb",
      buttonimage3:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxwF5vSEVmWoo-mUlRTVO11aezCjxhn1XZ8uChW5DEhDCqgpzb",
      buttonimage4:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxwF5vSEVmWoo-mUlRTVO11aezCjxhn1XZ8uChW5DEhDCqgpzb",
      buttonimage5:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxwF5vSEVmWoo-mUlRTVO11aezCjxhn1XZ8uChW5DEhDCqgpzb",
      buttonimage6:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxwF5vSEVmWoo-mUlRTVO11aezCjxhn1XZ8uChW5DEhDCqgpzb",
      buttonimage7:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxwF5vSEVmWoo-mUlRTVO11aezCjxhn1XZ8uChW5DEhDCqgpzb",
      buttonimage8:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxwF5vSEVmWoo-mUlRTVO11aezCjxhn1XZ8uChW5DEhDCqgpzb",
      buttonimage9:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxwF5vSEVmWoo-mUlRTVO11aezCjxhn1XZ8uChW5DEhDCqgpzb",
      pressed1: false,
      pressed2: false,
      pressed3: false,
      pressed4: false,
      pressed5: false,
      pressed6: false,
      pressed7: false,
      pressed8: false,
      pressed9: false,
      imagestate: false,
      count: 0
      }
    }) 
  }

  _checkarraystate(array, index){
    console.log(array[0],array[4],array[8]);
    var currentCount = this.state.count + 1;
    if(currentCount == 9)this._Draw();
    this.setState(function(prevState, props){
      return {
        count: currentCount
      }
    }) 
    switch(index){
      case 1:
        if(array[0] == array[1] && array[1] == array[2])this._handlePress();
        if(array[0] == array[4] && array[4] == array[8])this._handlePress();
        if(array[0] == array[3] && array[3] == array[6])this._handlePress();
        break;
      case 2:
        if(array[0] == array[1] && array[1] == array[2])this._handlePress();
        if(array[1] == array[4] && array[4] == array[7])this._handlePress();
        break;
      case 3:
        if(array[0] == array[1] && array[1] == array[2])this._handlePress();
        if(array[2] == array[4] && array[4] == array[6])this._handlePress();
        if(array[2] == array[5] && array[5] == array[8])this._handlePress();
        break;
      case 4:
        if(array[0] == array[3] && array[3] == array[6])this._handlePress();
        if(array[3] == array[4] && array[4] == array[5])this._handlePress();
        break;
      case 5:
        if(array[0] == array[4] && array[4] == array[8])this._handlePress();
        if(array[1] == array[4] && array[4] == array[7])this._handlePress();
        if(array[2] == array[4] && array[4] == array[6])this._handlePress();
        if(array[3] == array[4] && array[4] == array[5])this._handlePress();
        break;
      case 6:
        if(array[2] == array[5] && array[5] == array[8])this._handlePress();
        if(array[3] == array[4] && array[4] == array[5])this._handlePress();
        break;
      case 7:
        if(array[0] == array[3] && array[3] == array[6])this._handlePress();
        if(array[6] == array[7] && array[7] == array[8])this._handlePress();
        if(array[2] == array[4] && array[4] == array[6])this._handlePress();
        break;
      case 8:
        if(array[6] == array[7] && array[7] == array[8])this._handlePress();
        if(array[1] == array[4] && array[4] == array[7])this._handlePress();
        break;
      case 9:
        if(array[0] == array[4] && array[4] == array[8])this._handlePress();
        if(array[2] == array[5] && array[5] == array[8])this._handlePress();
        if(array[6] == array[7] && array[7] == array[8])this._handlePress();
        break;
      defalut:
        break;
    }
  }
  _changeImage1(){ 
    const pressed = this.state.pressed1;
    const state = this.state.imagestate;
    if(!pressed){
    if(!state){
      var buttonimage = buttonimages[0];
      var array = this.state.array;
      var updateComment = update(array[0], {$set: 0});
      var newArray = update(array, {$splice: [[0, 1, updateComment]]});
      this.setState(function(prevState, props){
        return {buttonimage1: buttonimage,
          imagestate: true,
          pressed1: true,
          array: newArray
        }
      }) 
      console.log(state,'grid1',this.state.array[0]); 
      this._checkarraystate(newArray,1);
      
    } else 
    if(state){
      var buttonimage = buttonimages[1];
      var array = this.state.array;
      var updateComment = update(array[0], {$set: 1});
      var newArray = update(array, {$splice: [[0, 1, updateComment]]});
      this.setState(function(prevState, props){
        return {buttonimage1: buttonimage,
          imagestate: false,
          pressed1: true,
          array: newArray
        }
      })
      console.log(state,'grid1',this.state.array[0]);
      this._checkarraystate(newArray,1);
    }  
  }
}
  _changeImage2(){ 
    const state = this.state.imagestate;
    const pressed = this.state.pressed2;
    if(!pressed){
    if(!state){
      var buttonimage = buttonimages[0];
      var array = this.state.array;
      var updateComment = update(array[1], {$set: 0});
      var newArray = update(array, {$splice: [[1, 1, updateComment]]});
      this.setState(function(prevState, props){
        return {buttonimage2: buttonimage,
          imagestate: true,
          pressed2: true,
          array: newArray
        }
      }) 
      console.log(state,'grid1',this.state.array[0]);
      this._checkarraystate(newArray,2);
      
    } else 
    if(state){
      var buttonimage = buttonimages[1];
      var array = this.state.array;
      var updateComment = update(array[1], {$set: 1});
      var newArray = update(array, {$splice: [[1, 1, updateComment]]});
      this.setState(function(prevState, props){
        return {buttonimage2: buttonimage,
          imagestate: false,
          pressed2: true,
          array: newArray
        }
      })
      console.log(state,'grid2',this.state.array[1]);
      this._checkarraystate(newArray,2);
    }  
  }
}
  _changeImage3(){ 
    const state = this.state.imagestate;
    const pressed = this.state.pressed3;
    if(!pressed){
    if(!state){
      var buttonimage = buttonimages[0];
      var array = this.state.array;
      var updateComment = update(array[2], {$set: 0});
      var newArray = update(array, {$splice: [[2, 1, updateComment]]});
      this.setState(function(prevState, props){
        return {buttonimage3: buttonimage,
          imagestate: true,
          pressed3: true,
          array: newArray
        }
      }) 
      console.log(state,'grid3',this.state.array[2]);
      this._checkarraystate(newArray,3);
      
    } else 
    if(state){
      var buttonimage = buttonimages[1];
      var array = this.state.array;
      var updateComment = update(array[2], {$set: 1});
      var newArray = update(array, {$splice: [[2, 1, updateComment]]});
      this.setState(function(prevState, props){
        return {buttonimage3: buttonimage,
          imagestate: false,
          pressed3: true,
          array: newArray
        }
      })
      console.log(state,'grid3',this.state.array[2]);
      this._checkarraystate(newArray,3);
    }  
  }
}
  _changeImage4(){ 
    const state = this.state.imagestate;
    const pressed = this.state.pressed4;
    if(!pressed){
    if(!state){
      var buttonimage = buttonimages[0];
      var array = this.state.array;
      var updateComment = update(array[3], {$set: 0});
      var newArray = update(array, {$splice: [[3, 1, updateComment]]});
      this.setState(function(prevState, props){
        return {buttonimage4: buttonimage,
          imagestate: true,
          pressed4: true,
          array: newArray
        }
      }) 
      console.log(state,'grid1',this.state.array[0]);
      this._checkarraystate(newArray,4);
      
    } else 
    if(state){
      var buttonimage = buttonimages[1];
      var array = this.state.array;
      var updateComment = update(array[3], {$set: 1});
      var newArray = update(array, {$splice: [[3, 1, updateComment]]});
      this.setState(function(prevState, props){
        return {buttonimage4: buttonimage,
          imagestate: false,
          pressed4: true,
          array: newArray
        }
      })
      console.log(state,'grid4',this.state.array[3]);
      this._checkarraystate(newArray,4);
    }  
  }
}
  _changeImage5(){ 
    const pressed = this.state.pressed5;
    const state = this.state.imagestate;
    if(!pressed){
    if(!state){
      var buttonimage = buttonimages[0];
      var array = this.state.array;
      var updateComment = update(array[4], {$set: 0});
      var newArray = update(array, {$splice: [[4, 1, updateComment]]});
      this.setState(function(prevState, props){
        return {buttonimage5: buttonimage,
          imagestate: true,
          pressed5: true,
          array: newArray
        }
      }) 
      console.log(state,'grid5',this.state.array[4]);
      this._checkarraystate(newArray,5);
      
    } else 
    if(state){
      var buttonimage = buttonimages[1];
      var array = this.state.array;
      var updateComment = update(array[4], {$set: 1});
      var newArray = update(array, {$splice: [[4, 1, updateComment]]});
      this.setState(function(prevState, props){
        return {buttonimage5: buttonimage,
          imagestate: false,
          pressed5: true,
          array: newArray
        }
      })
      console.log(state,'grid5',this.state.array[4]);
      this._checkarraystate(newArray,5);
    }  
  }
}
  _changeImage6(){ 
    const pressed = this.state.pressed6;
    const state = this.state.imagestate;
    if(!pressed){
    if(!state){
      var buttonimage = buttonimages[0];
      var array = this.state.array;
      var updateComment = update(array[5], {$set: 0});
      var newArray = update(array, {$splice: [[5, 1, updateComment]]});
      this.setState(function(prevState, props){
        return {buttonimage6: buttonimage,
          imagestate: true,
          pressed6: true,
          array: newArray
        }
      }) 
      console.log(state,'grid6',this.state.array[5]);
      this._checkarraystate(newArray,6);
      
    } else 
    if(state){
      var buttonimage = buttonimages[1];
      var array = this.state.array;
      var updateComment = update(array[5], {$set: 1});
      var newArray = update(array, {$splice: [[5, 1, updateComment]]});
      this.setState(function(prevState, props){
        return {buttonimage6: buttonimage,
          imagestate: false,
          pressed6: true,
          array: newArray
        }
      })
      console.log(state,'grid6',this.state.array[5]);
      this._checkarraystate(newArray,6);
    }  
  }
}
  _changeImage7(){ 
    const pressed = this.state.pressed7;
    const state = this.state.imagestate;
    if(!pressed){
    if(!state){
      var buttonimage = buttonimages[0];
      var array = this.state.array;
      var updateComment = update(array[6], {$set: 0});
      var newArray = update(array, {$splice: [[6, 1, updateComment]]});
      this.setState(function(prevState, props){
        return {buttonimage7: buttonimage,
          imagestate: true,
          pressed7: true,
          array: newArray
        }
      }) 
      console.log(state,'grid7',this.state.array[6]);
      this._checkarraystate(newArray,7);
      
    } else 
    if(state){
      var buttonimage = buttonimages[1];
      var array = this.state.array;
      var updateComment = update(array[6], {$set: 1});
      var newArray = update(array, {$splice: [[6, 1, updateComment]]});
      this.setState(function(prevState, props){
        return {buttonimage7: buttonimage,
          imagestate: false,
          pressed7: true,
          array: newArray
        }
      })
      console.log(state,'grid7',this.state.array[6]);
      this._checkarraystate(newArray,7);
    }  
  }
}
  _changeImage8(){ 
    const pressed = this.state.pressed8;
    const state = this.state.imagestate;
    if(!pressed){
    if(!state){
      var buttonimage = buttonimages[0];
      var array = this.state.array;
      var updateComment = update(array[7], {$set: 0});
      var newArray = update(array, {$splice: [[7, 1, updateComment]]});
      this.setState(function(prevState, props){
        return {buttonimage8: buttonimage,
          imagestate: true,
          pressed8: true,
          array: newArray
        }
      }) 
      console.log(state,'grid7',this.state.array[7]);
      this._checkarraystate(newArray,8);
      
    } else 
    if(state){
      var buttonimage = buttonimages[1];
      var array = this.state.array;
      var updateComment = update(array[7], {$set: 1});
      var newArray = update(array, {$splice: [[7, 1, updateComment]]});
      this.setState(function(prevState, props){
        return {buttonimage8: buttonimage,
          imagestate: false,
          pressed8: true,
          array: newArray
        }
      })
      console.log(state,'grid8',this.state.array[7]);
      this._checkarraystate(newArray,8);
    }  
  }
}
  _changeImage9(){ 
    const pressed = this.state.pressed9;
    const state = this.state.imagestate;
    if(!pressed){
    if(!state){
      var buttonimage = buttonimages[0];
      var array = this.state.array;
      var updateComment = update(array[8], {$set: 0});
      var newArray = update(array, {$splice: [[8, 1, updateComment]]});
      this.setState(function(prevState, props){
        return {buttonimage9: buttonimage,
          imagestate: true,
          pressed9: true,
          array: newArray
        }
      }) 
      console.log(state,'grid9',this.state.array[8]);
      this._checkarraystate(newArray,9); 
      
    } else 
    if(state){
      var buttonimage = buttonimages[1];
      var array = this.state.array;
      var updateComment = update(array[8], {$set: 1});
      var newArray = update(array, {$splice: [[8, 1, updateComment]]});
      this.setState(function(prevState, props){
        return {buttonimage9: buttonimage,
          imagestate: false,
          pressed9: true,
          array: newArray
        }
      })
      console.log(state,'grid9',this.state.array[8]);
      this._checkarraystate(newArray,9);
    }  
  }
}
  render() {
    
    return (
      <View style = {styles.background}>
      <View style = {styles.image}> 
        <Image source = {{uri:'https://cdn.discordapp.com/attachments/379254373068570625/384062046309842945/h_.png'}}
              style = {{
                width:100,
                height:150,}}/>
      
          <Image source = {{uri:'https://cdn.discordapp.com/attachments/379254373068570625/384060959616139265/e1_.png'}}
              style = {{
                width:120,
                height:150,}}/></View>
      <View style = {styles.container}> 
      
        <TouchableHighlight onPress={ () => this._changeImage1()}
          >
          <Image style = {styles.box} source = {{uri:this.state.buttonimage1}}/>
          </TouchableHighlight>
          <TouchableHighlight onPress={ () => this._changeImage2()}
          >
          <Image style = {styles.box} source = {{uri:this.state.buttonimage2}}/>
          </TouchableHighlight>
          <TouchableHighlight onPress={ () => this._changeImage3()}
          >
          <Image style = {styles.box} source = {{uri:this.state.buttonimage3}}/>
          </TouchableHighlight>
          <TouchableHighlight onPress={ () => this._changeImage4()}
          >
          <Image style = {styles.box} source = {{uri:this.state.buttonimage4}}/>
          </TouchableHighlight>
          <TouchableHighlight onPress={ () => this._changeImage5()}
          >
          <Image style = {styles.box} source = {{uri:this.state.buttonimage5}}/>
          </TouchableHighlight>
          <TouchableHighlight onPress={ () => this._changeImage6()}
          >
          <Image style = {styles.box} source = {{uri:this.state.buttonimage6}}/>
          </TouchableHighlight>
          <TouchableHighlight onPress={ () => this._changeImage7()}
          >
          <Image style = {styles.box} source = {{uri:this.state.buttonimage7}}/>
          </TouchableHighlight>
          <TouchableHighlight onPress={ () => this._changeImage8()}
          >
          <Image style = {styles.box} source = {{uri:this.state.buttonimage8}}/>
          </TouchableHighlight>
          <TouchableHighlight onPress={ () => this._changeImage9()}
          >
          <Image style = {styles.box} source = {{uri:this.state.buttonimage9}}/>
          </TouchableHighlight>
          <PopupDialog
          ref = { (popupDialog)=> {this.popupDialog = popupDialog;}}
          dialogAnimation={slideAnimation}
          dialogTitle={<DialogTitle title="Game State" />}
          height = {80}
          width = {75}
          >
          <View>
          <Text style = {styles.text}> Ez win </Text> 
        </View>
        </PopupDialog>
        <PopupDialog
          ref = { (popupDialog1)=> {this.popupDialog1 = popupDialog1;}}
          dialogAnimation={slideAnimation}
          dialogTitle={<DialogTitle title="Game State" />}
          height = {80}
          width = {75}
          >
          <View>
          <Text style = {styles.text}> Draw </Text> 
        </View>
        </PopupDialog>
          </View>
          <View style = {styles.image}> 
        <Image source = {{uri:'https://cdn.discordapp.com/attachments/377030409386590208/384274752828866562/HE_22.png'}}
              style = {{
                width:200,
                height:100,}}/>
                </View>
          </View>

    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', 
    flexWrap: 'wrap',
 
    alignItems: 'center',
  },
  background: {
    backgroundColor: '#C0CFC7',
    //position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  box: {
    margin: 2, 
    width: Dimensions.get('window').width /3 - 6,
    height: Dimensions.get('window').width /3 - 6, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "skyblue"
  },
  image: {
    flexDirection: 'row',
    justifyContent: 'center', 
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: '#a9a9a9'
  }

}
);
