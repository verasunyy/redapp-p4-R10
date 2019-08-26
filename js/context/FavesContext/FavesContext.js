import React, { Component } from 'react';
import { createFave, deleteFave, queryFaves } from "../../config/models"

// import the Realm helpers you just created here
const FavesContext = React.createContext();
class FavesProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faveIds: [],
    };
  }
  getFavedSessionIds = async () => {
    try {
      const savedFaves = await queryFaves();
      const faveIds = savedFaves.map(fave => fave[0]);
      this.setState({ faveIds })
    } catch (e) {
      return e
    }
  }
  addFaveSession = async (sessionId) => {
    try {
      const newFave = await createFave(sessionId);
      if (newFave) this.setState({ faveIds: [...this.state.faveIds, newFave] })
      console.log("context", this.state.faveIds)
      this.getFavedSessionIds()
    } catch (e) {
      throw e
    }
  }

  removeFaveSession = async (sessionId) => {
    try {
      await deleteFave(sessionId);
      this.getFavedSessionIds()
    }
    catch (e) {
      throw e
    }
  }

  componentDidMount() {
    this.getFavedSessionIds();
  }

  render() {
    return (
      <FavesContext.Provider
        value={{
          ...this.state,
          createFaveSession
            : this.addFaveSession,
          removeFaveSession: this.removeFaveSession
        }}  >
        {this.props.children}
      </ FavesContext.Provider>
    );
  }
}

export { FavesProvider };
export default FavesContext;