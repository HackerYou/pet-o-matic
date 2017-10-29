import React from 'react';

class Pet extends React.Component {
  render() {
    return <div className='pet'>
      <img src={ this.props.image } />
      <button className={ this.voteClass() } onClick={ () => this.props.onLike(this.props.id)}>
        <i className='fa fa-thumbs-up'></i>&nbsp;
        { this.props.likes }
      </button>
    </div>
  }

  voteClass() {
    if (this.props.likes > 0) {
      return 'vote voted';
    } else {
      return 'vote';
    }
  }
}

export default Pet;
