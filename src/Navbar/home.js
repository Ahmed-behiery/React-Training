import React, { Component, Fragment } from 'react';
import  Movies from "../component/Movies";
import  Counter from "../component/counter";
import Title from "../component/title";



class  Home extends Component {

    state = {
        count: 0,
        counters: [
          {id: 1, value: 4},
          {id: 2, value: 0},
          {id: 3, value: 2},
          {id: 4, value: 0},
    
        ]
      }
      styles = {
        fontSize: 22,
        padding: "6px 22px",
        background: "blue",
        color: "white",
        fontWeight: 600,
        width: "100px",
        border: "none",
        marginTop: "20px"
    
      }
    
    
    
      increament = (counterr) => {
        const counters = this.state.counters;
        counters.map(n => {
          if(counterr === n.id){
            n.value++
            return n
          }
           return false
        })
        this.setState({  counters  })
      }
      decreament = (counterr) => {
        const counters = this.state.counters;
        counters.map(n => {
          if(counterr === n.id){
            n.value--
            return n
          }
           return false
        })
        this.setState({  counters  })
        
      }
    
      delete = (counter) => {
        const counters = this.state.counters;
        counters.splice(counter, 1);
        this.setState({  counters  })
      }
    
      reset = () => {
        const counters = this.state.counters;
        counters.map( m => 
          m.value = 0
        )
        this.setState({  counters  })
        
    
      }





    render() {
      const user = this.props.user;
        

          const counters = this.state.counters;
          const listCounter = counters.map((counter, index) =>  <Counter
                                                           count={index}
                                                           key={counter.id}
                                                           value={counter.value}
                                                           increament={() => this.increament(counter.id)}
                                                           decreament={() => this.decreament(counter.id)} 
                                                           delete={() => this.delete(index)}  
                                                           /> 
  
          )
  
          
        
        

        return (

          <div className="home">
                


                { user && <Fragment>
                               <Title totalCounters={this.state.counters.filter(m => m.value > 0).length} />
                               <div className="container"> <button style={this.styles} onClick={this.reset}> Reset </button> </div>
                               {listCounter}
                          </Fragment>}


                    <Movies />

            </div>
        );
      
      }
}

export default Home;
