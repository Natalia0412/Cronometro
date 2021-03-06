import React, {Component} from 'react';
import './style.css'
class App extends Component{
    constructor(props){
        super(props);
        this.state={
            numero:0,
            botao:'vai'
        };
        this.timer=null;
        this.vai=this.vai.bind(this);
        this.zerar=this.zerar.bind(this);
    }
    vai(){
        let state = this.state;
        if(this.timer!== null){
            clearInterval(this.timer);
            this.timer=null;
            state.botao='Vai';
        }else{
            
            this.timer=setInterval(()=>{
                let state=this.state;
                state.numero+=0.1;
                this.setState(state);
            },100);
            state.botao='Pausar';
        }
        this.setState(state);

    }
    zerar(){
        let state = this.state;
        if(this.timer!== null){
            clearInterval(this.timer);
            this.timer=null;
        }
        state.numero=0;
        state.botao='Vai';
        this.setState(state);

    }

    render(){
        return(
            <div className="container">
                <img src={require('./assets/cronometro.png')} className="img"/>
                <a className="timer">{this.state.numero.toFixed(1)}</a>
                <div className="areaBtn">
                    <a className="botao" onClick={this.vai}>{this.state.botao}</a>
                    <a className="botao" onClick={this.zerar}>Zerar</a>
                </div>
            </div>
        )
    }
}
export default App;

/**
 * <a className="timer">{this.state.numero.toFixed(1)}</a> ->
 * toFixed() põe casa decimal , se eu quero 0.00 -> toFixed(2) e assim por diante.
 */