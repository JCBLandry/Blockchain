import React from 'react';

class Wallet extends React.Component {
	render() {
  	const p = this.props;
  	return (
    	<div className="company">
        <span className="companytext">&#x3C;Company /&#x3E;</span>
    	  <img src={p.avatar_url} />
        <div className="companyinfo">
          <div>Name: {p.proof}</div>
        </div>
    	</div>
    );
  }
}

export default Wallet