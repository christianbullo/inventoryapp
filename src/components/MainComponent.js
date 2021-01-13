import React, { Component } from "react";
import Header from "./HeaderComponent";
import { RequestTable } from "./RequestTable";
import { OrderTable } from "./OrderTable";
import { InStockTable } from "./InStockTable";
import { OutOfStockTable } from "./OutOfStockTable";
import { StatsComponent } from "./StatsComponent";
import { addRequest, addOrder, deleteRequest } from "../store/ActionCreators";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    orders: state.orders,
    requests: state.requests,
    stock: state.stock
  };
};

const mapDispatchToProps = {
  addRequest: (request) => (addRequest(request)),
  addOrder: (order) => (addOrder(order)),
  deleteRequest: (request) => (deleteRequest(request))
};

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <br /> 
        <Switch>
          <Route exact path="/stats" component={ StatsComponent } />
          <Route exact path="/requests" render={() => 
            <RequestTable requests={this.props.requests} 
                addRequest={this.props.addRequest} 
                addOrder={this.props.addOrder}  
                deleteRequest={ this.props.deleteRequest }
            /> } />
          <Route exact path="/orders" render={() => 
            <OrderTable orders={this.props.orders} /> } />
          <Route exact path="/instock" render={() => 
            <InStockTable stock={this.props.stock} /> } />
          <Route exact path="/outofstock" render={() => 
            <OutOfStockTable stock={this.props.stock} /> } />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));