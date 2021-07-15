import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../Navbar';
import IdeaForm from './IdeaForm';
import { startAddIdea } from '../../actions/ideas';
import { render } from 'enzyme';


export class AddIdeaPage extends React.Component {
  onSubmit = (idea) => {
    this.props.startAddIdea(idea);
    this.props.history.push('/quotesideas');
  };
  render() {
    return (
      <div>
        <h1>Add Idea</h1>
        <Navbar />
        <IdeaForm
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => ({
  startAddIdea: (idea) => dispatch(startAddIdea(idea))
});

export default connect(mapDispatchToProps)(AddIdeaPage);