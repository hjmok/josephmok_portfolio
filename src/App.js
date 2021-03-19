import React, { Component } from 'react';
import GAN from './Components/Project_GANs';
import SSD from './Components/Project_SSD';
import FD from './Components/Project_FD';
import Plate from './Components/Project_Plate';
import CNN from './Components/Project_CNN';
import AN from './Components/Project_AN';
import TG from './Components/Project_TG';
import CB from './Components/Project_CB';
import TFE from './Components/Project_TFE';
import TM from './Components/Project_TM';
import Taxi from './Components/Project_Taxi';
import Bank from './Components/Project_Bank';
import Income from './Components/Project_Income';
import RNNsd from './Components/Project_RNNsd';
import RNNgsp from './Components/Project_RNNgsp';
import SOM from './Components/Project_SOM';
import RBM from './Components/Project_RBM';
import AE from './Components/Project_AE';
import CH from './Components/Project_CH';
import BC from './Components/Project_BC';
import DS from './Components/Project_DS';
import CC from './Components/Project_CC';
import {Route, Link} from 'react-router-dom';
import App_test from './Components/App_test';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={App_test} />
        <Route path="/GAN" component={GAN}/>
        <Route exact path="/SSD" component={SSD}/>
        <Route exact path="/FD" component={FD}/>
        <Route exact path="/license_plate" component={Plate}/>
        <Route exact path="/CNN" component={CNN}/>    
        <Route exact path="/AlexNet" component={AN}/>   
        <Route exact path="/TG" component={TG}/>   
        <Route exact path="/CB" component={CB}/>     
        <Route exact path="/TFE" component={TFE}/>   
        <Route exact path="/TM" component={TM}/>   
        <Route exact path="/Taxi" component={Taxi}/>  
        <Route exact path="/Bank" component={Bank}/>                                                                                                                                                                                                                            
        <Route exact path="/Income" component={Income}/>         
        <Route exact path="/SeasonalRNN" component={RNNsd}/>           
        <Route exact path="/StockPriceRNN" component={RNNgsp}/>      
        <Route exact path="/SOM" component={SOM}/>
        <Route exact path="/RBM" component={RBM}/>
        <Route exact path="/AE" component={AE}/> 
        <Route exact path="/CH" component={CH}/>     
        <Route exact path="/BC" component={BC}/> 
        <Route exact path="/DS" component={DS}/>    
        <Route exact path="/CC" component={CC}/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
      </div>
    )
  }
}

export default App;


//<Route exact path="/project" component={Project}/>